import type { Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { ListProductsUseCase } from "../useCases/ListProductsUseCase";

class ListProductsController {
	constructor(
		private listProductsController: IUseCase = new ListProductsUseCase(),
	) {}

	async handle(_req: Request, res: Response) {
		const result = await this.listProductsController.execute({});

		if (!result) {
			throw new ApiError(500, "Internal Server Error");
		}

		res.status(200).json(result);
	}
}

export { ListProductsController };
