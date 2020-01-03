const db = require('../config/db');

const schema = new db.Schema({
        head: {
            type: String,
            required: true
        },
        logo:{
            type: String,
            required: true,
        },
        context:{
            type: String,
            required: true,
        },
        num: {
            type: String,
            required: true,
        }
    });

module.exports = db.model('twoMune', schema);
