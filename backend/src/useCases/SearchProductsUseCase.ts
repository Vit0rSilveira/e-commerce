import type { IService } from "../services/IService";
import {
	type DTO,
	SearchProductsService,
} from "../services/SearchProductsService";
import type { IUseCase } from "./IUseCase";

class SearchProductsUseCase implements IUseCase {
	constructor(
		private searchProductsService: IService = new SearchProductsService(),
	) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.searchProductsService.execute(data);

		return result;
	}
}

export { SearchProductsUseCase };
