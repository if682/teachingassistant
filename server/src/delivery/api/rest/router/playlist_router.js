import { Router } from 'express'
import { ListPlaylistByAccountIDController } from '../controller/playlist.js'

class PlaylistRouter {
    constructor() {
        this.router = Router()
        
        this.router.get('/listPlaylistByAccountID', new ListPlaylistByAccountIDController().listPlaylistByAccountID)
    }

    getRouter() {
        return this.router
    }

}

export {
    PlaylistRouter
}