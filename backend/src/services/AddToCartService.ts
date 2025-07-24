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

class AddToCartService {
	constructor(
		private cartRepository: ICartRepository = new CartRepository(),
		private productRepository: IProductRepository = new ProductRepository(),
		private userRepository: IUserRepository = new UserRepository(),
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

		if (product.stock < data.quantity) {
			throw new ApiError(400, "Out of stock");
		}

		const productAlreadyInCart =
			await this.cartRepository.findByUserIdAndProductId(
				data.id,
				data.product_id,
			);

		if (productAlreadyInCart) {
			throw new ApiError(400, "Product already in cart");
		}

		await this.cartRepository.create({
			user_id: data.id,
			product_id: data.product_id,
			quantity: data.quantity,
		});

		return {
			message: "Product added to cart",
		};
	}
}

export { DTO, AddToCartService };
