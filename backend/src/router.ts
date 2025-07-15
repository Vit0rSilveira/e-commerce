import { type Request, type Response, Router } from "express";

import { RegisterUserController } from "./controllers/RegisterUserController";

const router = Router();

const registerUserController = new RegisterUserController();

router.post("/api/user", async (req: Request, res: Response) => {
	await registerUserController.handle(req, res);
});

export { router };
