const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: {
        type: [String]
    },
    publisher: {
        type: String, 
        required: true
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

module.exports = teamsSchema;