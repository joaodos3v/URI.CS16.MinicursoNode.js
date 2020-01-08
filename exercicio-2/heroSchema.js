const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    powers: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = heroSchema;