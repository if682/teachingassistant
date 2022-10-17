import { listMusics, uploadMusic, deleteMusic } from "../../internal/music.js";

class ListMusicsUseCaseRepository {
    listMusics() {
        return listMusics()
    }
}

class UploadMusicUseCaseRepository {
    uploadMusic(image, name, owner, album, releaseDate, duration, accountID, url) {
        return uploadMusic(image, name, owner, album, releaseDate, duration, accountID, url)
    }
}

class DeleteMusicUseCaseRepository {
    deleteMusic(id) {
        return deleteMusic(id)
    }
}

export {
    ListMusicsUseCaseRepository,
    UploadMusicUseCaseRepository,
    DeleteMusicUseCaseRepository
}