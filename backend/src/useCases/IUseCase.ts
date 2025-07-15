interface IUseCase {
	execute(data: any): Promise<any>;
}

export type { IUseCase };
