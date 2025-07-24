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
}

export { CartRepository };
