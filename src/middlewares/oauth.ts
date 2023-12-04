import { NextFunction, Request, Response } from "express";
import { getRedisClient } from "../db/redisClient";
import {verify} from "jsonwebtoken"
import 'dotenv/config'

export async function verifyRequest(req:Request, res:Response, next:NextFunction) {
    const authToken = req.headers.authorization;
    const redis_client = getRedisClient();
    if(authToken?.split(" ")[0] !== "Bearer")
        res.status(400).json({
            message : "Bad Request"
        })
    
    const token:string|undefined = authToken?.split(" ")[1];
    const decode = verify(token ?? "", process.env.JWT_ASECRET ?? "WkbydjTO-ybiGju8N02Nuw")
    try{
    redis_client.get(`BL_${decode}`).then(
        (value:string|null) =>{
            if(value === null)
            res.status(401).json({
                message: "Blacklisted User"
            })
            next();
        },
        (err => {throw err})
    )
    next();
    }catch(err){
        console.error(err);
    }
}

export async function getUserByToken(){
    
}