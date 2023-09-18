import {Application}  from "express"
import userRouter from "./user/routes"

export const routesConfig = ( app: Application) => {
    app.use("/users", userRouter)
}

// app.ts
import { getAllUsers } from './user';
import express = require("express");

const app = express();

a
