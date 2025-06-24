import express from "express";
import { getTodos } from "../../controller/getTodos.controller";
import { deleteTodo } from "../../controller/deleteTodo.controller";
import { putTodo } from "../../controller/putTodo.controller";
import { addTodo } from "../../controller/addTodo.controller";
import { getTodoById } from "../../controller/getTodoById.controller";

const todoRouter = express.Router();

todoRouter.get("/getTodos", getTodos);
todoRouter.post("/addTodo", addTodo);
todoRouter.get("/getTodoById/:id", getTodoById);
todoRouter.delete("/deleteTodo/:id", deleteTodo);
todoRouter.put("/putTodo/:id", putTodo);
export default todoRouter;
