interface IEncryption {
	encrypt(text: string): Promise<string>;
	compare(text: string, hash: string): Promise<boolean>;
}

export type { IEncryption };
