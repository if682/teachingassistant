class ListPlaylistByAccountIDUseCaseValidate {
    listPlaylistByAccountID(req) {
        if (req.accountID === null && req.accountID === undefined) return ' O identificador de conta não é válido.'
        if (typeof(req.accountID) !== 'number') return 'O formato do identificador não é compatível.'
        
        return null
    }
}

export {
    ListPlaylistByAccountIDUseCaseValidate
}