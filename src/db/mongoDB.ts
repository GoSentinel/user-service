import 'dotenv/config'
import mongoose, { ConnectOptions } from 'mongoose';

const {DB_USER,DB_PASS,DB_HOST,DB_PORT} = process.env;

export async function connectMongo(DB_NAME:string) {
    await mongoose.connect(
        `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        {
            useNewUrlParser :true,
            useUnifiedTopology : true
        } as ConnectOptions
    ).then(()=>console.log(`${DB_NAME} Database Connected !`))
}