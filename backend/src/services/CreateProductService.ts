import { ApiError } from "../helpers/ApiError";
import type { IProductRepository } from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class DTO {
	title: string;
	description?: string;
	images?: string[];
	specifications?: string[];
	price: number;
	stock: number;
}

class CreateProductService {
	constructor(
		private productRepository: IProductRepository = new ProductRepository(),
	) {}

	async execute(data: DTO): Promise<any> {
		const product = await this.productRepository.create({
			title: data.title,
			description: data.description,
			images: data.images,
			specifications: data.specifications,
			price: data.price,
			stock: data.stock,
		});

		if (!product) {
			throw new ApiError(500, "Internal server error");
		}

		return {
			id: product.id,
		};
	}
}

export { DTO, CreateProductService };
