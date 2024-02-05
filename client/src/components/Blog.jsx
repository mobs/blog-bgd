import React, { useEffect, useState } from 'react'
import { deleteBlog, getBlogs, updateBlog } from '../api/blog.api'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const handleEdit = (e) => {
        
    }
    
    const handleDelete = async (id) => {
        const response = await deleteBlog(id);
        console.log(response)
    }

    useEffect(() => {
        ;(async () => {
            const response = await getBlogs();
            console.log(response)
            if(response) setBlogs(response.data)
        })()

    }, [])

  return (
    <div className='m-4'>
        {blogs && 
            blogs.map((blog) => {
                return (
                    <div key={blog._id} className='flex flex-col gap-4 border-2 shadow-xl mt-4 p-4'>
                        <div className='text-2xl font-bold'>
                            {blog.title}
                        </div>
                        <div className='text-lg font-semibold'>
                            {blog.content}
                        </div>
                        <div className='flex gap-4'>
                            <button onClick={(id) => handleEdit(blog._id)} className='bg-green-500 p-4'> Edit </button>
                            <button onClick={(id) => handleDelete(blog._id)} className='bg-red-600 p-4'> Delete </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Blog