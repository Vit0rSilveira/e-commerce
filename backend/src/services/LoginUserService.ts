import { ApiError } from "../helpers/ApiError";
import { Auth } from "../providers/Auth";
import { Encryption } from "../providers/Encryption";
import type { IAuth } from "../providers/IAuth";
import type { IEncryption } from "../providers/IEncryption";
import type { IUserRepository } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

class DTO {
	email: string;
	password: string;
}

class LoginUserService {
	constructor(
		private userRepository: IUserRepository = new UserRepository(),
		private encryption: IEncryption = new Encryption(),
		private auth: IAuth = new Auth(),
	) {}

	async execute(data: DTO): Promise<any> {
		const user = await this.userRepository.findByEmail(data.email);

		if (!user) {
			throw new ApiError(400, "Invalid email or password");
		}

		const isPasswordCorrect = await this.encryption.compare(
			data.password,
			user.password,
		);

		if (!isPasswordCorrect) {
			throw new ApiError(400, "Invalid email or password");
		}

		const token = this.auth.getToken(user.id);

		return {
			token,
		};
	}
}

export { DTO, LoginUserService };
