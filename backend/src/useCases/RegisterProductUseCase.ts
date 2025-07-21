import {
	CreateProductService,
	type DTO,
} from "../services/CreateProductService";
import type { IService } from "../services/IService";
import type { IUseCase } from "./IUseCase";

class RegisterProductUseCase implements IUseCase {
	constructor(
		private createProductService: IService = new CreateProductService(),
	) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.createProductService.execute(data);

		return result;
	}
}

export { RegisterProductUseCase };
