import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

interface IAuthenticateAuthor {
  username: string;
  password: string;
}

export class AuthenticateAuthorUseCase {
  async execute({ username, password }: IAuthenticateAuthor) {
    const author = await prisma.authors.findFirst({
      where: {
        username
      }
    })

    if (!author) throw new Error("Username or password invalid!")
    
    const passwordMatch = await compare(password, author.password);

    if (!passwordMatch) throw new Error("Username or password invalid!")

    const token = sign({ username }, "fea80f2db003d4ebc4536023814aa885", {
      subject: author.id,
      expiresIn: "1d"
    })

    return {
      token
    }
  }
}