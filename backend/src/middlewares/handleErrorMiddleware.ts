import type { NextFunction, Request, Response } from "express";
import type { ApiError } from "../helpers/ApiError";

function handleErrorMiddleware(
	err: ApiError,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	if (err.status) {
		res.status(err.status).json({
			message: err.message,
		});

		return;
	}

	console.log(err);

	res.status(500).json({
		message: "Internal server error",
	});
}

export { handleErrorMiddleware };
