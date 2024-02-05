import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api"});

export const getBlogs = async () => {
    try {
        const response = await API.get("/blogs/getBlogs")

        return response.data;
    } catch (error) {
        console.log("Error in getBlogs :: ", error.message)
    }
}

export const addBLog = async (formData) => {
    try {
        const response = await API.post("/blogs/addBlog", formData)

        return response.data
        
    } catch (error) {
        console.log("Error in addBlog :: ", error.message)
    }
}

export const updateBlog = async (id, formData) => {
    try {
        const response = await API.put(`/blogs/updateBlog/${id}`, formData)

        return response
    } catch (error) {
        console.log("Error in updateBlog :: ", error.message)
    }
}

export const deleteBlog = async () => {
    try {
        const response = await API.delete(`/blogs/updateBlog/${id}`)

        return response.data;
    } catch (error) {
        console.log("Error in deleteBlog :: ", error.message)
    }
}