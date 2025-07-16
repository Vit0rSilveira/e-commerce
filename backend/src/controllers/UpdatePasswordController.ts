import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { UpdatePasswordUseCase } from "../useCases/UpdatePasswordUseCase";

const dataModel = z.object({
	old_password: z.string(),
	new_password: z.string().min(8).max(32),
});

class UpdatePasswordController {
	constructor(private updatePasswordUseCase: IUseCase = new UpdatePasswordUseCase()) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);
		const id = req.userId;

		if (!id) {
			throw new ApiError(401, "Unauthorized");
		}

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.updatePasswordUseCase.execute({
			id,
			...data.data,
		});

		res.status(200).json(result);
	}
}

export { UpdatePasswordController };
