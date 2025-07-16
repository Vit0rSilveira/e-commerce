import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";
import type { IUseCase } from "../useCases/IUseCase";

const dataModel = z.object({
	password: z.string(),
});

class DeleteUserController {
	constructor(private deleteUserUseCase: IUseCase = new DeleteUserUseCase()) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);
		const id = req.userId;

		if (!id) {
			throw new ApiError(401, "Unauthorized");
		}

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.deleteUserUseCase.execute({
			id,
			...data.data,
		});

		res.status(200).json(result);
	}
}

export { DeleteUserController };
