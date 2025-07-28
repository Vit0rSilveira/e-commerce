import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { UpdateCartUseCase } from "../useCases/UpdateCartUseCase";

const dataModel = z.object({
	product_id: z.string(),
	quantity: z.number().min(1),
});

class UpdateCartController {
	constructor(private updateCartUseCase: IUseCase = new UpdateCartUseCase()) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);
		const id = req.userId;

		if (!id) {
			throw new ApiError(401, "Unauthorized");
		}

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.updateCartUseCase.execute({
			id,
			...data.data,
		});

		res.status(200).json(result);
	}
}

export { UpdateCartController };
