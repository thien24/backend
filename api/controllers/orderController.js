const Order = require('../Models/Order');  // Giữ lại Order model

// Tạo đơn đặt tour mới
const createOrder = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, numberOfPeople, tripDetails } = req.body;

        // Tạo mới một đơn đặt tour
        const newOrder = new Order({
            fullName,
            email,
            phoneNumber,
            numberOfPeople,
            tripDetails,
            status: 'Pending' // Mặc định trạng thái là 'Pending'
        });

        // Lưu đơn hàng vào cơ sở dữ liệu
        await newOrder.save();

        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

// Lấy danh sách tất cả các đơn hàng
const getAllOrders = async (req, res) => {
    try {
        // Lấy tất cả các đơn hàng từ MongoDB
        const orders = await Order.find();

        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

// Lấy đơn hàng theo ID
const getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;

        // Tìm đơn hàng theo ID
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Error fetching order', error: error.message });
    }
};

// Cập nhật trạng thái đơn hàng
const updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        // Cập nhật trạng thái của đơn hàng
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { status },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found.' });
        }

        res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Error updating order', error: error.message });
    }
};

// Xóa đơn hàng
const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        // Xóa đơn hàng theo ID
        const deletedOrder = await Order.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found.' });
        }

        res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ message: 'Error deleting order', error: error.message });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
