import { CreateUserService, type DTO } from "../services/CreateUserService";
import type { IService } from "../services/IService";
import { LoginUserService } from "../services/LoginUserService";
import type { IUseCase } from "./IUseCase";

class RegisterUserUseCase implements IUseCase {
	constructor(
		private createUserService: IService = new CreateUserService(),
		private loginUserService: IService = new LoginUserService(),
	) {}

	async execute(data: DTO): Promise<any> {
		const { id } = await this.createUserService.execute(data);
		const { token } = await this.loginUserService.execute({
			email: data.email,
			password: data.password,
		});

		return { id, token };
	}
}

export { RegisterUserUseCase };
