import { ListMusicsUseCase } from "../../../../domain/music.js";
import { ListMusicsUseCaseRepository } from "../../../../infrastructure/provider/repository/music.js";
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

export {
    ListMusicsController
}