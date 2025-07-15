import jwt from "jsonwebtoken";

import type { IAuth } from "./IAuth";

class Auth implements IAuth {
	getToken(data: string): string {
		return jwt.sign({ id: data }, process.env.AUTH_SECRET as string, {
			expiresIn: "15d",
		});
	}

	getData(token: string): string {
		return jwt.verify(token, process.env.AUTH_SECRET as string) as string;
	}
}

export { Auth };
