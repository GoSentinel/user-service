import { RedisClientType, createClient } from "redis";


const redis_client:RedisClientType = createClient();

export async function connectRedis() {
    await redis_client.connect().then(()=>console.log("In Memory Redis Cache Connected!"));
    redis_client.on(
        'error',
        err => console.error(err)
    )
}

export function getRedisClient():RedisClientType {
    return redis_client;
}