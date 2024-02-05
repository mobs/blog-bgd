import AddBlog from "./components/AddBlog"
import Blog from "./components/Blog"


function App() {

  return (
    <div className="flex">
      <div className="w-[60%]">
        <Blog />
      </div>
      <div className="w[-[40%] bg-red-400">
        <AddBlog />
      </div>
      
    </div>
  )
}

export default App
