import { PlaylistRouter } from "./playlist_router.js"
import { CorsRouter } from "./cors.js"

class Router {
    constructor(app) {
        app.use(new CorsRouter().getRouter())
        app.use(new PlaylistRouter().getRouter())
    }
}

export {
    Router
}
