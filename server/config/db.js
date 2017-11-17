require('dotenv').config({ silent: true });

var db = {
    dev: {
        host: process.env.DB_HOST_DEV,
        base: process.env.DB_BASE_DEV
    },
    prod: {
        host: process.env.DB_HOST_PROD,
        base: process.env.DB_BASE_PROD
    }

};

module.exports = db;