const db = require('../config/db');

const schema = new db.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    });

module.exports = db.model('oneMune', schema);
