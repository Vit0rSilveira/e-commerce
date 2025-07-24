import { type DTO, GetCartService } from "../services/GetCartService";
import type { IService } from "../services/IService";
import type { IUseCase } from "./IUseCase";

class GetCartUseCase implements IUseCase {
	constructor(private getCartService: IService = new GetCartService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.getCartService.execute(data);

		return result;
	}
}

export { GetCartUseCase };
