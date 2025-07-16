import { ApiError } from "../helpers/ApiError";
import { Encryption } from "../providers/Encryption";
import type { IEncryption } from "../providers/IEncryption";
import type { IUserRepository } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

class DTO {
	id: string;
	password: string;
}

class DeleteUserService {
	constructor(
		private userRepository: IUserRepository = new UserRepository(),
		private encryption: IEncryption = new Encryption(),
	) {}

	async execute(data: DTO): Promise<any> {
		const user = await this.userRepository.findById(data.id);

		if (!user) {
			throw new ApiError(404, "User not found");
		}

		if (!(await this.encryption.compare(data.password, user.password))) {
			throw new ApiError(401, "Invalid password");
		}

		await this.userRepository.delete(user);

		return {
			message: "User deleted successfully",
		};
	}
}

export { DTO, DeleteUserService };
