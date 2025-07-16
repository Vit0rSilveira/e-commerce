import type { IService } from "../services/IService";
import { type DTO, UpdatePasswordService } from "../services/UpdatePasswordService";
import type { IUseCase } from "./IUseCase";

class UpdatePasswordUseCase implements IUseCase {
	constructor(private updatePasswordService: IService = new UpdatePasswordService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.updatePasswordService.execute(data);

		return result;
	}
}

export { UpdatePasswordUseCase };
