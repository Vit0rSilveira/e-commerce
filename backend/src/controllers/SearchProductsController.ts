import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { SearchProductsUseCase } from "../useCases/SearchProductsUseCase";

const dataModel = z.object({
	search: z.string().min(2).max(100),
	page: z.number().min(1),
	specifications: z.array(z.string()).max(20).optional(),
	min_price: z.number().optional(),
	max_price: z.number().optional(),
});

class SearchProductsController {
	constructor(
		private searchProductsUseCase: IUseCase = new SearchProductsUseCase(),
	) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.searchProductsUseCase.execute(data.data);

		res.status(200).json(result);
	}
}

export { SearchProductsController };
