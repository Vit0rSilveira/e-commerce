import type { IProductRepository } from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class DTO {
	id: string;
}

class ListProductsService {
	constructor(
		private productRepository: IProductRepository = new ProductRepository(),
	) {}

	async execute(_data: DTO): Promise<any> {
		const products = await this.productRepository.findAll();

		return products;
	}
}

export { DTO, ListProductsService };
