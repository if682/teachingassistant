import { useEffect, useState } from 'react'
import axiosInstance from '../common/server'
import './CreatePlaylist.css'

function CreatePlaylist(props) {


    const { categories, modalRef, openModal, modalController, accountID } = props

    const [playlistName, setPlaylistName] = useState("")

    const [playlistCategory, setPlaylistCategory] = useState(categories.length > 0 ? categories[0]: undefined)

    const [playlistImage, setPlaylistImage] = useState(undefined)

        
    async function createPlaylist() {
        const response = await axiosInstance({
            method: 'post',
            url: '/createPlaylist',
            headers: {}, 
            data: {
                name: playlistName,
                category: playlistCategory,
                image: playlistImage,
                accountID: accountID
            }
          })

        setPlaylistName("")
        setPlaylistCategory(categories.length > 0 ? categories[0]: undefined)
        setPlaylistImage(undefined)

        console.log('NOME:',playlistName, 'Categoria:', playlistCategory,'Imagem:', playlistImage)

        return response.data
    }

    return (
        <div className={ `${modalController} modal`}>
            <div className="modal-content" ref={modalRef}>
                
                <span className='close' onClick={() => openModal()}>X</span>
                <form>
                    <div className="row">
                        <label htmlFor="playlist-name"> Nome da Playlist</label>
                        <input id="playlist-name" type="text" value={playlistName} onChange={(event) => setPlaylistName(event.target.value)}/>
                    </div>
                    <div className="row">
                        <label htmlFor="playlist-image"> Imagem da Playlist</label>
                        <input id="playlist-image" type="file" accept="image/*" value={playlistImage} onChange={(event) => setPlaylistImage(event.target.value)}/>    
                    </div>
                    <div className="row">
                        <label htmlFor="playlist-category"> Selecione uma categoria</label>
                        <select id="playlist-category" value={playlistCategory} onChange={(event)=> setPlaylistCategory(event.target.value)} >
                            {categories.map((el,index) => <option value={el} key={index}>{el}</option>)}
                        </select>    
                    </div>
                    <button onClick={createPlaylist}>Criar</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePlaylist