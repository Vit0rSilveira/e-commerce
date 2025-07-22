import type { IProductRepository } from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class DTO {
	search: string;
	page: number;
	specifications?: string[];
	min_price?: number;
	max_price?: number;
}

class SearchProductsService {
	constructor(
		private productRepository: IProductRepository = new ProductRepository(),
	) {}

	async execute(data: DTO): Promise<any> {
		const products = await this.productRepository.search(data);

		return products;
	}
}

export { DTO, SearchProductsService };
