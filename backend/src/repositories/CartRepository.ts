import { db } from "../database";
import type { ICartRepository } from "./ICartRepository";

class CartRepository implements ICartRepository {
	async findByUserIdAndProductId(
		userId: string,
		productId: string,
	): Promise<any> {
		return db.cart.findFirst({
			where: {
				user_id: userId,
				product_id: productId,
			},
		});
	}

	async findByUserId(userId: string): Promise<any> {
		return db.cart.findMany({
			where: {
				user_id: userId,
			},
		});
	}

	async create(cart: any): Promise<any> {
		return db.cart.create({
			data: {
				...cart,
				created_at: new Date(),
			},
		});
	}

	async update(cart: any): Promise<any> {
		return db.cart.update({
			where: {
				user_id_product_id: {
					user_id: cart.user_id,
					product_id: cart.product_id,
				},
			},
			data: {
				quantity: cart.quantity,
			},
		});
	}
}

export { CartRepository };
