import { ApiError } from "../helpers/ApiError";
import type { IProductRepository } from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class DTO {
	id: string;
}

class ReadProductService {
	constructor(
		private productRepository: IProductRepository = new ProductRepository(),
	) {}

	async execute(data: DTO): Promise<any> {
		const product = await this.productRepository.findById(data.id);

		if (!product) {
			throw new ApiError(404, "Product not found");
		}

		return product;
	}
}

export { DTO, ReadProductService };
