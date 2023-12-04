import mongoose, { Schema, Types } from "mongoose";

interface User{
    _id : Types.ObjectId,
    fName: string,
    lName: string,
    phone: string,
    email?: string,
    createdAt : number,
    avatar? : string,

}

const userSchema = new Schema<User>({
    fName: { type:String, required: true },
    lName: { type:String, required: true },
    phone: { type:String, required: true },
    email: { type:String },
    createdAt : { type:Number, required: true },
    avatar : { type:String },
})

export const User = mongoose.model('User', userSchema);