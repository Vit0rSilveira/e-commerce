import type { IService } from "../services/IService";
import { type DTO, ListProductsService } from "../services/ListProductsService";
import type { IUseCase } from "./IUseCase";

class ListProductsUseCase implements IUseCase {
	constructor(
		private listProductsService: IService = new ListProductsService(),
	) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.listProductsService.execute(data);

		return result;
	}
}

export { ListProductsUseCase };
