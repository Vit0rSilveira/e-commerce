interface IProductRepository {
	findById(id: string): Promise<any>;
	findAll(): Promise<any>;
	create(user: any): Promise<any>;
	update(user: any): Promise<any>;
	delete(user: any): Promise<any>;
}

export type { IProductRepository };
