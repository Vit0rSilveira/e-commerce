import { ApiError } from "../helpers/ApiError";
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

		if (!products) {
			throw new ApiError(500, "Internal Server Error");
		}

		return products;
	}
}

export { DTO, ListProductsService };
