const express = require('express');
const router = express.Router();
const {upload} = require('../seeders/multer')
const {createBlogsValidtor} = require("../validation/createBlogValidation")
const {getAllBlogs, getUserBlogs, createBlog, deleteBlog, getBlogById, updateBlog} = require("../controllers/blog.controller")
const {isEmpty} = require('../utils/is-empty');
router.get("/api/blogs", async(req, res)=>{
    try {
        const blogs = await getAllBlogs();
        res.status(200).send(blogs)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get("/api/blogs/:id", async(req, res)=>{
    try {
        const blogs = await getUserBlogs(req.params, req.file);
        res.status(200).send(blogs)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get("/api/getblog/:id", async(req, res)=>{
    try {
        const blog = await getBlogById(req.params.id);
        res.status(200).send(blog)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post("/api/blogs",upload.single('selectedFile'), async(req, res)=>{
    const errors = createBlogsValidtor(req.body)
    if(isEmpty(errors)){
        try {
            const blog = await createBlog(req.body, req.file);
            res.status(200).send(blog)
        } catch (e) {
            res.status(500).send(e)
        }
    }else{
        res.status(400).send(errors)
    }
    
})

router.put("/api/blogs" ,upload.single('selectedFile'), async(req, res)=>{
    const errors = createBlogsValidtor(req.body)
    if(isEmpty(errors)){
        try {
            const blog = await updateBlog(req.body, req.file);
            console.log(blog, "111111");
            res.status(200).send(blog)
        } catch (e) {
            res.status(500).send(e)
        }
    }else{
        res.status(400).send(errors)
    }
    
})

router.delete("/api/blogs/:id",async(req, res)=>{
    try {
        await deleteBlog(req.params.id);
        res.status(200).end()
    } catch (e) {
        res.status(500).send(e)
    }
})
module.exports = router
