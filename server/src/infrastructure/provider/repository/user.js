import { getUser } from "../../internal/user.js";

class GetUserUseCaseRepository {
    getUser(id) {
        return getUser(id)
    }
}

export{
    GetUserUseCaseRepository
}