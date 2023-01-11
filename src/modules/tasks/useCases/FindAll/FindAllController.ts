import { Request, Response } from "express";
import { FindAllUseCase } from "./FindAllUseCase";

export class FindAllController {
  async handle(request: Request, response: Response) {
    const { id_author } = request;
    
    const findAllUseCase = new FindAllUseCase();
    const result = await findAllUseCase.execute({
      id_author
    });

    return response.json(result);
  }
}