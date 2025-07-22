import type { IService } from "../services/IService";
import {
	type DTO,
	UpdateProductService,
} from "../services/UpdateProductService";
import type { IUseCase } from "./IUseCase";

class UpdateProductUseCase implements IUseCase {
	constructor(
		private updateProductService: IService = new UpdateProductService(),
	) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.updateProductService.execute(data);

		return result;
	}
}

export { UpdateProductUseCase };
