import { Router } from 'express'
import { GetUserController } from '../controller/user.js'

class UserRouter {
    constructor() {
        this.router = Router()
        
        this.router.post('/getUser', new GetUserController().getUser)
    }

    getRouter() {
        return this.router
    }

}

export {
    UserRouter
}