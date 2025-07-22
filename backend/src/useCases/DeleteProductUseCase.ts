import {
	DeleteProductService,
	type DTO,
} from "../services/DeleteProductService";
import type { IService } from "../services/IService";
import type { IUseCase } from "./IUseCase";

class DeleteProductUseCase implements IUseCase {
	constructor(
		private deleteProductService: IService = new DeleteProductService(),
	) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.deleteProductService.execute(data);

		return result;
	}
}

export { DeleteProductUseCase };
