import { Request, Response } from "express";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

export class CreateAuthorController {
  async handle(request: Request, response: Response) {
    const { username, password, name } = request.body;

    const createAuthorUseCase = new CreateAuthorUseCase();
    const result = await createAuthorUseCase.execute({
      username,
      password,
      name
    })

    return response.json(result)
  }
}