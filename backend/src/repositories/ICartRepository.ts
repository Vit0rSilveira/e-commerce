interface ICartRepository {
	findByUserIdAndProductId(userId: string, productId: string): Promise<any>;
	create(cart: any): Promise<any>;
}

export type { ICartRepository };
