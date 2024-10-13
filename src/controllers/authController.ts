import exp, { Request, Response, Router } from 'express'
import LoginDTO from '../DTO/loginDto'
import AuthService from '../services/authService'

const router:Router = exp.Router()

export const login = async (
    req:Request<any,any,LoginDTO>,
    res:Response
):Promise<void> => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            res.status(400).json({
                err: true,
                message: 'All fields are required',
                data: null
            })
            return
        }

        const token = await AuthService.login(username, password)
        res.cookie("token",token).status(200).json({
            err: false,
            message: "here's your token bruh",
            data: token
        })
    } catch (err) {
        console.log(err as Error)
        const [status, msg] = (err as Error).message.split(":")
        res.status(Number(status)).json({
            err: true,
            message: msg || 'Sorry no token today, try again tomorrow',
            data: null
        })
    }
};


// protected route
export const logout = async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: undefined
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
}

export default router