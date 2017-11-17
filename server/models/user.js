const mongoose = require('mongoose');
//const passwordPlugin = require('mongoose-password-plugin')
const Schema = require('mongoose').Schema;

var schema = new Schema({
    username: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    lastUpdatedDate: { type: Date, default: Date.now }
});

//schema.plugin(passwordPlugin);

schema.pre('save', function(next) {
    this.createdDate = Date.now;
    next();
});

module.exports = mongoose.model('User', schema);