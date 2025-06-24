import { Todo } from "../types";
import fs from "fs-extra";
import express, { Request, Response } from "express";
import { db } from "..";

//  let todos: Todo[] = [];
// export const createTodo = (req: Request, res: Response) => {
//   const {description} = req.body
//   const filePath = "./todo.json";
//   const id = Math.random();

//   if(fs.existsSync(filePath)) {
//     const existingData = fs.readFileSync(filePath, "utf-8");
//     if (existingData.trim().length > 0) {
//       todos = JSON.parse(existingData)
//     }
//   }
//   todos.push({
//     id, description, isComplete: false,
//   });
//   fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

//   res.send("Successfully created todos");
// };

export const addTodo = async (req: Request, res: Response) => {
  const { description, isComplete } = req.body;
  try {
    const response = await db
      .collection("todo")
      .insertOne({ description, isComplete });
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send("aldaataiiiii");
    // res.statusMessage()
  }
};
