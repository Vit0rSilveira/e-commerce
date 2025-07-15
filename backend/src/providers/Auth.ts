import jwt from "jsonwebtoken";

import type { IAuth } from "./IAuth";

interface IJWTPayload {
	id: string;
}

class Auth implements IAuth {
	getToken(data: string): string {
		return jwt.sign({ id: data }, process.env.AUTH_SECRET as string, {
			expiresIn: "15d",
		});
	}

	getData(token: string): string | null {
		try {
			return (
				jwt.verify(token, process.env.AUTH_SECRET as string) as IJWTPayload
			).id;
		} catch {
			return null;
		}
	}
}

export { Auth };
