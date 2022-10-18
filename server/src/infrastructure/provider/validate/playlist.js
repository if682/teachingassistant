import { getPlaylist } from '../../internal/playlist.js'
import { isEmpty, isNumber, isString } from './validate.js'
class CreatePlaylistUseCaseValidate {
    createPlaylist(req) {
        if (isEmpty(req.name)) return 'O nome da playlist não pode ser vazio.'
        if (isEmpty(req.accountID)) return 'O identificador de usuário não pode ser vazio.'
        if (!isNumber(req.accountID)) return 'O identificador de usuário tem que ser um número.'
        return null
    }
}

class GetPlaylistUseCaseValidate {
    getPlaylist(req) {
        if (isEmpty(req.id)) return 'O identificador da playlist não pode ser vazio.'
        return null
    }
}

class UpdatePlaylistUseCaseValidate {
    updatePlaylist(req) {
        if (isEmpty(req.id)) return 'O identificador de playlist não pode ser vazio.'
        if (isEmpty(req.name)) return 'O nome da playlist não pode ser vazio.'
        if (isEmpty(req.accountID)) return 'O identificador de usuário não pode ser vazio.'
        if (!getPlaylist(req.id)) return 'Não existe playlist com esse identificador no banco'

        return null
    }
}

class DeletePlaylistUseCaseValidate {
    deletePlaylist(req) {
        if (isEmpty(req.id)) return 'O identificador de playlist não pode ser vazio.'
        if (!isNumber(req.id)) return 'O identificador de playlist tem que ser um número.'
        if (!getPlaylist(req.id)) return 'Não existe playlist com esse identificador no banco'

        return null
    }
}

class ListPlaylistsByNameUseCaseValidate {
    listPlaylistsByName(req) {
        if (isEmpty(req.accountID)) return 'O identificador de usuário não pode ser vazio.'
        if (!isNumber(req.accountID)) return 'O identificador de usuário tem que ser um número.'

        return null
    }
}

class ListPlaylistsByRelevanceUseCaseValidate {
    listPlaylistsByRelevance(req) {
        if (isEmpty(req.accountID)) return 'O identificador de usuário não pode ser vazio.'
        if (!isNumber(req.accountID)) return 'O identificador de usuário tem que ser um número.'

        return null
    }
}

class DownloadPlaylistUseCaseValidate {
    downloadPlaylist(req) {
        if (isEmpty(req.id)) return 'O identificador de playlist não pode ser vazio.'
        return null
    }
}

class ListPlaylistsByCategoryUseCaseValidate {
    listPlaylistsByCategory(req) {
        if (isEmpty(req.category)) return 'A categoria não pode ser vazia.'
        return null
    }
}

export {
    CreatePlaylistUseCaseValidate,
    GetPlaylistUseCaseValidate,
    UpdatePlaylistUseCaseValidate,
    DeletePlaylistUseCaseValidate,
    ListPlaylistsByNameUseCaseValidate,
    ListPlaylistsByRelevanceUseCaseValidate,
    DownloadPlaylistUseCaseValidate,
    ListPlaylistsByCategoryUseCaseValidate

}