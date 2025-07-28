import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import { DeleteCartUseCase } from "../useCases/DeleteCartUseCase";
import type { IUseCase } from "../useCases/IUseCase";

const dataModel = z.object({
	product_id: z.string(),
});

class DeleteCartController {
	constructor(private deleteCartUseCase: IUseCase = new DeleteCartUseCase()) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);
		const id = req.userId;

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		if (!id) {
			throw new ApiError(401, "Unauthorized");
		}

		const result = await this.deleteCartUseCase.execute({ id, ...data.data });

		res.status(200).json(result);
	}
}

export { DeleteCartController };
