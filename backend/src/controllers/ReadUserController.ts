import type { Request, Response } from "express";

import type { IUseCase } from "../useCases/IUseCase";
import { ReadUserUseCase } from "../useCases/ReadUserUseCase";

class ReadUserController {
	constructor(private readUserUseCase: IUseCase = new ReadUserUseCase()) {}

	async handle(req: Request, res: Response) {
		const id = req.userId;

		if (!id) {
			return res.status(400).json({ error: "Invalid input" });
		}

		const result = await this.readUserUseCase.execute({ id });

		res.status(200).json(result);
	}
}

export { ReadUserController };
