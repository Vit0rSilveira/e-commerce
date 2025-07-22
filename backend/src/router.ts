import { type Request, type Response, Router } from "express";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ListProductsController } from "./controllers/ListProductsController";
import { LoginUserController } from "./controllers/LoginUserController";
import { ReadProductController } from "./controllers/ReadProductController";
import { ReadUserController } from "./controllers/ReadUserController";
import { RegisterProductController } from "./controllers/RegisterProductController";
import { RegisterUserController } from "./controllers/RegisterUserController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";
import { UpdateUserController } from "./controllers/UpdateUserController";

import { ensureAuthenticatedMiddleware } from "./middlewares/ensureAuthenticatedMiddleware";
import { ensureIsAdminMiddleware } from "./middlewares/ensureIsAdminMiddleware";

const router = Router();

const registerUserController = new RegisterUserController();
const loginUserController = new LoginUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();
const deleteUserController = new DeleteUserController();
const listProductsController = new ListProductsController();
const registerProductController = new RegisterProductController();
const readProductController = new ReadProductController();

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

router.put(
	"/api/user",
	ensureAuthenticatedMiddleware,
	async (req: Request, res: Response) => {
		await updateUserController.handle(req, res);
	},
);

router.put(
	"/api/user/password",
	ensureAuthenticatedMiddleware,
	async (req: Request, res: Response) => {
		await updatePasswordController.handle(req, res);
	},
);

router.delete(
	"/api/user",
	ensureAuthenticatedMiddleware,
	async (req: Request, res: Response) => {
		await deleteUserController.handle(req, res);
	},
);

router.get("/api/products", async (req: Request, res: Response) => {
	await listProductsController.handle(req, res);
});

router.get("/api/products/:id", async (req: Request, res: Response) => {
	await readProductController.handle(req, res);
});

router.post(
	"/api/products",
	ensureAuthenticatedMiddleware,
	ensureIsAdminMiddleware,
	async (req: Request, res: Response) => {
		await registerProductController.handle(req, res);
	},
);

export { router };
