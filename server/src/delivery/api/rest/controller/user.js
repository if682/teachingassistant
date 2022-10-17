import { GetUserUseCaseRequest } from "../../../../domain/ucio/user.js"
import { GetUserUseCase } from "../../../../domain/user.js"
import { GetUserUseCaseRepository } from "../../../../infrastructure/provider/repository/user.js"
import { GetUserUseCaseValidate } from "../../../../infrastructure/provider/validate/user.js"
import { InternalServerErrorResponse, SuccessResponse } from "../response/response.js"

class GetUserController {
    getUser(req,res){
        const { accountID } = req.body

        const ucReq = new GetUserUseCaseRequest(accountID)

        const validate = new GetUserUseCaseValidate()
        const repository = new GetUserUseCaseRepository()

        const usecase = new GetUserUseCase(validate,repository)

        const ucRes = usecase.getUser(ucReq)

        if (ucRes.error) {
            return new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            return new SuccessResponse().success(res, ucRes.user)
        }
    }

}

export{
    GetUserController
}