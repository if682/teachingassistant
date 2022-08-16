const database = {
    //musics table
    musics:  
        [
            {id: 1,
            name:'Falador Passa Mal',
            archive:'falador_passa_mal.mp3',
            artista: 'Originais do Samba'
            },

            {id: 2,
            name:'O telefone Tocou Novamente',
            archive:'o_telefone_tocou_novamente.mp3',
            artista: 'Jorge Ben Jor'
            },

            {id: 3,
            name:'Stay With Me',
            archive:'stay_with_me.mp3',
            artista: 'Miki Matsubara'
            },

            {id: 4,
            name:'Midnight Pretenders',
            archive:'midnight_pretenders.mp3',
            artista: 'Tomoko Aran'
            }
            
        ],
    //Playlist table
    playlists:
        [
            {id: 1,
            name:'top hit Brazil',
            accountID: 1,
            description:'As mais tocadas da época do teu avô.',
            musics: [1, 2]
            },

            {id: 2,
            name:`80's japanese city pop`,
            accountID: 1,
            description:'As mais BADALADAS do anos 80 do japão.',
            musics: [3,4]
            }
        ]
}

export {
    database
}