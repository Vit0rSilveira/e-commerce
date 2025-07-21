import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { RegisterProductUseCase } from "../useCases/RegisterProductUseCase";

const dataModel = z.object({
	title: z.string().min(3).max(40),
	description: z.string().max(100).optional(),
	images: z.array(z.string()).max(10).optional(),
	specifications: z.array(z.string()).max(30).optional(),
	price: z.number().min(0.01).max(100000),
	stock: z.number().min(1).max(10000),
});

class RegisterProductController {
	constructor(
		private registerProductUseCase: IUseCase = new RegisterProductUseCase(),
	) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.registerProductUseCase.execute(data.data);

		res.status(200).json(result);
	}
}

export { RegisterProductController };
