import { User } from "../models/UserModel";

interface IUserRepository {
	findByEmail(email: string): Promise<User | null>;
	findById(id: string): Promise<User | null>;
	create(user: any): Promise<User>;
	update(user: User): Promise<User>;
	delete(user: User): Promise<User>;
}

export type { IUserRepository };
