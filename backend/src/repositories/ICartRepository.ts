import { Cart } from "../models/CartModel";

interface ICartRepository {
	findByUserIdAndProductId(userId: string, productId: string): Promise<Cart | null>;
	findByUserId(userId: string): Promise<Cart[] | null>;
	create(cart: any): Promise<Cart>;
	update(cart: Cart): Promise<Cart>;
	remove(cart: Cart): Promise<Cart>;
}

export type { ICartRepository };
