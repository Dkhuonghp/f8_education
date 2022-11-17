const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.post('/store', CourseController.store); //! Thêm
router.get('/:id/edit', CourseController.edit);
router.post('/handle-form-actions', CourseController.handleFormActions);
router.put('/:id', CourseController.update); //! sửa nhiều
router.patch('/:id/restore', CourseController.restore); //! sửa 1
router.delete('/:id', CourseController.delete); //! xoá
router.delete('/:id/force', CourseController.forceDestroy); //! xoá
router.get('/:slug', CourseController.show);

module.exports = router;
