// import { prisma } from "../../../../database/prismaClient";

// interface ITask {
//   id_author: string;
//   name: string;
//   description?: string
// }

// export class CreateTaskUseCase {
//   async execute({ id_author, name, description = "" }: ITask) {
//     const task = await prisma.tasks.create({
//       data: {
//         id_author,
//         name,
//         description
//       }
//     })

//     return task;
//   }
// }

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