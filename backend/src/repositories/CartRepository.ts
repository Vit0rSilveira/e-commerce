import { db } from "../database";
import { Cart } from "../models/CartModel";
import type { ICartRepository } from "./ICartRepository";

class CartRepository implements ICartRepository {
	async findByUserIdAndProductId(
		userId: string,
		productId: string,
	): Promise<Cart | null> {
		return db.cart.findFirst({
			where: {
				user_id: userId,
				product_id: productId,
			},
		});
	}

	async findByUserId(userId: string): Promise<Cart[] | null> {
		return db.cart.findMany({
			where: {
				user_id: userId,
			},
		});
	}

	async create(cart: any): Promise<Cart> {
		return db.cart.create({
			data: {
				...cart,
				created_at: new Date(),
			},
		});
	}

	async update(cart: Cart): Promise<Cart> {
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

	async remove(cart: Cart): Promise<Cart> {
		return db.cart.delete({
			where: {
				user_id_product_id: {
					user_id: cart.user_id,
					product_id: cart.product_id,
				},
			},
		});
	}
}

export { CartRepository };
