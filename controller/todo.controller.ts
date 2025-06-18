const todos =[]
const getTodos = (req: Request, res: Response) => {
  req.json({todos})
}
const createTodo = (req: Request, res: Response) => {
  const {description} = req.body
}
export default {getTodos, createTodo}