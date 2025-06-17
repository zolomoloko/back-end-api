import express, { Request, Response } from "express";
import fs from "fs-extra";
import { User } from "../../types";
import { nanoid } from "nanoid";

const userRouter = express.Router();
userRouter.get("/users", (req: Request, res: Response) => {
  const users = fs.readFileSync("./user.json", {
    encoding: "utf-8",
    flag: "r",
  });
  res.json(JSON.parse(users));
});

userRouter.post("/createUser", (req: Request, res: Response) => {
  const { name, age, userName, userEmail, phoneNumber, password }: User =
    req.body;

  const uniqueId = nanoid();

  const filePath = "./user.json"; //edgeer medeelliig aguulsan file neeh

  let users: User[] = [];

  if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, "utf-8");
    if (existingData.trim().length > 0) {
      users = JSON.parse(existingData);
    }
  }

  users.push({ name, age, userName, userEmail, phoneNumber, password, userId: uniqueId, });

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.send("Successfully created User");
});

userRouter.delete("/deletedUser", (req: Request, res: Response) => {
  const { userId } = req.body;
  const existingData = fs.readFileSync("./user.json", "utf-8");
  const deletedUser = JSON.parse(existingData).filter(
    (user: any) => user.userId !== userId
  );
  console.log(deletedUser)

  fs.writeFileSync("./user.json", JSON.stringify(deletedUser, null, 2));
  res.json({ userId });
});

userRouter.put("/updateUser", (req: Request, res: Response) => {
  const { name, age, userId }: {name: string; age: string; userId: string} =
  req.body;
  const existingData = fs.readFileSync("./user.json", "utf-8");

  const updatedUser = JSON.parse(existingData).map((user:any)=> {
    if(user.userId === userId) {
      return { ...user, name: name, age: age };
    }
    if(user.userId !== userId) {
      return "obso"
    }
  });
  fs.writeFileSync("./user.json", JSON.stringify(updatedUser, null, 2));
  res.json(updatedUser);
})
export default userRouter;
//nanoId-unic id ganeretleg ugdug
