import { ApiError } from "../helpers/ApiError";
import { CartRepository } from "../repositories/CartRepository";
import type { ICartRepository } from "../repositories/ICartRepository";
import type { IProductRepository } from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class DTO {
	id: string;
}

class GetCartService {
	constructor(
		private productRepository: IProductRepository = new ProductRepository(),
		private cartRepository: ICartRepository = new CartRepository(),
	) {}

	async execute(data: DTO): Promise<any> {
		const cart = await this.cartRepository.findByUserId(data.id);

		console.log(cart);

		if (!cart) {
			throw new ApiError(404, "Empty cart");
		}

		const productsInCart = [];

		for (const i of cart) {
			const product = await this.productRepository.findById(i.product_id);

			if (!product) {
				throw new ApiError(404, "Product not found");
			}

			productsInCart.push({
				id: product.id,
				name: product.title,
				price: product.price,
				quantity: i.quantity,
				fullPrice: product.price * i.quantity,
			});
		}

		return productsInCart;
	}
}

export { DTO, GetCartService };
