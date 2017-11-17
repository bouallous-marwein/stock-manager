require('dotenv').config({ silent: true });

var app = {
    dev: {
        secret: process.env.APP_SECRET,
        port: process.env.APP_DEV_PORT
    },
    prod: {
        secret: process.env.APP_SECRET,
        port: process.env.APP_PROD_PORT
    }
};

module.exports = app;