import { useEffect, useState } from "react"
import AddBlog from "./components/AddBlog"
import Blog from "./components/Blog"
import { getBlogs } from "./api/blog.api";


function App() {
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await getBlogs();
      if(response) {
        setBlogs(response.data);
      }
    })()
  }, [blogs])

  return (
    <div className="flex">
      <div className="w-[60%]">
        <Blog setBlogToEdit={setBlogToEdit} blogs={blogs} />
      </div>
      <div className="w[-[40%] bg-red-400">
        <AddBlog blogToEdit={blogToEdit} setBlogToEdit={setBlogToEdit} blogs={blogs}/>
      </div>
      
    </div>
  )
}

export default App
