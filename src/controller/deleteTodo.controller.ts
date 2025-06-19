import { Todo } from "../types";
import fs from "fs-extra";
import express, { Request, Response } from "express";

export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const filePath = "./todo.json";
  const existingData = fs.readFileSync(filePath, "utf8");

  console.log(id);
  const deletedTodo = JSON.parse(existingData).filter(
    (todo: any) => todo.id !== Number(id)
  );
  console.log(deletedTodo);

  if (deletedTodo) {
    fs.writeFileSync(filePath, JSON.stringify(deletedTodo, null, 2));
    res.json(deletedTodo);
  } else {
    res.send("ustsan");
  }
};
