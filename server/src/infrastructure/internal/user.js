import { readFileSync } from 'fs'

function readDB(table) {
    let data = readFileSync('./src/infrastructure/internal/database/database.json')
    let db = JSON.parse(data)
    return db[table]
}

function getUser(id) {
    let table = readDB('users')

    for (let i=0; i<table.length; i = i+1) {
        if (id === table[i].id) {
            return table[i]
        }
    }

    return null
}

export{
    getUser
}