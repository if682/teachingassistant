import { createPlaylist, deletePlaylist, getPlaylist, listPlaylistsByName, listPlaylistsByRelevance, updatePlaylist } from '../../internal/playlist.js'

class CreatePlaylistUseCaseRepository {
    createPlaylist(name, image, accountID, category) {
        return createPlaylist(name, image, accountID, category)
    }
}

class GetPlaylistUseCaseRepository {
    getPlaylist(id) {
        return getPlaylist(id)
    }
}

class UpdatePlaylistUseCaseRepository {
    updatePlaylist(playlist) {
        return updatePlaylist(playlist)
    }

    getPlaylist(id) {
        return getPlaylist(id)
    }
}

class DeletePlaylistUseCaseRepository {
    deletePlaylist(id) {
        return deletePlaylist(id)
    }
}

class ListPlaylistsByNameUseCaseRepository {
    listPlaylistsByName(accountID) {
        return listPlaylistsByName(accountID)
    }
}

class ListPlaylistsByRelevanceUseCaseRepository {
    listPlaylistsByRelevance(accountID) {
        return listPlaylistsByRelevance(accountID)
    }
}

class DownloadPlaylistUseCaseRepository {
    downloadPlaylist(id) {
        return downloadPlaylist(id)
    }
}

export {
    CreatePlaylistUseCaseRepository,
    GetPlaylistUseCaseRepository,
    UpdatePlaylistUseCaseRepository,
    DeletePlaylistUseCaseRepository,
    ListPlaylistsByNameUseCaseRepository,
    ListPlaylistsByRelevanceUseCaseRepository,
    DownloadPlaylistUseCaseRepository
}