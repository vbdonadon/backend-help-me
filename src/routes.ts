import { Router } from "express";

import { CreateAuthorController } from "./modules/authors/useCases/Create/CreateAuthorController";
import { CreateTaskController } from "./modules/tasks/useCases/Create/CreateTaskController";

import { AuthenticateAuthorController } from "./modules/account/authenticateAuthor/AuthenticateAuthorController";

import { DeleteTaskController } from "./modules/tasks/useCases/Delete/DeleteTaskController";

import { ensureAuthenticateAuthor } from "./modules/middlewares/ensureAuthenticateAuthor";
import { FindAllController } from "./modules/tasks/useCases/FindAll/FindAllController";

const routes = Router();

const findAllController = new FindAllController();

const createAuthorController = new CreateAuthorController();
const createTaskController = new CreateTaskController();

const authenticateAuthorController = new AuthenticateAuthorController();

const deleteTaskController = new DeleteTaskController();

routes.get("/tasks", ensureAuthenticateAuthor, findAllController.handle);

routes.post("/author/create/", createAuthorController.handle);
routes.post("/task/create", ensureAuthenticateAuthor, createTaskController.handle);

routes.post("/author/authenticate/", authenticateAuthorController.handle);

routes.delete("/task/delete/:id", ensureAuthenticateAuthor, deleteTaskController.handle);

export { routes };