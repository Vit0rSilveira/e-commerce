import type { Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { ReadProductUseCase } from "../useCases/ReadProductUseCase";

class ReadProductController {
	constructor(
		private readProductUseCase: IUseCase = new ReadProductUseCase(),
	) {}

	async handle(req: Request, res: Response) {
		const id = req.params.id;

		if (!id) {
			throw new ApiError(400, "Missing product id");
		}

		const result = await this.readProductUseCase.execute({ id });

		res.status(200).json(result);
	}
}

export { ReadProductController };
