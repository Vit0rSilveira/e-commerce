import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import { UserRepository } from "../repositories/UserRepository";

const userRepository = new UserRepository();

async function ensureIsAdminMiddleware(
	req: Request,
	_res: Response,
	next: NextFunction,
) {
	const id = req.userId;

	if (!id) throw new ApiError(401, "Unauthorized");

	const user = await userRepository.findById(id);

	if (!user) throw new ApiError(401, "Unauthorized");

	if (!user.is_admin) throw new ApiError(401, "Unauthorized");

	return next();
}

export { ensureIsAdminMiddleware };
