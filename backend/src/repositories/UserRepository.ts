import { db } from "../database";
import { User } from "../models/UserModel";
import type { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
	async findByEmail(email: string): Promise<User | null> {
		return db.user.findFirst({
			where: {
				email: email,
			},
		});
	}

	async findById(id: string): Promise<User | null> {
		return db.user.findFirst({
			where: {
				id: id,
			},
		});
	}

	async create(user: any): Promise<User> {
		return db.user.create({
			data: {
				...user,
				created_at: new Date(),
				updated_at: new Date(),
			},
		});
	}

	async update(user: User): Promise<User> {
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

	async delete(user: User): Promise<User> {
		return db.user.update({
			where: {
				id: user.id,
			},
			data: {
				deleted_at: new Date(),
			},
		});
	}
}

export { UserRepository };
