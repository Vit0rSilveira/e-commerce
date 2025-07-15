import type { IService } from "../services/IService";
import { type DTO, ReadUserService } from "../services/ReadUserService";
import type { IUseCase } from "./IUseCase";

class ReadUserUseCase implements IUseCase {
	constructor(private readUseService: IService = new ReadUserService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.readUseService.execute(data);

		return result;
	}
}

export { ReadUserUseCase };
