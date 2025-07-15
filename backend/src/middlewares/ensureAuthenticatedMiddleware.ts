import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import { Auth } from "../providers/Auth";

const auth = new Auth();

function ensureAuthenticatedMiddleware(
	req: Request,
	_res: Response,
	next: NextFunction,
) {
	const token = req.headers.authorization;

	if (!token) throw new ApiError(401, "Unauthorized");

	const id = auth.getData(token.split(" ")[1]);

	if (!id) throw new ApiError(401, "Unauthorized");

	req.userId = id;

	return next();
}

export { ensureAuthenticatedMiddleware };
