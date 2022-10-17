class ListMusicsUseCaseResponse {
    constructor(musics,error) {
        this.musics = musics
        this.error = error
    }
}

class UploadMusicUseCaseRequest {
    constructor(image, name, owner, album, releaseDate, duration, accountID, url) {
        this.image = image
        this.name = name
        this.owner = owner
        this.album = album
        this.releaseDate = releaseDate
        this.duration = duration
        this.accountID = accountID
        this.url = url
    }
}

class UploadMusicUseCaseResponse {
    constructor(music, error) {
        this.music = music
        this.error = error
    }
}

class DeleteMusicUseCaseRequest {
    constructor(id) {
        this.id = id
    }
}

class DeleteMusicUseCaseResponse {
    constructor(error) {
        this.error = error
    }
}

export {
    ListMusicsUseCaseResponse,
    UploadMusicUseCaseRequest,
    UploadMusicUseCaseResponse,
    DeleteMusicUseCaseRequest,
    DeleteMusicUseCaseResponse
}