#!/usr/bin/env node

const concat = require('concat-stream')
const listen = require('merry/listen')
const notFound = require('merry/404')
const normcore = require('normcore')
const error = require('merry/error')
const Env = require('merry/env')
const crypto = require('crypto')
const merry = require('merry')
const pump = require('pump')

const env = Env({
  PORT: 8080,
  SECRET: String
})
const app = merry()

const feed = normcore('github-to-hypercore')
const key = feed.key.toString('hex')

console.info(JSON.stringify({ key: key }))

app.router([
  ['/404', notFound()],
  ['/', {
    post: function (req, res, params, done) {
      // handle ping events to check if the service is alive
      if (req.headers['x-github-event'] === 'ping') {
        return done()
      }

      const sigHeader = req.headers['x-hub-signature']
      pump(req, concat(concatSink), function (err) {
        if (err) return done(error(500, 'pipe error'))
      })

      function concatSink (buf) {
        const hmac = crypto.createHmac('sha256', env.SECRET)
        hmac.update(buf)
        const signature = hmac.digest('hex')

        if (signature !== sigHeader) {
          return done(error(400, 'invalid x-hub-signature'))
        }

        feed.append({
          headers: req.headers,
          body: buf.toString('utf8')
        })
        done()
      }
    }
  }]
])

listen(env.PORT, app.start())
