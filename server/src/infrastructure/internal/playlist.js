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
    console.log('chega aqui')
    for (let i = 0; i<table.length; i = i+1) {
        if (maxIndex <= table[i].id) {
            maxIndex = table[i].id + 1
        }
    }

    return maxIndex
}


// Funções Playlist

function createPlaylist(name, image, accountID, category) {
    
    let table = readDB('playlists')
    console.log(table)
    

    const playlist = {  
        id : nextInt(table),
        name: name,
        image: image,
        accountID: accountID,
        musics: [],
        followers: [],
        relevance: 0,
        category: category ? category : ""
    }
    if (table.length === 1 && table[0]===null) {
        writeDB('playlists', [playlist])
    } else {
        table.push(playlist)
        writeDB('playlists', table)
    }

    return playlist

}

function getPlaylist(id) {
    let table = readDB('playlists')

    for (let i=0; i<table.length; i = i+1) {
        if (id === table[i].id) {
            return table[i]
        }
    }

    return null

}

function updatePlaylist(playlist) {
    let table = readDB('playlists')
    let older_playlist = table.find((el) =>  el.id === playlist.id )
    let i = table.indexOf(older_playlist)
    table[i] = playlist
    

    writeDB('playlists', table)

    return playlist
}

function deletePlaylist(id) {
    let table = readDB('playlists')
    let older_playlist = table.find((el) =>  el.id === id )
    let i = table.indexOf(older_playlist)
    delete table[i]

    table  = table ? table : [""]

    writeDB('playlists', table)
    return
}

function listPlaylistsByName(accountID) {
    let table = readDB('playlists')
    let playlists = table.filter(el => el.accountID === accountID)
    playlists.sort((a,b) => a.name.localeCompare(b.name))
    return playlists ? playlists : []
}

function listPlaylistsByRelevance(accountID) {
    let table = readDB('playlists')
    let playlists = table.filter(el => el.accountID === accountID)
    playlists.sort((a,b) => b.relevance - a.relevance)
    return playlists ? playlists : []
}

export {
    createPlaylist,
    getPlaylist,
    updatePlaylist,
    deletePlaylist,
    listPlaylistsByName,
    listPlaylistsByRelevance
}
