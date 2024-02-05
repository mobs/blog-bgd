import React, { useState } from "react";
import { addBLog } from "../api/blog.api";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "", content: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // add blog api
    const data = await addBLog(formData);
  };

  const clear = () => {
    setFormData({ title: "", content: "" });
  };

  return (
    <div className="p-4">
      <div >
        <p
          className="text-left text-3xl font-bold md:ml-4 ml-4 mt-4 w-full"
          id="message"
        >
          Add a Blog
        </p>
        <div className="lg:flex justify-center items-center lg:m-0 m-2">
          <form
            action="#"
            onSubmit={handleSubmit}
            className="mt-8 space-y-8 w-full md:mb-4"
          >
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium">
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                className="shadow-sm border-2 border-gray-200 text-sm rounded-lg block p-2 w-full"
                placeholder="Your blog title"
                onChange={(e) =>
                  setFormData((prev) => ({...prev, title: e.target.value}))
                }
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block mb-2 text-sm font-medium">
                Blog Content
              </label>
              <input
                type="text"
                id="content"
                value={formData.content}
                className="shadow-sm border-2 border-gray-200 text-sm rounded-lg block p-2 w-full"
                placeholder="Your blog content"
                onChange={(e) =>
                  setFormData((prev) => ({...prev, content: e.target.value}))
                }
                required
              />
            </div>

            
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-5 text-sm font-bold text-center rounded-lg sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
