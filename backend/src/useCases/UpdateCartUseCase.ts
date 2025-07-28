import type { IService } from "../services/IService";
import { type DTO, UpdateCartService } from "../services/UpdateCartService";
import type { IUseCase } from "./IUseCase";

class UpdateCartUseCase implements IUseCase {
	constructor(private updateCartService: IService = new UpdateCartService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.updateCartService.execute(data);

		return result;
	}
}

export { UpdateCartUseCase };
