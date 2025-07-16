import { ApiError } from "../helpers/ApiError";
import { Encryption } from "../providers/Encryption";
import type { IEncryption } from "../providers/IEncryption";
import type { IUserRepository } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

class DTO {
	id: string;
	old_password: string;
	new_password: string;
}

class UpdatePasswordService {
	constructor(
		private userRepository: IUserRepository = new UserRepository(),
		private encryption: IEncryption = new Encryption(),
	) {}

	async execute(data: DTO): Promise<any> {
		const user = await this.userRepository.findById(data.id);

		if (!user) {
			throw new ApiError(404, "User not found");
		}

		if (!(await this.encryption.compare(data.old_password, user.password))) {
			throw new ApiError(401, "Invalid password");
		}

		user.password = await this.encryption.encrypt(data.new_password);

		await this.userRepository.update(user);

		return {
			message: "Password updated successfully",
		};
	}
}

export { DTO, UpdatePasswordService };
