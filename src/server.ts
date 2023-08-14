import cors, { CorsOptions } from "cors";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";


const server:Express = express();
const port = process.env.PORT ?? 4444;

/* MIDDLEWARES START */
server.use(morgan("short"));

server.use(cors({
    origin:`http://localhost:${port}`,
    credentials:true,
}as CorsOptions))
/* MIDDLEWARES END */

/* ROUTERS START */

// *TEST Route
server.get("/",(_req:Request,res:Response):void=>{
    res.send("HELLO! WELCOME TO USER-SERVICE @ NavJeevan 2.0");
})

/* ROUTERS END */

server.listen(port,():void=>{
    console.log(`⚡️[user-server]: User-Server is running at http://localhost:${port}`);
})