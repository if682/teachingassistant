import { Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import PlaylistHeader from './components/playlistHeader/playlistHeader';
import Playlist from './components/PlaylistPage/PlaylistPage';
import ShowList from './components/ShowList/ShowList.jsx';

function App() {
  return (

    <div className='container'>
      <PlaylistHeader/>
      <BrowserRouter>
        <Routes>

          <Route element={<ShowList accountID={1} ID={1}></ShowList>} path='/'></Route>
          <Route element={<Playlist></Playlist>} path='/PlaylistPage'></Route>

        </Routes>
      </BrowserRouter>
  </div>


  );
}

export default App;
