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

	async search(data: any): Promise<any> {
		return db.product.findMany({
			where: {
				AND: [
					{
						OR: [
							{
								title: {
									contains: data.search,
									mode: "insensitive",
								},
							},
							{
								description: {
									contains: data.search,
									mode: "insensitive",
								},
							},
						],
					},
					{
						specifications: {
							hasEvery: data.specifications ?? [],
						},
					},
					{
						price: {
							gte: data.min_price ?? 0,
							lte: data.max_price ?? 100000,
						},
					},
				],
			},
			take: data.page * 20,
			skip: (data.page - 1) * 20,
		});
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
		return db.product.update({
			where: {
				id: product.id,
			},
			data: {
				deleted_at: new Date(),
			},
		});
	}
}

export { ProductRepository };
