import express from "express"
import * as authController from '../controler/auth.js'
import {body} from 'express-validator'
import {validate} from "../middleware/validator.js"

const router = express.Router()

const validateSignup = [
    body('username').trim().isLength({min:3}).withMessage('최소 3자'),
    body('password').trim().isLength({min:4}).withMessage('최소 4자'),
    body('email').trim().isEmail().withMessage('이메일형식확인'), validate
]

router.post('/signup', validateSignup, authController.signup)

router.post('/login', authController.login)

export default router
