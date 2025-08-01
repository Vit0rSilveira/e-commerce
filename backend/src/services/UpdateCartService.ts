import { ApiError } from "../helpers/ApiError";
import { CartRepository } from "../repositories/CartRepository";
import type { ICartRepository } from "../repositories/ICartRepository";
import type { IProductRepository } from "../repositories/IProductRepository";
import type { IUserRepository } from "../repositories/IUserRepository";
import { ProductRepository } from "../repositories/ProductRepository";
import { UserRepository } from "../repositories/UserRepository";

class DTO {
	id: string;
	product_id: string;
	quantity: number;
}

class UpdateCartService {
	constructor(
		private userRepository: IUserRepository = new UserRepository(),
		private productRepository: IProductRepository = new ProductRepository(),
		private cartRepository: ICartRepository = new CartRepository(),
	) {}

	async execute(data: DTO): Promise<any> {
		const user = await this.userRepository.findById(data.id);

		if (!user) {
			throw new ApiError(401, "Unauthorized");
		}

		const product = await this.productRepository.findById(data.product_id);

		if (!product) {
			throw new ApiError(404, "Product not found");
		}

		const cart = await this.cartRepository.findByUserIdAndProductId(
			data.id,
			data.product_id,
		);

		if (!cart) {
			throw new ApiError(400, "Product not in cart");
		}

		if (data.quantity > product.stock) {
			throw new ApiError(400, "Out of stock");
		}

		cart.quantity = data.quantity;

		await this.cartRepository.update(cart);

		return {
			message: "Cart updated successfully",
		};
	}
}

export { DTO, UpdateCartService };
