const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController');
// Các route cho sản phẩm
router.get('/', productController.getAllProducts); // Lấy tất cả sản phẩm
router.get('/:id', productController.getProductById); // Lấy chi tiết sản phẩm
router.post('/', productController.createProduct); // Thêm sản phẩm mới
router.put('/:id', productController.updateProduct); // Cập nhật sản phẩm
router.delete('/:id', productController.deleteProduct); // Xóa sản phẩm

module.exports = router;
