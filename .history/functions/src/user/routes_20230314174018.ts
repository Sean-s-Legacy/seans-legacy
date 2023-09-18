import { Router, Request, Response } from "express";
import { createMentee } from "./controller";
import { listUser } from './controller';



const router = Router();

router.use((req: Request, res: Response, next: Function) => {
  console.log("* Route : USERS");
  console.log(req.originalUrl)
  next();
})

/*
 * ==============================
 * NEW USER FOR Mentee
 * ==============================
*/

// create new mentee
router.post('/createMentee', [createMentee]);

//to list users
router.get('/users', listUser);
export default router;


