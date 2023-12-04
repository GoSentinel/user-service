import {Router} from 'express'
import { getMeProfile } from '../controllers/userProfile.Controller';

const userProfileRouter = Router();

userProfileRouter.route("/user/me")
    .get((req,res)=> getMeProfile(req,res))
    .put((req,res)=> updateMeProfile(req,res))

userProfileRouter.route("/user/:id")
    .get()

export default userProfileRouter;