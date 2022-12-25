import 'dotenv/config';
import {connect, set} from 'mongoose'

const dbConnect = async () => {
  const DB_URI = <string>process.env.DB_URI;
  Promise.all([
    set('strictQuery', false),
    connect(DB_URI)
  ])
  // await set('strictQuery', false);
  // await connect(DB_URI)
};

export default dbConnect; 