const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import các route
const productRoute = require('./api/Routes/productRoute');
const categoryRoute = require('./api/Routes/categoryRoute');
const orderRoutes = require('./api/Routes/orderRoutes');

// Khởi tạo express app
const app = express();

app.use(cors());


// Load biến môi trường từ file .env
dotenv.config();

// Middleware
app.use(express.json()); // Xử lý JSON trong request body
app.use(express.urlencoded({ extended: true })); // Xử lý dữ liệu form

// Kết nối MongoDB
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://vanthien562004:vanthien562004@cluster0.bfjs9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to the database successfully'))
    .catch((error) => {
        console.error('Error connecting to the database', error);
        process.exit(1);
    });

// Các route cho sản phẩm
app.use('/products', productRoute);
app.use('/categories', categoryRoute);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => res.send('Thien đang học Node.js'));

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
