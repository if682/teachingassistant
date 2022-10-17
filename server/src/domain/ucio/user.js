class GetUserUseCaseRequest{
    constructor(accountID) {
        this.accountID = accountID
    }
}

class GetUserUseCaseResponse {
    constructor(user, error) {
        this.user = user
        this.error = error
    }
}

export{
    GetUserUseCaseRequest,
    GetUserUseCaseResponse
}