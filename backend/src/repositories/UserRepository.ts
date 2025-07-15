import { db } from "../database";
import type { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
	async findByEmail(email: string): Promise<any> {
		return db.user.findFirst({
			where: {
				email: email,
			},
		});
	}

	async findById(id: string): Promise<any> {
		return db.user.findFirst({
			where: {
				id: id,
			},
		});
	}

	async create(user: any): Promise<any> {
		return db.user.create({
			data: {
				...user,
				is_admin: false,
				created_at: new Date(),
				updated_at: new Date(),
			},
		});
	}

	async update(user: any): Promise<any> {
		return db.user.update({
			where: {
				id: user.id,
			},
			data: {
				...user,
				updated_at: new Date(),
			},
		});
	}
}

export { UserRepository };
