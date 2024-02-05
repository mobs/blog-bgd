import React from 'react'
import { deleteBlog } from '../api/blog.api'

const Blog = ({setBlogToEdit, blogData, blogs}) => {

    const handleEdit = (blog) => {
        console.log(blog)
        setBlogToEdit(blog);
    }
    
    const handleDelete = async (id) => {
        const response = await deleteBlog(id);
        if(response) {
            alert("Blog deleted successfuully")
        }
    }


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
                            <button onClick={() => handleEdit(blog)} className='bg-green-500 p-4'> Edit </button>
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