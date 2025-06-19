import express from "express";
import { getTodos } from "../../controller/getTodos.controller";
import { createTodo } from "../../controller/createTodo.controller";
import { getTodoById } from "../../controller/getTodoById.controller";
import { deleteTodo } from "../../controller/deleteTodo.controller";
import { putTodo } from "../../controller/putTodo.controller";


const todoRouter = express.Router();
todoRouter.get("/", getTodos)
todoRouter.post("/", createTodo)
todoRouter.get("/:id", getTodoById)
todoRouter.delete("/:id", deleteTodo)
todoRouter.put("/:id", putTodo)
export default todoRouter