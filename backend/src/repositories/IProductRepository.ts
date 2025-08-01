import { Product } from "../models/ProductModel";

interface IProductRepository {
	findById(id: string): Promise<Product | null>;
	findAll(): Promise<Product[] | null>;
	search(data: any): Promise<Product[] | null>;
	create(user: any): Promise<Product>;
	update(user: Product): Promise<Product>;
	delete(user: Product): Promise<Product>;
}

export type { IProductRepository };
