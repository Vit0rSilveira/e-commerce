import { DeleteUserService, type DTO } from "../services/DeleteUserService";
import type { IService } from "../services/IService";
import type { IUseCase } from "./IUseCase";

class DeleteUserUseCase implements IUseCase {
	constructor(private deleteUserService: IService = new DeleteUserService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.deleteUserService.execute(data);

		return result;
	}
}

export { DeleteUserUseCase };
