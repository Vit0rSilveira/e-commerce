import { ApiError } from "../helpers/ApiError";
import type { IUserRepository } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

class DTO {
	id: string;
}

class ReadUserService {
	constructor(private userRepository: IUserRepository = new UserRepository()) {}

	async execute(data: DTO): Promise<any> {
		const user = await this.userRepository.findById(data.id);

		if (!user) {
			throw new ApiError(401, "Unauthorized");
		}

		return {
			id: user.id,
			email: user.email,
			name: user.name,
			is_admin: user.is_admin,
			created_at: user.created_at,
			updated_at: user.updated_at,
		};
	}
}

export { DTO, ReadUserService };
