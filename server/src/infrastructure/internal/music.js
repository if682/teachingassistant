import { readFileSync, writeFileSync } from 'fs'


//Funções auxiliares

function readDB(table) {
    let data = readFileSync('./src/infrastructure/internal/database/database.json')
    let db = JSON.parse(data)
    return db[table]
}

function writeDB(tableName,updatedTable) {
    let data = readFileSync('./src/infrastructure/internal/database/database.json')
    let db = JSON.parse(data)
    db[tableName] = updatedTable
    writeFileSync('./src/infrastructure/internal/database/database.json', JSON.stringify(db))
}

function nextInt(table) {

    let maxIndex = 1
    if (table.length === 0 || (table.length === 1 && table[0] === null) ) return 1 
    for (let i = 0; i<table.length; i = i+1) {
        if (maxIndex <= table[i].id) {
            maxIndex = table[i].id + 1
        }
    }

    return maxIndex
}

function listMusics() {
    let table = readDB('musics')
    return table ? table : []
}

export {
    listMusics
}