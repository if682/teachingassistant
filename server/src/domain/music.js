import { DeleteMusicUseCaseResponse, ListMusicsUseCaseResponse, UploadMusicUseCaseResponse } from "./ucio/music.js"

class ListMusicsUseCase {
    constructor(repository) {
        this.repository = repository
    }

    listMusics() {
        try {
            const data = this.repository.listMusics()
            return new ListMusicsUseCaseResponse(data, null)

        } catch (error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new ListMusicsUseCaseResponse(null, error.message)
        }
    }
}

class UploadMusicUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    uploadMusic(req) {
        try {
            const errorMessage = this.validate.uploadMusic(req)

            if(!errorMessage) {
                const data = this.repository.uploadMusic(req.image, req.name, req.owner, req.album, req.releaseDate, req.duration,req.accountID, req.url)

                return new UploadMusicUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new UploadMusicUseCaseResponse(null, errorMessage)
            }
        } catch(error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new UploadMusicUseCaseResponse(null, error.message)
        }
    }
}

class DeleteMusicUseCase {
    constructor(validate,repository) {
        this.validate = validate
        this.repository = repository
    }

    deleteMusic(req) {
        try {
            const errorMessage = this.validate.deleteMusic(req)

            if(!errorMessage) {
                const data = this.repository.deleteMusic(req.id)

                return new DeleteMusicUseCaseResponse(null) 
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new DeleteMusicUseCaseResponse(errorMessage)
            }
        } catch(error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new DeleteMusicUseCaseResponse(error.message)
        }
    }
}

export {
    ListMusicsUseCase,
    UploadMusicUseCase,
    DeleteMusicUseCase
}