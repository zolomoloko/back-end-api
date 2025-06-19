import { Todo } from "../types";
import fs from "fs-extra";
import express, {  Request, Response } from "express";


  export const getTodos = (req: Request, res: Response) => {
     const filePath = "./todo.json";
    const todoJson = fs.readFileSync(filePath, "utf8")
    const parsedTodo = JSON.parse(todoJson);
  res.json({ parsedTodo })
}
 


