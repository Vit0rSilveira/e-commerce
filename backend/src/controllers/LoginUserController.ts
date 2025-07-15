import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../helpers/ApiError";
import type { IUseCase } from "../useCases/IUseCase";
import { LoginUserUseCase } from "../useCases/LoginUserUseCase";

const dataModel = z.object({
	email: z.string().email(),
	password: z.string(),
});

class LoginUserController {
	constructor(private loginUserUseCase: IUseCase = new LoginUserUseCase()) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);

		if (!data.success) {
			throw new ApiError(400, "Invalid input");
		}

		const result = await this.loginUserUseCase.execute(data.data);

		res.status(200).json(result);
	}
}

export { LoginUserController };
