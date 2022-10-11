//Retorna true caso o valor for nulo ou indefinido
function isEmpty(val) {
    return (val === null || val === undefined || val.length === 0) ? true : false
}

//Retorna true caso o valor seja do tipo número
function isNumber(val) {
    return typeof(val) === 'number' ? true : false
}

function isString(val) {
    return typeof(val) === 'string' ? true : false
}

export {
    isEmpty,
    isNumber,
    isString
}