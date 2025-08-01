import { ApiError } from "../helpers/ApiError";
import type { IProductRepository } from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class DTO {
	id: string;
	title?: string;
	description?: string;
	images?: string[];
	specifications?: string[];
	price?: number;
	stock?: number;
}

class UpdateProductService {
	constructor(
		private productRepository: IProductRepository = new ProductRepository(),
	) {}

	async execute(data: DTO): Promise<any> {
		const product = await this.productRepository.findById(data.id);

		if (!product || product.deleted_at) {
			throw new ApiError(404, "Product not found");
		}

		for (const key of Object.keys(data)) {
			if (data[key as keyof DTO] && key !== "id") {
				(product as any)[key] = data[key as keyof DTO];
			}
		}

		await this.productRepository.update(product);

		return {
			message: "Product updated successfully",
		};
	}
}

export { DTO, UpdateProductService };
