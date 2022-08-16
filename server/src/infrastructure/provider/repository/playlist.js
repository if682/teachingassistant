import { listPlaylistByAccountID } from '../../internal/playlist.js'


class ListPlaylistByAccountIDUseCaseRepository {
    listPlaylistByAccountID(accountID) {
        return listPlaylistByAccountID(accountID)       
    }
}

export {
    ListPlaylistByAccountIDUseCaseRepository
}