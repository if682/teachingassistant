import { Router } from 'express'
import { DeleteMusicController, ListMusicsController, UploadMusicController } from '../controller/music.js'

class MusicRouter {
    constructor() {
        this.router = Router()
        
        this.router.post('/listMusics', new ListMusicsController().listMusics)
        this.router.post('/uploadMusic', new UploadMusicController().uploadMusic)
        this.router.post('/deleteMusic', new DeleteMusicController().deleteMusic)
    }

    getRouter() {
        return this.router
    }

}

export {
    MusicRouter
}