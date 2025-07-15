import type { IService } from "../services/IService";
import { type DTO, LoginUserService } from "../services/LoginUserService";
import type { IUseCase } from "./IUseCase";

class LoginUserUseCase implements IUseCase {
	constructor(private loginUserService: IService = new LoginUserService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.loginUserService.execute(data);

		return result;
	}
}

export { LoginUserUseCase };
