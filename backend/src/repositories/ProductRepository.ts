import { db } from "../database";
import type { IProductRepository } from "./IProductRepository";

class ProductRepository implements IProductRepository {
	async findById(id: string): Promise<any> {
		return db.product.findFirst({
			where: {
				id: id,
			},
		});
	}

	async findAll(): Promise<any> {
		return db.product.findMany();
	}

	async create(product: any): Promise<any> {
		return db.product.create({
			data: {
				...product,
				description: product.description ? product.description : "",
				images: product.images ? product.images : [],
				specifications: product.specifications ? product.specifications : [],
				created_at: new Date(),
				updated_at: new Date(),
			},
		});
	}

	async update(product: any): Promise<any> {
		return db.product.update({
			where: {
				id: product.id,
			},
			data: {
				...product,
				updated_at: new Date(),
			},
		});
	}

	async delete(product: any): Promise<any> {
		return db.product.delete({
			where: {
				id: product.id,
			},
		});
	}
}

export { ProductRepository };
