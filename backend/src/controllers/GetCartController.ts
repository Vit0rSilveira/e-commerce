import type { Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import { GetCartUseCase } from "../useCases/GetCartUseCase";
import type { IUseCase } from "../useCases/IUseCase";

class GetCartController {
	constructor(private getCartUseCase: IUseCase = new GetCartUseCase()) {}

	async handle(req: Request, res: Response) {
		const id = req.userId;

		if (!id) {
			throw new ApiError(401, "User not authenticated");
		}

		const result = await this.getCartUseCase.execute({ id });

		res.status(200).json(result);
	}
}

export { GetCartController };
