import { Router } from "express"
import { getBlogs, deleteBlog, updateBlog, addBlog} from "../controllers/blog.controller.js"

const router = Router();

router.route("/getBlogs").get(getBlogs);
router.route("/addBlog").post(addBlog)
router.route("/updateBlog/:id").put(updateBlog)
router.route("/deleteBlog/:id").delete(deleteBlog)

export default router;