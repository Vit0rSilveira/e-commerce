import type { Request, Response } from "express";
import { z } from "zod";

import type { IUseCase } from "../useCases/IUseCase";
import { RegisterUserUseCase } from "../useCases/RegisterUserUseCase";

const dataModel = z.object({
	name: z.string().min(3).max(40),
	email: z.string().email(),
	password: z.string().min(8).max(32),
});

class RegisterUserController {
	constructor(
		private registerUserUseCase: IUseCase = new RegisterUserUseCase(),
	) {}

	async handle(req: Request, res: Response) {
		const data = dataModel.safeParse(req.body);

		if (!data.success) {
			return res.status(400).json({ error: "Invalid input" });
		}

		const result = await this.registerUserUseCase.execute(data.data);

		res.status(200).json(result);
	}
}

export { RegisterUserController };
