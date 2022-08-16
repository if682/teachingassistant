import { ListPlaylistByAccountIDUseCase } from '../../../../domain/playlist.js'
import { ListPlaylistByAccountIDUseCaseRequest } from '../../../../domain/ucio/playlist.js'
import { ListPlaylistByAccountIDUseCaseRepository } from '../../../../infrastructure/provider/repository/playlist.js'
import { ListPlaylistByAccountIDUseCaseValidate } from '../../../../infrastructure/provider/validate/playlist.js'
import { SuccessResponse , InternalServerErrorResponse } from '../response/response.js'

class ListPlaylistByAccountIDController {
    listPlaylistByAccountID(req, res) {
        const { accountID } = req.body

        const ucReq = new ListPlaylistByAccountIDUseCaseRequest(accountID)

        const validate = new ListPlaylistByAccountIDUseCaseValidate()
        const repository = new ListPlaylistByAccountIDUseCaseRepository()

        const usecase = new ListPlaylistByAccountIDUseCase(validate, repository)

        const ucRes = usecase.listPlaylistByAccountID(ucReq)

        if(ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.playlists)
        }
    }
}

export {
    ListPlaylistByAccountIDController
}