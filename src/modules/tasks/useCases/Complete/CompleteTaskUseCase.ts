import { prisma } from "../../../../database/prismaClient";

interface ICompleteTask {
  id: string;
  id_author: string;
}

export class CompleteTaskUseCase {
  async execute({ id, id_author }: ICompleteTask) {
    const taskExist = await prisma.tasks.findFirst({
      where: {
        id
      }
    })

    if (!taskExist) throw new Error('Task does not exist!');

    const task = await prisma.tasks.update({
      where: {
        id
      },
      data: {
        id_author,
        end_at: new Date()
      }
    })

    return task;
  }
}