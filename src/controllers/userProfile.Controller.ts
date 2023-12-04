import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/userSchema";

export async function getMeProfile(_req:Request, _res:Response){
    const id = req.body
    const currUser = await User.findById()
}

export async function updateMeProfile(_req:Request, _res:Response){
    
}