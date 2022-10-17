import { DeleteMusicUseCase, ListMusicsUseCase, UploadMusicUseCase } from "../../../../domain/music.js";
import { DeleteMusicUseCaseRequest, UploadMusicUseCaseRequest } from "../../../../domain/ucio/music.js";
import { DeleteMusicUseCaseRepository, ListMusicsUseCaseRepository, UploadMusicUseCaseRepository } from "../../../../infrastructure/provider/repository/music.js";
import { DeleteMusicUseCaseValidate, UploadMusicUseCaseValidate } from "../../../../infrastructure/provider/validate/music.js";
import { InternalServerErrorResponse, SuccessResponse } from "../response/response.js";

class ListMusicsController {
    listMusics(req, res) {
        const repository = new ListMusicsUseCaseRepository()

        const usecase = new ListMusicsUseCase(repository)

        const ucRes = usecase.listMusics()

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.musics)
        }
    }
}

class UploadMusicController {
    uploadMusic(req,res) {
        const { image, name, owner, album, releaseDate, duration, accountID, url } = req.body

        const ucReq = new UploadMusicUseCaseRequest(image, name, owner, album, releaseDate, duration, accountID, url)

        const validate = new UploadMusicUseCaseValidate()
        const repository = new UploadMusicUseCaseRepository()

        const usecase = new UploadMusicUseCase(validate, repository)

        const ucRes = usecase.uploadMusic(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.music)
        }
    }
}

class DeleteMusicController {
    deleteMusic(req,res) {
        const { id } = req.body

        const ucReq = new DeleteMusicUseCaseRequest(id)

        const validate = new DeleteMusicUseCaseValidate()
        const repository = new DeleteMusicUseCaseRepository()

        const usecase = new DeleteMusicUseCase(validate, repository)

        const ucRes = usecase.deleteMusic(ucReq)


        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, null)
        }
    }
}

export {
    ListMusicsController,
    UploadMusicController,
    DeleteMusicController
}