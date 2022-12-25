import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { router } from './src/routes';

const PORT = process.env.PORT || 3001
const app = express();
app.use(cors());
app.use(router)
app.listen(PORT, () => console.log(`APP listening on ${PORT}`));