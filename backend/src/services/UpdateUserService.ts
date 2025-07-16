import { ApiError } from "../helpers/ApiError";
import type { IUserRepository } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

class DTO {
	name?: string;
	email?: string;
	id: string;
}

class UpdateUserService {
	constructor(private userRepository: IUserRepository = new UserRepository()) {}

	async execute(data: DTO): Promise<any> {
		const user = await this.userRepository.findById(data.id);

		if (!user) {
			throw new ApiError(404, "User not found");
		}

		if (data.name) {
			user.name = data.name;
		}

		if (data.email) {
			const emailInUse = await this.userRepository.findByEmail(data.email);

			if (emailInUse) {
				throw new ApiError(400, "Email already in use");
			}

			user.email = data.email;
		}

		await this.userRepository.update(user);

		return {
			message: "User updated successfully",
		};
	}
}

export { DTO, UpdateUserService };
