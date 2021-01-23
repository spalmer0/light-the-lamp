const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    userId: String,
    teamId: Number
}, { timestamps: true });

module.exports = mongoose.model('Favorite', favoriteSchema);


