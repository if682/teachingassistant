import { Router } from 'express'
import { CreatePlaylistController, DeletePlaylistController, DownloadPlaylistController, GetPlaylistController, ListPlaylistsByCategoryController, ListPlaylistsByNameController, ListPlaylistsByRelevanceController, ListPlaylistsController, UpdatePlaylistController } from '../controller/playlist.js'

class PlaylistRouter {
    constructor() {
        this.router = Router()
        
        this.router.post('/createPlaylist', new CreatePlaylistController().createPlaylist)
        this.router.post('/getPlaylist', new GetPlaylistController().getPlaylist)
        this.router.post('/updatePlaylist', new UpdatePlaylistController().updatePlaylist)
        this.router.delete('/deletePlaylist', new DeletePlaylistController().deletePlaylist)
        this.router.post('/listPlaylistsByName', new ListPlaylistsByNameController().listPlaylistsByName)
        this.router.post('/listPlaylistsByRelevance', new ListPlaylistsByRelevanceController().listPlaylistsByRelevance)
        this.router.post('/downloadPlaylist', new DownloadPlaylistController().downloadPlaylist)
        this.router.post('/listPlaylists', new ListPlaylistsController().listPlaylists)
        this.router.post('/listPlaylistByCategory', new ListPlaylistsByCategoryController().listPlaylistsByCategory)
    }

    getRouter() {
        return this.router
    }

}

export {
    PlaylistRouter
}