import { Request, Response } from "express";
import { CompleteTaskUseCase } from "./CompleteTaskUseCase";

export class CompleteTaskController {
  async handle(request: Request, response: Response) {
    const { id_author } = request;
    const { id } = request.params;

    const completeTaskUseCase = new CompleteTaskUseCase();
    const result = await completeTaskUseCase.execute({
      id_author,
      id,      
    });

    console.log(result)

    return response.json(result);
  }
}