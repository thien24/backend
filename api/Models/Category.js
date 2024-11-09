// models/Category.js
const mongoose = require('mongoose');

// Định nghĩa schema cho Category
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

// Tạo model từ schema
module.exports = mongoose.model('Category', categorySchema);
