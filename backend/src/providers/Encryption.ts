import bcrypt from "bcrypt";
import type { IEncryption } from "./IEncryption";

export class Encryption implements IEncryption {
	async encrypt(text: string): Promise<string> {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(text, salt);

		return hash;
	}

	async compare(text: string, hash: string): Promise<boolean> {
		return await bcrypt.compare(text, hash);
	}
}
