import { CreatePlaylistUseCase, DeletePlaylistUseCase, DownloadPlaylistUseCase, GetPlaylistUseCase, ListPlaylistsByNameUseCase, ListPlaylistsByRelevanceUseCase, UpdatePlaylistUseCase } from '../../../../domain/playlist.js'
import { CreatePlaylistUseCaseRequest, DeletePlaylistUseCaseRequest, DownloadPlaylistUseCaseRequest, GetPlaylistUseCaseRequest, ListPlaylistsByNameUseCaseRequest, ListPlaylistsByRelevanceUseCaseRequest, UpdatePlaylistUseCaseRequest } from '../../../../domain/ucio/playlist.js'
import { CreatePlaylistUseCaseRepository, DeletePlaylistUseCaseRepository, DownloadPlaylistUseCaseRepository, GetPlaylistUseCaseRepository, ListPlaylistsByNameUseCaseRepository, ListPlaylistsByRelevanceUseCaseRepository, UpdatePlaylistUseCaseRepository } from '../../../../infrastructure/provider/repository/playlist.js'
import { CreatePlaylistUseCaseValidate, DeletePlaylistUseCaseValidate, DownloadPlaylistUseCaseValidate, GetPlaylistUseCaseValidate, ListPlaylistsByNameUseCaseValidate, ListPlaylistsByRelevanceUseCaseValidate, UpdatePlaylistUseCaseValidate } from '../../../../infrastructure/provider/validate/playlist.js'
import { SuccessResponse , InternalServerErrorResponse } from '../response/response.js'
class CreatePlaylistController {
    createPlaylist(req,res) {
        const { name, image, accountID, category } = req.body

        const ucReq = new CreatePlaylistUseCaseRequest(name,image,accountID, category)
        const validate = new CreatePlaylistUseCaseValidate()
        const repository = new CreatePlaylistUseCaseRepository()

        const usecase = new CreatePlaylistUseCase(validate, repository)

        const ucRes = usecase.createPlaylist(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.playlist)
        }
    }
}

class GetPlaylistController {
    getPlaylist(req, res) {
        const { id } = req.body

        const ucReq = new GetPlaylistUseCaseRequest(id)

        const validate = new GetPlaylistUseCaseValidate()
        const repository = new GetPlaylistUseCaseRepository()

        const usecase = new GetPlaylistUseCase(validate, repository)

        const ucRes = usecase.getPlaylist(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.playlist)
        }
    }
}

class UpdatePlaylistController {
    updatePlaylist(req, res) {
        const { id, name, image, category, musics, accountID  } = req.body

        const ucReq = new UpdatePlaylistUseCaseRequest(id, name, image, category, musics, accountID)

        const validate = new UpdatePlaylistUseCaseValidate()
        const repository = new UpdatePlaylistUseCaseRepository()

        const usecase = new UpdatePlaylistUseCase(validate, repository)

        const ucRes = usecase.updatePlaylist(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.playlist)
        }
    }
}

class DeletePlaylistController {
    deletePlaylist(req, res) {
        const { id } = req.body

        const ucReq = new DeletePlaylistUseCaseRequest(id)

        const validate = new DeletePlaylistUseCaseValidate()
        const repository = new DeletePlaylistUseCaseRepository()

        const usecase = new DeletePlaylistUseCase(validate, repository)

        const ucRes = usecase.deletePlaylist(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.playlist)
        }
    }
}

class ListPlaylistsByNameController {
    listPlaylistsByName(req,res) {
        const { accountID } = req.body

        const ucReq = new ListPlaylistsByNameUseCaseRequest(accountID)

        const validate = new ListPlaylistsByNameUseCaseValidate()
        const repository = new ListPlaylistsByNameUseCaseRepository()

        const usecase = new ListPlaylistsByNameUseCase(validate, repository)

        const ucRes = usecase.listPlaylistsByName(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.playlists)
        }
    }
}

class ListPlaylistsByRelevanceController {
    listPlaylistsByRelevance(req,res) {
        const { accountID } = req.body

        const ucReq = new ListPlaylistsByRelevanceUseCaseRequest(accountID)

        const validate = new ListPlaylistsByRelevanceUseCaseValidate()
        const repository = new ListPlaylistsByRelevanceUseCaseRepository()

        const usecase = new ListPlaylistsByRelevanceUseCase(validate, repository)

        const ucRes = usecase.listPlaylistsByRelevance(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.playlists)
        }
    }
}

class DownloadPlaylistController {
    downloadPlaylist(req, res) {
        const id = req.body.id

        const ucReq = new DownloadPlaylistUseCaseRequest(id)

        const validate = new DownloadPlaylistUseCaseValidate()
        const repository = new DownloadPlaylistUseCaseRepository()

        const usecase = new DownloadPlaylistUseCase(validate, repository)

        const ucRes = usecase.downloadPlaylist(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.urls)
        }
    }
}

export {
    CreatePlaylistController,
    GetPlaylistController,
    UpdatePlaylistController,
    DeletePlaylistController,
    ListPlaylistsByNameController,
    ListPlaylistsByRelevanceController,
    DownloadPlaylistController
}