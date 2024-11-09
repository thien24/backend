// productController.js
const Product = require('../Models/productModel');

const productController = {
    // Lấy tất cả sản phẩm
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            console.error('Error fetching products:', err);
            res.status(500).json({ message: 'Lỗi khi lấy sản phẩm', error: err.message });
        }
    },

    // Lấy sản phẩm theo ID
    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
            }
            res.status(200).json(product);
        } catch (err) {
            console.error('Error fetching product by ID:', err);
            res.status(500).json({ message: 'Lỗi khi lấy sản phẩm', error: err.message });
        }
    },

    // Thêm sản phẩm mới
    createProduct: async (req, res) => {
        const { name, image, price, description } = req.body;
        try {
            const newProduct = new Product({ name, image, price, description });
            await newProduct.save();
            res.status(201).json({ message: 'Sản phẩm đã được thêm thành công', product: newProduct });
        } catch (err) {
            console.error('Error creating product:', err);
            res.status(500).json({ message: 'Lỗi khi thêm sản phẩm', error: err.message });
        }
    },

    // Cập nhật sản phẩm
    updateProduct: async (req, res) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
            }
            res.status(200).json({ message: 'Sản phẩm đã được cập nhật', product: updatedProduct });
        } catch (err) {
            console.error('Error updating product:', err);
            res.status(500).json({ message: 'Lỗi khi cập nhật sản phẩm', error: err.message });
        }
    },

    // Xóa sản phẩm
    deleteProduct: async (req, res) => {
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id);
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
            }
            res.status(200).json({ message: 'Sản phẩm đã được xóa thành công' });
        } catch (err) {
            console.error('Error deleting product:', err);
            res.status(500).json({ message: 'Lỗi khi xóa sản phẩm', error: err.message });
        }
    }
};

module.exports = productController;
