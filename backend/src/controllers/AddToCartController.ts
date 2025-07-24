import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import { AddToCartUseCase } from "../useCases/AddToCartUseCase";
import type { IUseCase } from "../useCases/IUseCase";

const dataModel = z.object({
	product_id: z.string(),
	quantity: z.number().min(1),
});

class AddToCartController {
	constructor(private addToCartUseCase: IUseCase = new AddToCartUseCase()) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);
		const id = req.userId;

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		if (!id) {
			throw new ApiError(401, "Unauthorized");
		}

		const result = await this.addToCartUseCase.execute({ id, ...data.data });

		res.status(200).json(result);
	}
}

export { AddToCartController };
