import { Router } from 'express'
import { ListMusicsController } from '../controller/music.js'

class MusicRouter {
    constructor() {
        this.router = Router()
        
        this.router.post('/listMusics', new ListMusicsController().listMusics)
    }

    getRouter() {
        return this.router
    }

}

export {
    MusicRouter
}