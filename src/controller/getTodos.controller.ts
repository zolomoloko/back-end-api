import { Todo } from "../types";
import fs from "fs-extra";
import { Request, Response } from "express";
import { db } from "..";

//   export const getTodos = (req: Request, res: Response) => {
//      const filePath = "./todo.json";
//     const todoJson = fs.readFileSync(filePath, "utf8")
//     const parsedTodo = JSON.parse(todoJson);
//   res.json({ parsedTodo })
// }
export const getTodos = async (req: Request, res: Response) => {
  const response = db.collection("todo").find();
  const todo = await response.toArray();
  res.json(todo);
};
