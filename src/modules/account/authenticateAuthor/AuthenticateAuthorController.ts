import { Request, Response } from "express"
import { AuthenticateAuthorUseCase } from "./AuthenticateAuthorUseCase"

export class AuthenticateAuthorController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateAuthorUseCase = new AuthenticateAuthorUseCase()
    const result = await authenticateAuthorUseCase.execute({
      username,
      password
    })

    return response.json(result)
  }
}