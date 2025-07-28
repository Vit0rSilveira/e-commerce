import { DeleteCartService, type DTO } from "../services/DeleteCartService";
import type { IService } from "../services/IService";
import type { IUseCase } from "./IUseCase";

class DeleteCartUseCase implements IUseCase {
	constructor(private deleteCartService: IService = new DeleteCartService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.deleteCartService.execute(data);

		return result;
	}
}

export { DeleteCartUseCase };
