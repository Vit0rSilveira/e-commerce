import { ApiError } from "../helpers/ApiError";
import { CartRepository } from "../repositories/CartRepository";
import type { ICartRepository } from "../repositories/ICartRepository";

class DTO {
	id: string;
	product_id: string;
}

class DeleteCartService {
	constructor(private cartRepository: ICartRepository = new CartRepository()) {}

	async execute(data: DTO): Promise<any> {
		const cart = await this.cartRepository.findByUserIdAndProductId(
			data.id,
			data.product_id,
		);

		if (!cart) {
			throw new ApiError(400, "Product not in cart");
		}

		await this.cartRepository.remove(cart);

		return {
			message: "Product removed from cart",
		};
	}
}

export { DTO, DeleteCartService };
