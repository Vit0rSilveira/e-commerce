import { type Request, type Response, Router } from "express";
import { AddToCartController } from "./controllers/AddToCartController";
import { DeleteCartController } from "./controllers/DeleteCartController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetCartController } from "./controllers/GetCartController";
import { ListProductsController } from "./controllers/ListProductsController";
import { LoginUserController } from "./controllers/LoginUserController";
import { ReadProductController } from "./controllers/ReadProductController";
import { ReadUserController } from "./controllers/ReadUserController";
import { RegisterProductController } from "./controllers/RegisterProductController";
import { RegisterUserController } from "./controllers/RegisterUserController";
import { SearchProductsController } from "./controllers/SearchProductsController";
import { UpdateCartController } from "./controllers/UpdateCartController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";
import { UpdateProductController } from "./controllers/UpdateProductController";
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
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const searchProductsController = new SearchProductsController();
const addToCartController = new AddToCartController();
const getCartController = new GetCartController();
const updateCartController = new UpdateCartController();
const deleteCartController = new DeleteCartController();

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

router.post("/api/products/search", async (req: Request, res: Response) => {
	await searchProductsController.handle(req, res);
});

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

router.put(
	"/api/products/:id",
	ensureAuthenticatedMiddleware,
	ensureIsAdminMiddleware,
	async (req: Request, res: Response) => {
		await updateProductController.handle(req, res);
	},
);

router.delete(
	"/api/products/:id",
	ensureAuthenticatedMiddleware,
	ensureIsAdminMiddleware,
	async (req: Request, res: Response) => {
		await deleteProductController.handle(req, res);
	},
);

router.get("/api/cart", ensureAuthenticatedMiddleware, async (req, res) => {
	await getCartController.handle(req, res);
});

router.post(
	"/api/cart",
	ensureAuthenticatedMiddleware,
	async (req: Request, res: Response) => {
		await addToCartController.handle(req, res);
	},
);

router.put(
	"/api/cart",
	ensureAuthenticatedMiddleware,
	async (req: Request, res: Response) => {
		await updateCartController.handle(req, res);
	},
);

router.delete(
	"/api/cart",
	ensureAuthenticatedMiddleware,
	async (req: Request, res: Response) => {
		await deleteCartController.handle(req, res);
	},
);

export { router };
