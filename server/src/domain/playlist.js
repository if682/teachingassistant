import {CreatePlaylistUseCaseResponse, DeletePlaylistUseCaseResponse, DownloadPlaylistUseCaseResponse, GetPlaylistUseCaseResponse, ListPlaylistsByNameUseCaseResponse, ListPlaylistsByRelevanceUseCaseResponse, UpdatePlaylistUseCaseResponse } from './ucio/playlist.js'
class CreatePlaylistUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    createPlaylist(req) {
        try {
            const errorMessage = this.validate.createPlaylist(req)

            if (!errorMessage) {
                const data = this.repository.createPlaylist(req.name,req.image, req.accountID, req.category)
                return new CreatePlaylistUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new CreatePlaylistUseCaseResponse(null, errorMessage)
            }
        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new CreatePlaylistUseCaseResponse(null, error.message)
        }
    }   
}

class GetPlaylistUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    getPlaylist(req) {
        try {
            const errorMessage = this.validate.getPlaylist(req)

            if (!errorMessage) {
                const data = this.repository.getPlaylist(req.id)
                return new GetPlaylistUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new GetPlaylistUseCaseResponse(null, errorMessage)
            }
        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new GetPlaylistUseCaseResponse(null, error.message)
        }
    }
}

class UpdatePlaylistUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    updatePlaylist(req) {
        try {
            const errorMessage = this.validate.updatePlaylist(req)

            if (!errorMessage) {
                const playlist = this.repository.getPlaylist(req.id)
                
                playlist.name = req.name
                playlist.image = req.image
                playlist.category = req.category
                playlist.musics = req.musics

                const data = this.repository.updatePlaylist(playlist)
                return new UpdatePlaylistUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new UpdatePlaylistUseCaseResponse(null, errorMessage)
            }
        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new UpdatePlaylistUseCaseResponse(null, error.message)
        }
    }   
}

class DeletePlaylistUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    deletePlaylist(req) {
        try {
            const errorMessage = this.validate.deletePlaylist(req)

            if (!errorMessage) {
                const data = this.repository.deletePlaylist(req.id)
                return new DeletePlaylistUseCaseResponse(null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new DeletePlaylistUseCaseResponse(errorMessage)
            }
        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new DeletePlaylistUseCaseResponse(error.message)
        }
    }
}

class ListPlaylistsByNameUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    listPlaylistsByName(req) {
        try {
            const errorMessage = this.validate.listPlaylistsByName(req)

            if (!errorMessage) {
                const data = this.repository.listPlaylistsByName(req.accountID)
                return new ListPlaylistsByNameUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new ListPlaylistsByNameUseCaseResponse(null, errorMessage)
            }
        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new ListPlaylistsByNameUseCaseResponse(null, error.message)
        }
    }
}

class ListPlaylistsByRelevanceUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    listPlaylistsByRelevance(req) {
        try {
            const errorMessage = this.validate.listPlaylistsByRelevance(req)

            if (!errorMessage) {
                const data = this.repository.listPlaylistsByRelevance(req.accountID)
                return new ListPlaylistsByRelevanceUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new ListPlaylistsByRelevanceUseCaseResponse(null, errorMessage)
            }
        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new ListPlaylistsByRelevanceUseCaseResponse(null, error.message)
        }
    }
}

class DownloadPlaylistUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    downloadPlaylist(req) {

        try {
            const errorMessage =  this.validate.downloadPlaylist(req)

            if (!errorMessage) {
                const data = this.repository.downloadPlaylist(req.id)

                return new DownloadPlaylistUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new DownloadPlaylistUseCaseResponse(null, errorMessage)
            }
        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new DownloadPlaylistUseCaseResponse(null, error.message)
        }
    }
}

export {
    CreatePlaylistUseCase,
    GetPlaylistUseCase,
    UpdatePlaylistUseCase,
    DeletePlaylistUseCase,
    ListPlaylistsByNameUseCase,
    ListPlaylistsByRelevanceUseCase,
    DownloadPlaylistUseCase
}