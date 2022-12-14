import mongoose from "mongoose"
import { env } from "../next.config"

export const Mongoconnect = async () =>{
     mongoose.set('strictQuery', true);
     
     mongoose.connect(process.env.mongodburl)
}