import { prisma } from "../../../../database/prismaClient";

interface IUpdateAuthor {
  id: string;
  name: string;
}

export class UpdateAuthorUseCase {
  async execute({ name, id }: IUpdateAuthor) {
    const author = prisma.authors.update({
      where: {
        id
      },
      data: {
        name
      }
    });

    return author;
  }
}