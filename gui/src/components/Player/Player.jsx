import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import miniplayer from '../../img/Album cover.svg';
import heart from '../../img/Heart.svg';
import demoAudio from '../../music/Egzod-Maestro-Chives-Royalty.mp3';
import './Player.modules.css'

function Player(){
    return(
        <nav className='Player'> 
            <AudioPlayer
                customAdditionalControls={
                [
                    <table className='image_music'>
                    <tr>
                        <td>
                            <img src={miniplayer} alt = "Costs"/>
                        </td>
                        <td className='text-user-music' style={{marginRight: "6px"}}>
                            In My Feelings<br />
                            Drake
                        </td>
                        <td>
                        <img src={heart} alt = ""/>
                        </td>
                    </tr>
                    </table>,
                    
                    RHAP_UI.LOOP
                ] 
                }
                layout='stacked-reverse'
                autoPlay={false}
                src={demoAudio}
                // other props here
            />
      </nav>
    )
}

export default Player