import { getMusic } from "../../internal/music.js"

class UploadMusicUseCaseValidate {
    uploadMusic(req) {
        if (isEmpty(req.name)) return 'O nome da música não pode ser vazio.'
        if (isEmpty(req.accountID)) return 'O identificador de usuário não pode ser vazio.'
        if (!isNumber(req.accountID)) return 'O identificador de usuário tem que ser um número.'
        if (isEmpty(req.url)) return 'Não há arquivo selecionado.'
        return null
    }
}

class DeleteMusicUseCaseValidate {
    deleteMusic(req) {
        if (isEmpty(req.name)) return 'O nome da playlist não pode ser vazio.'
        if (!getMusic(req.id)) return 'Não há música com esse identificador.'
        return null
    }
}

export {
    UploadMusicUseCaseValidate,
    DeleteMusicUseCaseValidate
}