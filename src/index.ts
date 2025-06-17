import fs from "fs-extra";
import express, { Request, Response } from "express";
import { User } from "./types";
import userRouter from "./router/user/user";
const app = express(); //ene n shuud neg server asaaj ugdug
app.use(express.json());
app.get("/", (req, res) => {
  res.send({ name: "hello world" , age: "1"});
});
// app.post("/user", (req: Request, res:Response) => { // url n uur baih ystoi
//     const {name, age} = req.body;
//     res.json({ message: `User ${name} is ${age} yers old.`})
// })
// app.put("/updateUser", (req: Request, res:Response) => {
//     const { name, age }=req.body
//     res.send(`updated user ${name} ${age}`);
// })

// app.delete("/deleteUser", (req: Request, res:Response) => {
//   const { userId } = req.body;
//   res.send(`deleted user id ${userId}`);
// });

// app.post("/createUser", (req: Request, res: Response) => {
//   const { name, age, userName, userEmail, phoneNumber, password, userId }: User =
//     req.body;

//   fs.writeFileSync(
//     "./user.json",
//     JSON.stringify([
//       {
//         name,
//         age,
//         userName,
//         userEmail,
//         phoneNumber,
//         password,
//         userId,
//       },
//     ])
//   );

//   res.send("Successfully created User");
// });

// app.get("/users", (req: Request, res: Response) => {
//   const users = fs.readFileSync("./user.json", { encoding: "utf8", flag: "r" });
//   res.json(JSON.parse(users));
// });
app.use("/", userRouter);

app.listen(3000, () => {
  // hed deer asaah portoo bichij ugnu
  console.log(`Example app listening on port http://localhost:3000`);
});
