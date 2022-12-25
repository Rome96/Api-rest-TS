import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { router } from './src/routes';
import db from './src/config/mongo';

const PORT = process.env.PORT || 3001
const app = express();
app.use(cors());
app.use(router);

db().then(() => {
  console.log(`DB ready to connect`)
})

app.listen(PORT, () => console.log(`APP listening on ${PORT}`));