import { ListPlaylistByAccountIDUseCaseResponse } from './ucio/playlist.js'

class ListPlaylistByAccountIDUseCase {
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    listPlaylistByAccountID(req) {
        try {
            const errorMessage = this.validate.listPlaylistByAccountID(req)

            if(!errorMessage) {
                const data = this.repository.listPlaylistByAccountID(req.accountID)
                return new ListPlaylistByAccountIDUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new ListPlaylistByAccountIDUseCaseResponse(null, errorMessage)
            }
        } catch(error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error.message)
            return new ListPlaylistByAccountIDUseCaseResponse(null, error.message)
        }
    }
}

export {
    ListPlaylistByAccountIDUseCase
}