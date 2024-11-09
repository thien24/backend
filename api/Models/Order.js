const mongoose = require('mongoose');

// Định nghĩa schema cho Order
const orderSchema = new mongoose.Schema({
    fullName: { type: String, required: true }, // Tên người đặt
    email: { type: String, required: true }, // Email người đặt
    phoneNumber: { type: String, required: true }, // Số điện thoại người đặt
    numberOfPeople: { type: Number, required: true }, // Số người tham gia tour
    orderDate: { type: Date, default: Date.now }, // Ngày đặt tour
    status: { type: String, default: 'pending' }, // Trạng thái đơn hàng (pending, confirmed, cancelled)
    imageUrlUser: { type: String, required: false }, // Hình ảnh của người đặt
    imageUrlTrip: { type: String, required: false }, // Hình ảnh của chuyến đi
});

// Tạo model từ schema
module.exports = mongoose.model('Order', orderSchema);
