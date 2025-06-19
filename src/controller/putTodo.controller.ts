import fs from "fs-extra";
import express, { Request, Response } from "express";

export const putTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const { description }: { description: string } = req.body;
  const filePath = "./todo.json";
  const existingData = fs.readFileSync(filePath, "utf8");
  const parsed = JSON.parse(existingData);
  const updateTodo = parsed.map((todo: any) => {
    console.log(typeof todo.id);
  
    if (todo.id === Number(id)) {
      return { ...todo, description: description };
    } else if (todo.id !== Number(id)) {
      return todo;
    }
  });
  fs.writeFileSync(filePath, JSON.stringify(updateTodo, null, 2))
  res.json(updateTodo);
 
};
