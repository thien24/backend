// controllers/categoryController.js
const Category = require('../Models/Category');

const categoryController = {
    // Lấy tất cả các danh mục
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
        } catch (err) {
            console.error('Error fetching categories:', err);
            res.status(500).json({ message: 'Lỗi khi lấy danh mục', error: err.message });
        }
    },

    // Lấy danh mục theo ID
    getCategoryById: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) {
                return res.status(404).json({ message: 'Danh mục không tồn tại' });
            }
            res.status(200).json(category);
        } catch (err) {
            console.error('Error fetching category by ID:', err);
            res.status(500).json({ message: 'Lỗi khi lấy danh mục', error: err.message });
        }
    },

    // Thêm danh mục mới
    createCategory: async (req, res) => {
        const { name, description } = req.body;
        try {
            const newCategory = new Category({ name, description });
            await newCategory.save();
            res.status(201).json({ message: 'Danh mục đã được thêm thành công', category: newCategory });
        } catch (err) {
            console.error('Error creating category:', err);
            res.status(500).json({ message: 'Lỗi khi tạo danh mục', error: err.message });
        }
    },

    // Cập nhật danh mục
    updateCategory: async (req, res) => {
        const { name, description } = req.body;
        try {
            const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
            if (!updatedCategory) {
                return res.status(404).json({ message: 'Danh mục không tồn tại' });
            }
            res.status(200).json({ message: 'Danh mục đã được cập nhật', category: updatedCategory });
        } catch (err) {
            console.error('Error updating category:', err);
            res.status(500).json({ message: 'Lỗi khi cập nhật danh mục', error: err.message });
        }
    },

    // Xóa danh mục
    deleteCategory: async (req, res) => {
        try {
            const deletedCategory = await Category.findByIdAndDelete(req.params.id);
            if (!deletedCategory) {
                return res.status(404).json({ message: 'Danh mục không tồn tại' });
            }
            res.status(200).json({ message: 'Danh mục đã được xóa thành công' });
        } catch (err) {
            console.error('Error deleting category:', err);
            res.status(500).json({ message: 'Lỗi khi xóa danh mục', error: err.message });
        }
    }
};

module.exports = categoryController;
