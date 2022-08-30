const {Blog} = require('../models');

const getAllBlogs = async () => {
    return new Promise(async resolve => {
        const blogs = await Blog.findAll({
            include: ['author' , 'category']
        });
        resolve(blogs)
    })
}
const getUserBlogs = async (user) => {
    return new Promise(async resolve => {
        const blogs = await Blog.findAll({
            include: ['author' , 'category'],
            where: { 
                author_id:user.id
            },
            order: [
                ['id', 'DESC'],
            ],
        });
        resolve(blogs)
    })
}

const getBlogById = (id) => {
    return new Promise(async resolve => {
        const blog = await Blog.findOne({
            include: ['author' , 'category'],
            where: { 
                id:id
            }   
        });
        resolve(blog)
    })
}

const createBlog = async (data, file) =>new Promise(async resolve => {
    if(!file){
        const newBlog = await Blog.create({
            title: data.title,
            description: data.description, 
            category_id: data.category_id, 
            author_id: data.author_id
        })
        resolve(newBlog) 
    }else{
        const newBlog = await Blog.create({
            title: data.title,
            description: data.description, 
            category_id: data.category_id, 
            author_id: data.author_d,
            image: "/images/blogs/" + file.filename
        })
        resolve(newBlog) 
    }
})

const updateBlog = async ({id , title , description , category_id} , file) => {
    let blog 
    if(!file){
        return new Promise(async resolve => {
            blog = await Blog.update({title , description , category_id} ,{where:{id}});
            resolve(blog)
        })   
    }else{
        return new Promise(async resolve => {
            blog = await Blog.update({title , description , category_id , image: "/images/blogs/" + file.filename} ,{where:{id}});
            resolve(blog)
        })   
    }
}


const deleteBlog = async (id) =>{
    return new Promise(async resolve => {
        await Blog.destroy({where : {id}});
        resolve('true')
    })
}
module.exports = {
    getAllBlogs,
    getUserBlogs,
    createBlog,
    deleteBlog,
    getBlogById,
    updateBlog
}