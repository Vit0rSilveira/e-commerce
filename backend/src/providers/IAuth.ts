interface IAuth {
	getToken(data: string): string;
	getData(token: string): string | null;
}

export type { IAuth };
