import type { Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import { DeleteProductUseCase } from "../useCases/DeleteProductUseCase";
import type { IUseCase } from "../useCases/IUseCase";

class DeleteProductController {
	constructor(
		private deleteProductUseCase: IUseCase = new DeleteProductUseCase(),
	) {}

	async handle(req: Request, res: Response) {
		const id = req.params.id;

		if (!id) {
			throw new ApiError(400, "Missing product id");
		}

		const result = await this.deleteProductUseCase.execute({ id });

		res.status(200).json(result);
	}
}

export { DeleteProductController };
