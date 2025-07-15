import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";

const dataModel = z.object({
	name: z.string().min(3).max(40).optional(),
	email: z.string().email().optional(),
});

class UpdateUserController {
	constructor(private updateUserUseCase: IUseCase = new UpdateUserUseCase()) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);
		const id = req.userId;

		if (!id) {
			throw new ApiError(401, "Unauthorized");
		}

		if (!data.success || (!data.data.name && !data.data.email)) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.updateUserUseCase.execute({
			id,
			...data.data,
		});

		res.status(200).json(result);
	}
}

export { UpdateUserController };
