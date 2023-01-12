import { prisma } from "../../../../database/prismaClient";

interface IDeleteTask {
  id_author: string;
  id: string;
}

export class DeleteTaskUseCase {
  async execute({ id_author, id }: IDeleteTask) {
    const deleteTask = await prisma.tasks.deleteMany({
      where: {
        id_author: id_author,
        id: id,
      }
    })

    return deleteTask;
  }
}