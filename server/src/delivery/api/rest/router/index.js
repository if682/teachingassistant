import { PlaylistRouter } from "./playlist.js"
import { CorsRouter } from "./cors.js"
import { MusicRouter } from "./music.js"
import { UserRouter } from "./user.js"

class Router {
    constructor(app) {
        app.use(new CorsRouter().getRouter())
        app.use(new PlaylistRouter().getRouter())
        app.use(new MusicRouter().getRouter())
        app.use(new UserRouter().getRouter())
    }
}

export {
    Router
}
