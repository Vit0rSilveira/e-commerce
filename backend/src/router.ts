import { type Request, type Response, Router } from "express";
import { LoginUserController } from "./controllers/LoginUserController";
import { ReadUserController } from "./controllers/ReadUserController";
import { RegisterUserController } from "./controllers/RegisterUserController";

import { ensureAuthenticatedMiddleware } from "./middlewares/ensureAuthenticatedMiddleware";

const router = Router();

const registerUserController = new RegisterUserController();
const loginUserController = new LoginUserController();
const readUserController = new ReadUserController();

router.post("/api/user", async (req: Request, res: Response) => {
	await registerUserController.handle(req, res);
});

router.post("/api/auth/login", async (req: Request, res: Response) => {
	await loginUserController.handle(req, res);
});

router.get(
	"/api/user",
	ensureAuthenticatedMiddleware,
	async (req: Request, res: Response) => {
		await readUserController.handle(req, res);
	},
);

export { router };
