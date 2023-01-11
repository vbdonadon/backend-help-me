import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

interface ICreateAuthor {
  username: string;
  password: string;
  name: string;
}

export class CreateAuthorUseCase {
  async execute({ username, name, password }: ICreateAuthor) {
    const authorExist = await prisma.authors.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if (authorExist) throw new Error("Username already exist!")

    const hashPassword = await hash(password, 10);

    const author = await prisma.authors.create({
      data: {
        username,
        password: hashPassword,
        name
      }
    })

    return author
  }
}