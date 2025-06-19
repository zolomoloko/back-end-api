import { Todo } from "../types";
import fs from "fs-extra";
import express, {  Request, Response } from "express";

 let todos: Todo[] = [];
export const createTodo = (req: Request, res: Response) => {
  const {description} = req.body
  const filePath = "./todo.json";
  const id = Math.random();

  if(fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, "utf-8");
    if (existingData.trim().length > 0) {
      todos = JSON.parse(existingData)
    }
  }
  todos.push({
    id, description, isComplete: false,
  });
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

  res.send("Successfully created todos");
};
