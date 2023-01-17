import { Request, Response } from "express";
import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase";

export class UpdateAuthorController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const { id_author: id } = request;

    console.log('Name:')
    console.log(name)
    console.log('')

    console.log('id:')
    console.log(id)

    const updateAuthorUseCase = new UpdateAuthorUseCase();
    const result = await updateAuthorUseCase.execute({
      id,
      name
    })

    return response.json(result)
  }
}