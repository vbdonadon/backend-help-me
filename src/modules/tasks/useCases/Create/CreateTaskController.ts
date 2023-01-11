import { Request, Response } from "express"
import { CreateTaskUseCase } from "./CreateTaskUseCase"

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body
    const { id_author } = request

    const createTasksUseCase = new CreateTaskUseCase();
    const result = await createTasksUseCase.execute({
      id_author,
      name,
      description
    })

    return response.json(result)
  }
}