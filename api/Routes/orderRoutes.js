const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Tạo đơn hàng mới
router.post('/create', orderController.createOrder);

// Lấy tất cả các đơn hàng
router.get('/', orderController.getAllOrders);

// Lấy đơn hàng theo ID
router.get('/:orderId', orderController.getOrderById);

// Cập nhật trạng thái đơn hàng
router.put('/update/:orderId', orderController.updateOrder);

// Xóa đơn hàng theo ID
router.delete('/delete/:orderId', orderController.deleteOrder);

module.exports = router;
