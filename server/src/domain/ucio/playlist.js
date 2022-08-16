
class ListPlaylistByAccountIDUseCaseRequest {
    constructor(accountID) {
        this.accountID = accountID
    }
}

class ListPlaylistByAccountIDUseCaseResponse {
    constructor(playlists, error) {
        this.playlists = playlists
        this.error = error
    }
}

export {
    ListPlaylistByAccountIDUseCaseRequest,
    ListPlaylistByAccountIDUseCaseResponse
}