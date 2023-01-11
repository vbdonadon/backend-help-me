import { Request, Response } from "express"
import { DeleteTaskUseCase } from "./DeleteTaskUseCase"

export class DeleteTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { id_author } = request;

    const deleteTaskUseCase = new DeleteTaskUseCase();
    const result = await deleteTaskUseCase.execute({
      id_author,
      id
    });

    return response.json(result);
  }
}