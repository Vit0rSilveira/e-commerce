import { ApiError } from "../helpers/ApiError";
import { Encryption } from "../providers/Encryption";
import type { IEncryption } from "../providers/IEncryption";
import type { IUserRepository } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

class DTO {
	name: string;
	email: string;
	password: string;
}

class CreateUserService {
	constructor(
		private userRepository: IUserRepository = new UserRepository(),
		private encryption: IEncryption = new Encryption(),
	) {}

	async execute(data: DTO): Promise<any> {
		const emailAlreadyInUse = await this.userRepository.findByEmail(data.email);

		if (emailAlreadyInUse) {
			throw new ApiError(400, "Email already in use");
		}

		const hashedPassword = await this.encryption.encrypt(data.password);

		const user = await this.userRepository.create({
			name: data.name,
			email: data.email,
			password: hashedPassword,
		});

		return {
			id: user.id,
		};
	}
}

export { DTO, CreateUserService };
