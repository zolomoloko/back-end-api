import { Todo } from "../src/types";
import fs from "fs-extra";
import express, { Request, Response } from "express";

export const todos: Todo[] = [];
const getTodos = (req: Request, res: Response) => {
  res.json({ todos })
}
const createTodo = (req: Request, res: Response) => {
  const {description} = req.body
  const filePath = "./todo.json";
  const id = Math.random();

  if(fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, "utf-8");
    if (existingData.trim().length > 0) {
      todo:String = JSON.parse(existingData)
    }
  }
  todos.push({
    id, description, isComplete: false,
  });
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

  res.send("Successfully created todos");
};
export default {getTodos, createTodo}