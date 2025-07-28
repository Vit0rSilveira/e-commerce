interface ICartRepository {
	findByUserIdAndProductId(userId: string, productId: string): Promise<any>;
	findByUserId(userId: string): Promise<any>;
	create(cart: any): Promise<any>;
	update(cart: any): Promise<any>;
}

export type { ICartRepository };
