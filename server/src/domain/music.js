import { ListMusicsUseCaseResponse } from "./ucio/music.js"

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

export {
    ListMusicsUseCase
}