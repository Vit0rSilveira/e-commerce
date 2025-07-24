import { AddToCartService, type DTO } from "../services/AddToCartService";
import type { IService } from "../services/IService";
import type { IUseCase } from "./IUseCase";

class AddToCartUseCase implements IUseCase {
	constructor(private addToCartService: IService = new AddToCartService()) {}

	async execute(data: DTO): Promise<any> {
		const result = await this.addToCartService.execute(data);

		return result;
	}
}

export { AddToCartUseCase };
