import { prisma } from "../../../../database/prismaClient";

interface IFindAll {
  id_author: string
}

export class FindAllUseCase {
  async execute({ id_author }: IFindAll) {
    const tasks = await prisma.tasks.findMany({
      where: {
        id_author
      },
      select: {
        author: {
          select: {
            name: true,
          }
        },
        id: true,
        name: true,        
        description: true
      }
    });

    return tasks
  }
}