import { type Request, type Response, Router } from "express";
import { LoginUserController } from "./controllers/LoginUserController";
import { RegisterUserController } from "./controllers/RegisterUserController";

const router = Router();

const registerUserController = new RegisterUserController();
const loginUserController = new LoginUserController();

router.post("/api/user", async (req: Request, res: Response) => {
	await registerUserController.handle(req, res);
});

router.post("/api/auth/login", async (req: Request, res: Response) => {
	await loginUserController.handle(req, res);
});

export { router };
