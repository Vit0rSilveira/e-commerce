import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { UpdateProductUseCase } from "../useCases/UpdateProductUseCase";

const dataModel = z.object({
	title: z.string().min(3).max(40).optional(),
	description: z.string().max(100).optional(),
	images: z.array(z.string()).max(10).optional(),
	specifications: z.array(z.string()).max(30).optional(),
	price: z.number().min(0.01).max(100000).optional(),
	stock: z.number().min(1).max(10000).optional(),
});

class UpdateProductController {
	constructor(
		private updateProductUseCase: IUseCase = new UpdateProductUseCase(),
	) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);
		const id = req.params.id;

		if (!id) {
			throw new ApiError(404, "Product not found");
		}

		if (!data.success || Object.keys(data.data).length === 0) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.updateProductUseCase.execute({
			id,
			...data.data,
		});

		res.status(200).json(result);
	}
}

export { UpdateProductController };
