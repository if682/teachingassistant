import { useEffect, useState } from 'react'
import axiosInstance from '../common/server'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CreatePlaylist.css'
import { s3 } from '../../config/aws'
import { useNavigate } from 'react-router';


function CreatePlaylist(props) {


    const { categories, modalRef, openModal, modalController, accountID } = props

    const [playlistName, setPlaylistName] = useState("")

    const [playlistCategory, setPlaylistCategory] = useState(categories.length > 0 ? categories[0]: undefined)

    const [playlistImage, setPlaylistImage] = useState('')
    const [preview, setPreview] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    console.log(localStorage.getItem('accountID'))

    const navigate = useNavigate()

    const closeModal = () => {
      openModal()
      setPlaylistImage(undefined)
      setErrorMessage(undefined)
      setPlaylistName('')
      setPlaylistCategory(undefined)
    }

    const handlePlaylistImage = async function(event) {
      event.stopPropagation()
      try{
        const converted = new File([event.target.files[0]], event.target.files[0].name)

        const params = {
          Bucket: 'projeto-ess-sharkmusic-bucket',
          Key: event.target.files[0].name,
          Body: converted
        }

        const response = await s3.upload(params).promise()

        console.log(response.Location)
        setPlaylistImage(response.Location)
      
        setPreview(
        <div className='form-group' style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'20px'}}>
          <div style={{alignSelf:'flex-start'}} >
            <span> Imagem da Playlist</span>
          </div>
          <img id='playlist-image-preview' style={{padding:'5px', width:'80%'}} src={response.Location}/>
        </div>
        )
      } catch(err) {
        console.log('erro no upload de imagem', err)
      }
    }

        
    async function createPlaylist() {
        try{
        const response = await axiosInstance({
            method: 'post',
            url: '/createPlaylist',
            headers: {}, 
            data: {
                name: playlistName,
                category: playlistCategory,
                image: playlistImage,
                accountID: parseInt(localStorage.getItem('accountID'),10)
            }
          })

        setPlaylistName("")
        setPlaylistCategory(undefined)
        setPlaylistImage(undefined)

        console.log(response.data)
        navigate('/PlaylistPage', {state:{ID: response.data.id}})
        closeModal()
        return
        } catch(error) {
          console.log('erro na criação de playlist!')
          setErrorMessage(
            <div class="alert-create-playlist">
              <span class="closebtn-create-playlist" onClick={closeModal}>&times;</span>
                Erro na criação da playlist!
              </div>
          )
          setTimeout(closeModal, 2000);
          return
        }
    }

    return (
        <div className={ `modal ${modalController} ` } tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document" ref={modalRef}>
            <div className="modal-content" style={{backgroundColor: 'var(--eerie-black)', color:'aliceblue'}}>
              <div className="modal-header">
                <h5 className="modal-title">Criar Playlist</h5>
                <button type="button" onClick={closeModal} className="btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
                  <span className='close'><FontAwesomeIcon icon={["fas", "fa-times"]}></FontAwesomeIcon></span>
                </button>
              </div>
              <div className="modal-body">
              <form>
                    <div className="form-group custom-form-group">
                        <label htmlFor="playlist-name"> Nome da Playlist</label>
                        <input id="playlist-name" className='form-control' type="text" value={playlistName} onChange={(event) => setPlaylistName(event.target.value)}/>
                    </div>
                    <div className="form-group custom-form-group" >
                        <label htmlFor="playlist-image"> Imagem da Playlist</label>
                        <input id="playlist-image" className='form-control' type="file" accept="image/*" onChange={handlePlaylistImage} style={{position:'relative'}}/>
                    </div>
                    <div className="form-group custom-form-group">
                        <label htmlFor="playlist-category"> Selecione uma categoria</label>
                        <select id="playlist-category" className='form-control' value={playlistCategory} onChange={(event)=> setPlaylistCategory(event.target.value)} >
                            {categories.map((el,index) => <option value={el} key={index}>{el ? el : 'Selecione'}</option>)}
                        </select>    
                    </div>
                </form>
                {preview ? preview : ''}
                {errorMessage ? errorMessage : ''}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={createPlaylist}>Criar</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CreatePlaylist