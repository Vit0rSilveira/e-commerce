interface IAuth {
	getToken(data: string): string;
	getData(token: string): string;
}

export type { IAuth };
