import { prisma } from "../../../../database/prismaClient";

interface ITask {
  id_author: string;
  name: string;
  description?: string
}

export class CreateTaskUseCase {
  async execute({ id_author, name, description = "" }: ITask) {
    const task = await prisma.tasks.create({
      data: {
        id_author,
        name,
        description
      }
    })

    return task
  }
}