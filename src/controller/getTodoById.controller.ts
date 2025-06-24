import { Todo } from "../types";
import fs from "fs-extra";
import express, { Request, Response } from "express";
import { db } from "..";
import { ObjectId } from "mongodb";

//  export const getTodoById = (req: Request, res: Response) => {
//   const filePath = "./todo.json";
//   const { id } = req.params;
//   const ById = fs.readFileSync(filePath, "utf8")
//   const todos = JSON.parse(ById)
//   const todo = todos.find((todo: any) => todo.id === Number(id));
//   if(!todo) {
//     res.json({success: false, message: "not found todo"});
//   }
//   res.json({todo});
// }

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await db.collection("todo").findOne({ _id: new ObjectId(id) });

  if (!todo) {
    res.json({ success: false, message: "Todo olsongui" });
  }
  res.json({ todo });
};
