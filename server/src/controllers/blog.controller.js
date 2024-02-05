import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Blog } from "../models/blog.model.js";

export const getBlogs = asyncHandler(async (req, res) => {
    try {
        const blogs = await Blog.find();
                
        if(!blogs) {
            throw new ApiError(404, "Blogs not found")
        }

        return res
            .status(200)
            .json(new ApiResponse(200, blogs, "Blogs fetched successfully"))
        
    } catch (error) {
        throw res
            .status(error.statusCode)
            .json({
                status: error.statusCode,
                message: error.message
            })
    }
})

export const addBlog = asyncHandler (async (req, res) => {
    const { title, content } = req.body

    try {
        if(!title || !content) {
            throw new ApiError(400, "All fields are required")
        }    

        const blog = await Blog.create({
            title,
            content
        })

        if(!blog) {
            return new ApiError(500, "Something went wrong while creating blog")
        }

        return res
            .status(201)
            .json(new ApiResponse(201, blog, "Blog added succesfully"))

    } catch (error) {
        throw res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message,
          });
    }
})

export const updateBlog = asyncHandler( async (req, res) => {
    const { id } = req.params
    try {   
        if(!id) {
            throw new ApiError(400, "Id is required to delete a blog")
        }

        
    } catch (error) {
        throw res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message,
        });
    }
})

export const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {   
        if(!id) {
            throw new ApiError(400, "Id is required to delete a blog")
        }

        const blog = await Blog.findByIdAndDelete(id);

        return res
            .status(200)
            .json(new ApiResponse(200, blog, "Blog deleted successfully"))
        
    } catch (error) {
        throw res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message,
        });
    }
})