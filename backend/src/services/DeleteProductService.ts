import { ApiError } from "../helpers/ApiError";
import type { IProductRepository } from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class DTO {
	id: string;
}

class DeleteProductService {
	constructor(
		private productRepository: IProductRepository = new ProductRepository(),
	) {}

	async execute(data: DTO): Promise<any> {
		const product = await this.productRepository.findById(data.id);

		if (!product || product.deleted_at) {
			throw new ApiError(404, "Product not found");
		}

		await this.productRepository.delete(product);

		return {
			message: "Product deleted successfully",
		};
	}
}

export { DTO, DeleteProductService };
