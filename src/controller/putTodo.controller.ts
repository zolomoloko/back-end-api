import fs from "fs-extra";
import express, { Request, Response } from "express";
import { db } from "..";
import { ObjectId } from "mongodb";

// export const putTodo = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { description }: { description: string } = req.body;
//   const filePath = "./todo.json";
//   const existingData = fs.readFileSync(filePath, "utf8");
//   const parsed = JSON.parse(existingData);
//   const updateTodo = parsed.map((todo: any) => {
//     console.log(typeof todo.id);
  
//     if (todo.id === Number(id)) {
//       return { ...todo, description: description };
//     } else if (todo.id !== Number(id)) {
//       return todo;
//     }
//   });
//   fs.writeFileSync(filePath, JSON.stringify(updateTodo, null, 2))
//   res.json(updateTodo);
 
// };

export const putTodo = async (req: Request, res: Response) => {
  const { description } = req.body;
  const { id } = req.params;
  try{
    const update = db
    .collection("todo")
    .updateOne({_id: new ObjectId(id)}, {$set: {description}})
    res.json(await update)
  } catch (error){
    console.log(error )
  }
   
}