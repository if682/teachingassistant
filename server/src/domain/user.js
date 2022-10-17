import { GetUserUseCaseResponse } from "./ucio/user.js"

class GetUserUseCase{
    constructor(validate, repository) {
        this.validate = validate
        this.repository = repository
    }

    getUser(req) {
        try {
            const errorMessage = this.validate.getUser(req)

            if (!errorMessage) {
                const data = this.repository.getUser(req.accountID)

                return new GetUserUseCaseResponse(data, null)
            } else {
                console.log('ERRO DE VALIDAÇÃO:', errorMessage)
                return new GetUserUseCaseResponse(null, errorMessage)
            }
        } catch(error) {
            console.log('ERRO INTERNO DO SERVIDOR:', error)
            return new GetUserUseCaseResponse(null, error.message)
        }
    }
}

export{
    GetUserUseCase
}