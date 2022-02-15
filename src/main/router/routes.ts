import { Router } from "express";
import UserController from "../controller/UserController"; 

const router = Router()

router.post('/users', UserController.postUser)
router.get('/users/:email', UserController.getUserByEmail)

export default router