import { database } from '../internal/database/database.js'

function listPlaylistByAccountID(accountID) {
    const playlist_table = database.playlists
    const playlists = playlist_table.filter(e => e.accountID===accountID)

    return playlists 
}

export {
    listPlaylistByAccountID
}