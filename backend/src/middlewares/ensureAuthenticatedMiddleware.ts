import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import { Auth } from "../providers/Auth";
import { UserRepository } from "../repositories/UserRepository";

const auth = new Auth();
const userRepository = new UserRepository();

async function ensureAuthenticatedMiddleware(
	req: Request,
	_res: Response,
	next: NextFunction,
) {
	const token = req.headers.authorization;

	if (!token) throw new ApiError(401, "Unauthorized");

	const id = auth.getData(token.split(" ")[1]);

	if (!id) throw new ApiError(401, "Unauthorized");

	const user = await userRepository.findById(id);

	if (!user || user.deleted_at) {
		throw new ApiError(401, "Unauthorized");
	}

	req.userId = id;

	return next();
}

export { ensureAuthenticatedMiddleware };
