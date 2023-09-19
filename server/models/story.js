const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    id: {
        type: String,
    },
    prompt: {
        type: String,
    },
    text: {
        type: String
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Story', storySchema);