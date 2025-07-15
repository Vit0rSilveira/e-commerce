import type { IService } from "../services/IService";
import { type DTO, UpdateUserService } from "../services/UpdateUserService";
import type { IUseCase } from "./IUseCase";

class UpdateUserUseCase implements IUseCase {
	constructor(private updateUserService: IService = new UpdateUserService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.updateUserService.execute(data);

		return result;
	}
}

export { UpdateUserUseCase };
