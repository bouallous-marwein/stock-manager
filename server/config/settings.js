require('dotenv').config({ silent: true });
var db = require('./db');
var app = require('./app');

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'dev',

    // Environment-dependent settings
    dev: {
        db: {
            host: db.dev.host,
            base: db.dev.base,
        },
        app: {
            secret: app.dev.secret,
            port: app.dev.port
        }
    },
    prod: {
        db: {
            host: db.prod.host,
            base: db.prod.base
        },
        app: {
            secret: app.prod.secret,
            port: app.prod.port
        }
    }
};