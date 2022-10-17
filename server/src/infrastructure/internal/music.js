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

function uploadMusic(image, name, owner, album, releaseDate, duration, accountID, url) {
    
    let table = readDB('musics')
    

    const music = {  
        id : nextInt(table),
        name: name,
        image: image,
        accountID: accountID,
        owner:owner,
        releaseDate: releaseDate,
        album: album,
        duration:duration,
        url: url
    }
    if (table.length === 1 && table[0]===null) {
        writeDB('musics', [music])
    } else {
        table.push(music)
        writeDB('musics', table)
    }

    return music

}

function deleteMusic(id) {
    let table = readDB('musics')
    let older_music = table.find((el) =>  el.id === id )
    let i = table.indexOf(older_music)
    //delete table[i]
    let deleted_element = table.splice(i,1);

    table  = table ? table : [""]

    writeDB('musics', table)

    return
}

function getMusic(id) {
    let table = readDB('musics')

    for (let i=0; i<table.length; i = i+1) {
        if (id === table[i].id) {
            return table[i]
        }
    }

    return null

}


export {
    listMusics,
    uploadMusic,
    deleteMusic,
    getMusic
}