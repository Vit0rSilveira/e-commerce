interface IUserRepository {
	findByEmail(email: string): Promise<any>;
	findById(id: string): Promise<any>;
	create(user: any): Promise<any>;
}

export type { IUserRepository };
