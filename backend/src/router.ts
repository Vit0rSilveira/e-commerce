import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.get('/', (_: Request, res: Response) => {
    res.send('Welcome to the API!');
});

export { router };
