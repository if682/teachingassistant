class CreatePlaylistUseCaseRequest {
    constructor(name,image, accountID, category) {
        this.name = name
        this.image = image
        this.accountID = accountID
        this.category = category
    }
}

class CreatePlaylistUseCaseResponse {
    constructor(playlist, error) {
        this.playlist = playlist
        this.error = error
    }
}

class GetPlaylistUseCaseRequest {
    constructor(id) {
        this.id = id
    }
}

class GetPlaylistUseCaseResponse {
    constructor(playlist, error) {
        this.playlist = playlist
        this.error = error
    }
}

//name,image, musics, category
class UpdatePlaylistUseCaseRequest {
    constructor(id,name,image, category, musics, accountID) {
        this.id = id
        this.name = name
        this.image = image
        this.category = category
        this.musics = musics,
        this.accountID = accountID
    }
}

class UpdatePlaylistUseCaseResponse {
    constructor(playlist, error) {
        this.playlist = playlist
        this.error = error
    }
}

class DeletePlaylistUseCaseRequest {
    constructor(id) {
        this.id = id
    }
}

class DeletePlaylistUseCaseResponse {
    constructor(error) {
        this.error = error
    }
}

class ListPlaylistsByNameUseCaseRequest {
    constructor(accountID) {
        this.accountID = accountID
    }
}

class ListPlaylistsByNameUseCaseResponse {
    constructor(playlists, error) {
        this.playlists = playlists
        this.error = error
    }
}

class ListPlaylistsByRelevanceUseCaseRequest {
    constructor(accountID) {
        this.accountID = accountID
    }
}

class ListPlaylistsByRelevanceUseCaseResponse {
    constructor(playlists, error) {
        this.playlists = playlists
        this.error = error
    }
}

class DownloadPlaylistUseCaseRequest {
    constructor(id) {
        this.id = id
    }
}

class DownloadPlaylistUseCaseResponse {
    constructor(urls, error) {
        this.urls = urls
        this.error = error
    }
}

class ListPlaylistsUseCaseResponse {
    constructor(playlists, error) {
        this.playlists = playlists
        this.error = error
    }
}

class ListPlaylistsByCategoryUseCaseRequest {
    constructor(category) {
        this.category = category
    }
}

class ListPlaylistsByCategoryUseCaseResponse {
    constructor(playlists, error) {
        this.playlists = playlists
        this.error = error
    }
}

export {
    CreatePlaylistUseCaseRequest,
    CreatePlaylistUseCaseResponse,
    GetPlaylistUseCaseRequest,
    GetPlaylistUseCaseResponse,
    UpdatePlaylistUseCaseRequest,
    UpdatePlaylistUseCaseResponse,
    DeletePlaylistUseCaseRequest,
    DeletePlaylistUseCaseResponse,
    ListPlaylistsByNameUseCaseRequest,
    ListPlaylistsByNameUseCaseResponse,
    ListPlaylistsByRelevanceUseCaseRequest,
    ListPlaylistsByRelevanceUseCaseResponse,
    DownloadPlaylistUseCaseRequest,
    DownloadPlaylistUseCaseResponse,
    ListPlaylistsUseCaseResponse,
    ListPlaylistsByCategoryUseCaseRequest,
    ListPlaylistsByCategoryUseCaseResponse
}