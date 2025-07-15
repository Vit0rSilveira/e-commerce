import { CreateUserService, type DTO } from "../services/CreateUserService";
import type { IService } from "../services/IService";
import type { IUseCase } from "./IUseCase";

class RegisterUserUseCase implements IUseCase {
	constructor(private createUserService: IService = new CreateUserService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.createUserService.execute(data);

		return result;
	}
}

export { RegisterUserUseCase };
