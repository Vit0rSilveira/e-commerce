import express from "express";

import { handleErrorMiddleware } from "./middlewares/handleErrorMiddleware";
import { router } from "./router";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(router);
app.use(handleErrorMiddleware);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
