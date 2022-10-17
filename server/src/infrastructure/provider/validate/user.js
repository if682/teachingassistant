import { isEmpty } from "./validate.js"

class GetUserUseCaseValidate {
    getUser(req) {
        if (isEmpty(req.accountID)) return 'O identificador da conta não pode ser vazio.'
        return null
    }
}

export{
    GetUserUseCaseValidate
}
