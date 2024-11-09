// routes/categoryRoute.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Các route cho category
router.get('/', categoryController.getAllCategories); // Lấy tất cả danh mục
router.get('/:id', categoryController.getCategoryById); // Lấy danh mục theo ID
router.post('/', categoryController.createCategory); // Thêm danh mục mới
router.put('/:id', categoryController.updateCategory); // Cập nhật danh mục
router.delete('/:id', categoryController.deleteCategory); // Xóa danh mục

module.exports = router;
