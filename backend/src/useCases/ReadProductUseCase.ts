import type { IService } from "../services/IService";
import { type DTO, ReadProductService } from "../services/ReadProductService";
import type { IUseCase } from "./IUseCase";

class ReadProductUseCase implements IUseCase {
	constructor(
		private readProductService: IService = new ReadProductService(),
	) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.readProductService.execute(data);

		return result;
	}
}

export { ReadProductUseCase };
