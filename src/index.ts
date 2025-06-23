import { MongoClient, Db } from "mongodb";
import todoRouter from "./router/todo/todo";
import userRouter from "./router/user/user";
import express, { Request, Response } from "express";

const app = express(); //ene n shuud neg server asaaj ugdug
app.use(express.json());
let db: Db;

const uri = "mongodb+srv://zoljargalG:12345678Zl@cluster0.rnpyotm.mongodb.net/";
const connectDb = async () => {
  try {
    const client = new MongoClient(uri);
    // await client.connect();
    db = client.db("sample_mflix");
    console.log("database connected");
    return client;
  } catch (error) {
    return error;
  }
};

app.get("/", async (req: Request, res: Response) => {
  const client = new MongoClient(uri);
  await client.connect();
  // ymar db gees awhaa bichij ugnu
  const db = client.db("sample_mflix");
  //tuhain db d baigaa collectioniig bichij ugnu
  const responses = db.collection("users").find();
  // response array bolgoj huxirgana.
  const users = await responses.toArray();
  res.json(users);
});

app.post("/addUser", async (req: Request, res: Response) => {
  try {
    const response = db
      .collection("users")
      .insertOne({ name: "Vampire", age: 2900 });
    res.json((await response).insertedId.getTimestamp());
  } catch (error) {
    console.log(error);
  }
});

app.delete("/deleteUser", async (req: Request, res: Response) => {});

app.listen(3000, async () => {
  // hed deer asaah portoo bichij ugnu
  await connectDb();
  console.log(`Example app listening on port http://localhost:3000`);
});

// app.get("/", (req: Request, res: Response) => {
//   res.send({ name: "hello world" , age: "1"});
// });
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
