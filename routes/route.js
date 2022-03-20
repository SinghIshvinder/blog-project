const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController')
const blogController = require('../controllers/blogController')
const middleware = require('../middlewares/middleware')


router.post('/authors', authorController.createAuthor);

router.post('/login', authorController.loginAuthor);

router.post('/blogs', middleware.loginCheck, blogController.createBlog);

router.get('/filterblogs', middleware.loginCheck, blogController.getBlog);

router.put('/blogs/:blogId', middleware.loginCheck, blogController.updateDetails);

router.delete('/blogs/:blogId', middleware.loginCheck, blogController.deleteBlogById);

router.delete('/blogs', middleware.loginCheck, blogController.deleteBlogByQuery);



module.exports = router;