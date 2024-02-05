import { useEffect, useState } from "react"
import AddBlog from "./components/AddBlog"
import Blog from "./components/Blog"
import { addBLog, getBlogs, updateBlog } from "./api/blog.api";


function App() {
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "", content: ""
  })
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await getBlogs();
      if(response) {
        setBlogs(response.data);
      }
    })()
  }, [blogs])

  useEffect(() => {
    ;(async ()  => {
      const response = await updateBlog(id, blogData);

      if(response) {
        setBlogs(response.data)
      }
    })()
  }, [blogData])

  return (
    <div className="flex">
      <div className="w-[60%]">
        <Blog setBlogToEdit={setBlogToEdit} blogData={blogData} blogs={blogs} />
      </div>
      <div className="w[-[40%] bg-red-400">
        <AddBlog blogToEdit={blogToEdit} blogData={blogData} setBlogData={setBlogData}/>
      </div>
      
    </div>
  )
}

export default App
