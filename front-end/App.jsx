import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop7 from "./components/Desktop7";
import Desktop15 from "./components/Desktop15";
import DesktopMenuDeOpes from "./components/DesktopMenuDeOpes";
import DesktopPesquisa2 from "./components/DesktopPesquisa2";
import Desktop13 from "./components/Desktop13";
import DesktopPesquisa1 from "./components/DesktopPesquisa1";
import Desktop1 from "./components/Desktop1";
import Desktop3 from "./components/Desktop3";
import Desktop4 from "./components/Desktop4";
import Desktop10 from "./components/Desktop10";
import Desktop12 from "./components/Desktop12";
import DesktopEdioDaInformaesDaPlaylist from "./components/DesktopEdioDaInformaesDaPlaylist";
import DesktopPlaylistMaisCategorias from "./components/DesktopPlaylistMaisCategorias";
import Desktop8 from "./components/Desktop8";
import Desktop5 from "./components/Desktop5";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-7">
          <Desktop7 {...desktop7Data} />
        </Route>
        <Route path="/desktop-15">
          <Desktop15 {...desktop15Data} />
        </Route>
        <Route path="/desktop-menu-de-opcoes">
          <DesktopMenuDeOpes {...desktopMenuDeOpesData} />
        </Route>
        <Route path="/desktop-pesquisa-2">
          <DesktopPesquisa2 {...desktopPesquisa2Data} />
        </Route>
        <Route path="/desktop-13">
          <Desktop13 {...desktop13Data} />
        </Route>
        <Route path="/desktop-pesquisa-1">
          <DesktopPesquisa1 {...desktopPesquisa1Data} />
        </Route>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
        <Route path="/desktop-3">
          <Desktop3 {...desktop3Data} />
        </Route>
        <Route path="/desktop-4">
          <Desktop4 {...desktop4Data} />
        </Route>
        <Route path="/desktop-10">
          <Desktop10 {...desktop10Data} />
        </Route>
        <Route path="/desktop-12">
          <Desktop12 {...desktop12Data} />
        </Route>
        <Route path="/desktop-edicao-da-informacoes-da-playlist">
          <DesktopEdioDaInformaesDaPlaylist {...desktopEdioDaInformaesDaPlaylistData} />
        </Route>
        <Route path="/desktop-playlist-mais-categorias">
          <DesktopPlaylistMaisCategorias {...desktopPlaylistMaisCategoriasData} />
        </Route>
        <Route path="/desktop-8">
          <Desktop8 {...desktop8Data} />
        </Route>
        <Route path="/desktop-5">
          <Desktop5 {...desktop5Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const component351Data = {
    className: "",
};

const group1781Data = {
    component35Props: component351Data,
};

const button1Data = {
    className: "",
};

const button2Data = {
    className: "",
};

const play1Data = {
    className: "",
};

const button3Data = {
    className: "",
};

const button4Data = {
    className: "",
};

const button5Data = {
    className: "button-1-1",
};

const button6Data = {
    className: "button-1-2",
};

const button7Data = {
    className: "button-1",
};

const player1Data = {
    albumCover: "/img/album-cover@2x.png",
    className: "",
    button1Props: button1Data,
    button2Props: button2Data,
    playProps: play1Data,
    button3Props: button3Data,
    button4Props: button4Data,
    button5Props: button5Data,
    button6Props: button6Data,
    button7Props: button7Data,
};

const group1731Data = {
    playerProps: player1Data,
};

const desktop7Data = {
    group177: "/img/spotify-playlist-01---to-the-moon@1x.png",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    image9: "/img/image-9@1x.png",
    image10: "/img/image-10@1x.png",
    bemVindo1: "Dê um nome à sua playlist",
    bemVindo2: "Criar",
    group178Props: group1781Data,
    group173Props: group1731Data,
};

const group1962Data = {
    className: "group-170",
};

const component352Data = {
    className: "component-35-1",
};

const button8Data = {
    className: "",
};

const button9Data = {
    className: "",
};

const play2Data = {
    className: "play-2",
};

const button10Data = {
    className: "",
};

const button11Data = {
    className: "",
};

const button12Data = {
    className: "button-3-1",
};

const button13Data = {
    className: "button-3-2",
};

const button14Data = {
    className: "button-3",
};

const player2Data = {
    albumCover: "/img/album-cover-1@2x.png",
    className: "player-4",
    button1Props: button8Data,
    button2Props: button9Data,
    playProps: play2Data,
    button3Props: button10Data,
    button4Props: button11Data,
    button5Props: button12Data,
    button6Props: button13Data,
    button7Props: button14Data,
};

const desktop15Data = {
    group164: "/img/spotify-playlist-01---to-the-moon@1x.png",
    seguidorDaSilvaSantos1: "Seguidor da Silva Santos",
    image2: "/img/image-2-2@2x.png",
    seguidorDaSilvaSantos2: "Seguidor da Silva Santos",
    image18: "/img/image-2-2@2x.png",
    seguidorDaSilvaSantos3: "Seguidor da Silva Santos",
    image19: "/img/image-2-2@2x.png",
    seguidorDaSilvaSantos4: "Seguidor da Silva Santos",
    image20: "/img/image-2-2@2x.png",
    seguidorDaSilvaSantos5: "Seguidor da Silva Santos",
    image21: "/img/image-2-2@2x.png",
    image15: "/img/image-15@2x.png",
    image7: "/img/image-7@1x.png",
    image8: "/img/image-8@1x.png",
    image16: "/img/image-16@2x.png",
    image17: "/img/image-17@2x.png",
    bemVindo: "Música",
    group196Props: group1962Data,
    component35Props: component352Data,
    playerProps: player2Data,
};

const component353Data = {
    className: "component-35-2",
};

const group1693Data = {
    className: "group-169-3",
};

const component32Data = {
    text5: "+",
};

const component33Data = {
    text6: "+",
};

const album1Data = {
    className: "",
};

const component31Data = {
    albumProps: album1Data,
};

const button15Data = {
    className: "",
};

const button16Data = {
    className: "",
};

const play3Data = {
    className: "play-3",
};

const button17Data = {
    className: "",
};

const button18Data = {
    className: "",
};

const button19Data = {
    className: "button-5-1",
};

const button20Data = {
    className: "button-5-2",
};

const button21Data = {
    className: "button-5",
};

const player3Data = {
    albumCover: "/img/album-cover@2x.png",
    className: "player-6",
    button1Props: button15Data,
    button2Props: button16Data,
    playProps: play3Data,
    button3Props: button17Data,
    button4Props: button18Data,
    button5Props: button19Data,
    button6Props: button20Data,
    button7Props: button21Data,
};

const desktopMenuDeOpesData = {
    image7: "/img/image-7@1x.png",
    image8: "/img/image-8@1x.png",
    image15: "/img/image-15@2x.png",
    group183: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    toTheMoon: "To The Moon",
    x3H6Min: "3h 6min",
    name: "maya",
    image2: "/img/image-2@2x.png",
    viewProfile: "View Profile",
    cleidsonCosta: "Cleidson Costa",
    compartilhar: "Compartilhar",
    seguir: "Seguir",
    adicionarMsica: "Adicionar música",
    removerMsicas: "Remover músicas",
    kisspngComputerIconsEditingPencil5B: "/img/kisspng-computer-icons-editing-pencil-5b21b26ca63f23-1@2x.png",
    editarInformaes: "Editar informações",
    image18: "/img/image-18-1@2x.png",
    removerPlaylist: "Remover playlist",
    component35Props: component353Data,
    group169Props: group1693Data,
    component32Props: component32Data,
    component33Props: component33Data,
    component3Props: component31Data,
    playerProps: player3Data,
};

const button22Data = {
    className: "",
};

const button23Data = {
    className: "",
};

const play4Data = {
    className: "play-4",
};

const button24Data = {
    className: "",
};

const button25Data = {
    className: "",
};

const button26Data = {
    className: "button-7-1",
};

const button27Data = {
    className: "button-7-2",
};

const button28Data = {
    className: "button-7",
};

const player4Data = {
    albumCover: "/img/album-cover-1@2x.png",
    className: "player-8",
    button1Props: button22Data,
    button2Props: button23Data,
    playProps: play4Data,
    button3Props: button24Data,
    button4Props: button25Data,
    button5Props: button26Data,
    button6Props: button27Data,
    button7Props: button28Data,
};

const group18221Data = {
    justinBieber: "Justin-Bieber",
};

const group18223Data = {
    justinBieber: "Troye-Siven",
    className: "group-1822-2",
};

const group182222Data = {
    className: "group-1822-5",
};

const group18224Data = {
    justinBieber: "Clean-Bandit",
    className: "group-1822-3",
};

const group182223Data = {
    className: "group-1822-6",
};

const group182224Data = {
    className: "group-1825",
};

const group182225Data = {
    className: "group-1828",
};

const group182226Data = {
    className: "group-1822-7",
};

const group18225Data = {
    justinBieber: "Justin-Bieber",
    className: "group-1822",
};

const group182227Data = {
    className: "group-1822-8",
};

const group18226Data = {
    justinBieber: "Clean-Bandit",
    className: "group-1822",
};

const group182228Data = {
    className: "group-1822-9",
};

const group18227Data = {
    justinBieber: "Troye-Siven",
    className: "group-1822",
};

const group182229Data = {
    className: "group-1851",
};

const group1822210Data = {
    className: "group-1852",
};

const desktopPesquisa2Data = {
    image2: "/img/image-2@2x.png",
    name: "maya",
    viewProfile: "View Profile",
    place: "Home",
    yourLibrary: "Your Library",
    search: "Search",
    baby1: "Baby",
    coraoRosaBebePng21: "/img/cora--o-rosa-bebe-png-2@2x.png",
    baby2: "Baby",
    durao2431: "Duração: 2:43",
    coraoRosaBebePng22: "/img/cora--o-rosa-bebe-png-2@2x.png",
    baby3: "Baby",
    durao2151: "Duração: 2:15",
    baby4: "Baby",
    durao2301: "Duração: 2:30",
    baby5: "Baby",
    durao2432: "Duração: 2:43",
    coraoRosaBebePng23: "/img/cora--o-rosa-bebe-png-2@2x.png",
    baby6: "Baby",
    durao2302: "Duração: 2:30",
    baby7: "Baby",
    durao2152: "Duração: 2:15",
    coraoRosaBebePng24: "/img/cora--o-rosa-bebe-png-2@2x.png",
    playerProps: player4Data,
    group18221Props: group18221Data,
    group18222Props: group18223Data,
    group182221Props: group182222Data,
    group18223Props: group18224Data,
    group182222Props: group182223Data,
    group182223Props: group182224Data,
    group182224Props: group182225Data,
    group182225Props: group182226Data,
    group18224Props: group18225Data,
    group182226Props: group182227Data,
    group18225Props: group18226Data,
    group182227Props: group182228Data,
    group18226Props: group18227Data,
    group182228Props: group182229Data,
    group182229Props: group1822210Data,
};

const group1963Data = {
    className: "group-170-1",
};

const component354Data = {
    className: "component-35-3",
};

const button29Data = {
    className: "",
};

const button30Data = {
    className: "",
};

const play5Data = {
    className: "play-5",
};

const button31Data = {
    className: "",
};

const button32Data = {
    className: "",
};

const button33Data = {
    className: "button-9-1",
};

const button34Data = {
    className: "button-9-2",
};

const button35Data = {
    className: "button-9",
};

const player5Data = {
    albumCover: "/img/album-cover-4@2x.png",
    className: "player-10",
    button1Props: button29Data,
    button2Props: button30Data,
    playProps: play5Data,
    button3Props: button31Data,
    button4Props: button32Data,
    button5Props: button33Data,
    button6Props: button34Data,
    button7Props: button35Data,
};

const desktop13Data = {
    spotifyPlaylist01ToTheMoon: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    image15: "/img/image-15@2x.png",
    image7: "/img/image-7@1x.png",
    image8: "/img/image-8@1x.png",
    image17: "/img/image-17@2x.png",
    image39: "/img/image-32@2x.png",
    image40: "/img/image-32@2x.png",
    image41: "/img/image-32@2x.png",
    image42: "/img/image-32@2x.png",
    image43: "/img/image-32@2x.png",
    image44: "/img/image-32@2x.png",
    imageContainer: "/img/image-16@2x.png",
    image32: "/img/image-32@2x.png",
    image33: "/img/image-32@2x.png",
    image34: "/img/image-32@2x.png",
    image35: "/img/image-32@2x.png",
    image36: "/img/image-32@2x.png",
    image37: "/img/image-32@2x.png",
    image38: "/img/image-32@2x.png",
    removerTodas: "Remover todas",
    group196Props: group1963Data,
    component35Props: component354Data,
    playerProps: player5Data,
};

const button36Data = {
    className: "",
};

const button37Data = {
    className: "",
};

const play6Data = {
    className: "play-6",
};

const button38Data = {
    className: "",
};

const button39Data = {
    className: "",
};

const button40Data = {
    className: "button-11-1",
};

const button41Data = {
    className: "button-11-2",
};

const button42Data = {
    className: "button-11",
};

const player6Data = {
    albumCover: "/img/album-cover-1@2x.png",
    className: "player-12",
    button1Props: button36Data,
    button2Props: button37Data,
    playProps: play6Data,
    button3Props: button38Data,
    button4Props: button39Data,
    button5Props: button40Data,
    button6Props: button41Data,
    button7Props: button42Data,
};

const desktopPesquisa1Data = {
    yourLibrary: "Your Library",
    place: "Home",
    search: "Search",
    artistsSongsOrPodcasts: "Artists, songs, or podcasts",
    madeForYou: "Made For You",
    image1: "/img/image-1@2x.png",
    discover: "Discover",
    image2: "/img/image-3@2x.png",
    concerts: "Concerts",
    image3: "/img/image-4@2x.png",
    newReleases: "New Releases",
    image4: "/img/image-5@2x.png",
    name: "maya",
    image22: "/img/image-2@2x.png",
    viewProfile: "View Profile",
    podcasts: "Podcasts",
    image5: "/img/image@2x.png",
    playerProps: player6Data,
};

const button43Data = {
    className: "",
};

const button44Data = {
    className: "",
};

const play7Data = {
    className: "play-7",
};

const button45Data = {
    className: "",
};

const button46Data = {
    className: "",
};

const button47Data = {
    className: "button-13-1",
};

const button48Data = {
    className: "button-13-2",
};

const button49Data = {
    className: "button-13",
};

const player7Data = {
    albumCover: "/img/album-cover@2x.png",
    className: "player-14",
    button1Props: button43Data,
    button2Props: button44Data,
    playProps: play7Data,
    button3Props: button45Data,
    button4Props: button46Data,
    button5Props: button47Data,
    button6Props: button48Data,
    button7Props: button49Data,
};

const group1695Data = {
    className: "group-169-5",
};

const desktop1Data = {
    origins: "Origins",
    imagineDragon1: "IMAGINE DRAGON",
    believer: "Believer",
    imagineDragon2: "IMAGINE DRAGON",
    monstersGoBump: "Monsters Go Bump",
    name1: "ERIKA RECINOS",
    ultimoAcessoFoiA: "Ultimo acesso foi a ...",
    spanText1: "Bem vindo ",
    spanText2: "(Usuário)",
    recomendadoParaVoc: "Recomendado para você",
    dreamOn: "Dream On",
    name2: "ROGER TERRY",
    shortwave: "Shortwave",
    name3: "RYAN GRIGDRY",
    playerProps: player7Data,
    group169Props: group1695Data,
};

const group1964Data = {
    className: "group-170-2",
};

const component355Data = {
    className: "component-35-4",
};

const button50Data = {
    className: "",
};

const button51Data = {
    className: "",
};

const play8Data = {
    className: "play-8",
};

const button52Data = {
    className: "",
};

const button53Data = {
    className: "",
};

const button54Data = {
    className: "button-15-1",
};

const button55Data = {
    className: "button-15-2",
};

const button56Data = {
    className: "button-15",
};

const player8Data = {
    albumCover: "/img/album-cover-4@2x.png",
    className: "player-16",
    button1Props: button50Data,
    button2Props: button51Data,
    playProps: play8Data,
    button3Props: button52Data,
    button4Props: button53Data,
    button5Props: button54Data,
    button6Props: button55Data,
    button7Props: button56Data,
};

const desktop3Data = {
    group164: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    image15: "/img/image-15@2x.png",
    image7: "/img/image-7@1x.png",
    image8: "/img/image-8@1x.png",
    image16: "/img/image-16@2x.png",
    image17: "/img/image-17@2x.png",
    bemVindo: "Música",
    group196Props: group1964Data,
    component35Props: component355Data,
    playerProps: player8Data,
};

const group1965Data = {
    className: "group-196-1",
};

const component356Data = {
    className: "component-35-5",
};

const group1782Data = {
    className: "group-198",
    component35Props: component356Data,
};

const button57Data = {
    className: "",
};

const button58Data = {
    className: "",
};

const play9Data = {
    className: "play-9",
};

const button59Data = {
    className: "",
};

const button60Data = {
    className: "",
};

const button61Data = {
    className: "button-17-1",
};

const button62Data = {
    className: "button-17-2",
};

const button63Data = {
    className: "button-17",
};

const player9Data = {
    albumCover: "/img/album-cover-4@2x.png",
    className: "player-18",
    button1Props: button57Data,
    button2Props: button58Data,
    playProps: play9Data,
    button3Props: button59Data,
    button4Props: button60Data,
    button5Props: button61Data,
    button6Props: button62Data,
    button7Props: button63Data,
};

const desktop4Data = {
    spotifyPlaylist01ToTheMoon: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    bemVindo: "Música",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    group196Props: group1965Data,
    group178Props: group1782Data,
    playerProps: player9Data,
};

const component357Data = {
    className: "component-35-6",
};

const album2Data = {
    className: "album-1",
};

const component34Data = {
    albumProps: album2Data,
};

const button64Data = {
    className: "",
};

const button65Data = {
    className: "",
};

const play10Data = {
    className: "play-10",
};

const button66Data = {
    className: "",
};

const button67Data = {
    className: "",
};

const button68Data = {
    className: "button-19-1",
};

const button69Data = {
    className: "button-19-2",
};

const button70Data = {
    className: "button-19",
};

const player10Data = {
    albumCover: "/img/album-cover-1@2x.png",
    className: "player-20",
    button1Props: button64Data,
    button2Props: button65Data,
    playProps: play10Data,
    button3Props: button66Data,
    button4Props: button67Data,
    button5Props: button68Data,
    button6Props: button69Data,
    button7Props: button70Data,
};

const group1732Data = {
    playerProps: player10Data,
};

const desktop10Data = {
    group164: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    image7: "/img/image-7@1x.png",
    image8: "/img/image-8@1x.png",
    bemVindo: "Música",
    image15: "/img/image-15@2x.png",
    image16: "/img/image-16@2x.png",
    image17: "/img/image-17@2x.png",
    curtir: "Curtir",
    remover: "Remover",
    baixar: "Baixar",
    component35Props: component357Data,
    component3Props: component34Data,
    group173Props: group1732Data,
};

const group1967Data = {
    className: "group-170-4",
};

const component358Data = {
    className: "component-35-7",
};

const button71Data = {
    className: "button-27",
};

const button72Data = {
    className: "button-27",
};

const play11Data = {
    className: "play-11",
};

const button73Data = {
    className: "button-27",
};

const button74Data = {
    className: "button-27",
};

const button75Data = {
    className: "button-26-1",
};

const button76Data = {
    className: "button-26-2",
};

const button77Data = {
    className: "button-26",
};

const player11Data = {
    albumCover: "/img/album-cover-4@2x.png",
    className: "player-22",
    button1Props: button71Data,
    button2Props: button72Data,
    playProps: play11Data,
    button3Props: button73Data,
    button4Props: button74Data,
    button5Props: button75Data,
    button6Props: button76Data,
    button7Props: button77Data,
};

const desktop12Data = {
    spotifyPlaylist01ToTheMoon: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    image15: "/img/image-15@2x.png",
    image7: "/img/image-7@1x.png",
    image8: "/img/image-8@1x.png",
    image16: "/img/image-16@2x.png",
    image17: "/img/image-17@2x.png",
    bemVindo: "Música",
    group196Props: group1967Data,
    component35Props: component358Data,
    playerProps: player11Data,
};

const component359Data = {
    className: "component-35-8",
};

const group16910Data = {
    className: "group-169-10",
};

const button78Data = {
    className: "",
};

const button79Data = {
    className: "",
};

const play12Data = {
    className: "play-12",
};

const button80Data = {
    className: "",
};

const button81Data = {
    className: "",
};

const button82Data = {
    className: "button-21-1",
};

const button83Data = {
    className: "button-21-2",
};

const button84Data = {
    className: "button-21",
};

const player12Data = {
    albumCover: "/img/album-cover-12@2x.png",
    className: "player-24",
    button1Props: button78Data,
    button2Props: button79Data,
    playProps: play12Data,
    button3Props: button80Data,
    button4Props: button81Data,
    button5Props: button82Data,
    button6Props: button83Data,
    button7Props: button84Data,
};

const desktopEdioDaInformaesDaPlaylistData = {
    image7: "/img/image-7@1x.png",
    image8: "/img/image-8@1x.png",
    image15: "/img/image-15@2x.png",
    group183: "/img/spotify-playlist-01---to-the-moon-8@1x.png",
    toTheMoon: "To The Moon",
    x3H6Min: "3h 6min",
    name: "maya",
    image2: "/img/image-2@2x.png",
    viewProfile: "View Profile",
    cleidsonCosta: "Cleidson Costa",
    bemVindo1: "Qual o  novo nome da playlist",
    bemVindo2: "Selecione uma nova imagem para a capa da sua playlist",
    img_15491613: "img_15491613...",
    albumCover: "/img/album-cover-11@2x.png",
    bemVindo3: "Insira o nome aqui",
    bemVindo4: "Confirmar",
    component35Props: component359Data,
    group169Props: group16910Data,
    playerProps: player12Data,
};

const group1968Data = {
    className: "group",
};

const group1969Data = {
    className: "group",
};

const mainMainContent1Data = {
    podcasts: "Blues",
    rectangle239: "/img/rectangle-239@2x.png",
};

const mainMainContent2Data = {
    podcasts: "Jazz",
    rectangle239: "/img/rectangle-239-1@2x.png",
    className: "main-main-content-1",
};

const mainMainContent3Data = {
    podcasts: "Latin",
    rectangle239: "/img/rectangle-239-2@2x.png",
    className: "main-main-content-2",
};

const mainMainContent4Data = {
    podcasts: "Retro",
    rectangle239: "/img/rectangle-239-3@2x.png",
    className: "main-main-content-3",
};

const button85Data = {
    className: "",
};

const button86Data = {
    className: "",
};

const play13Data = {
    className: "play",
};

const button87Data = {
    className: "",
};

const button88Data = {
    className: "",
};

const button89Data = {
    className: "button-23-1",
};

const button90Data = {
    className: "button-23-2",
};

const button91Data = {
    className: "button-23-3",
};

const player13Data = {
    albumCover: "/img/album-cover-4@2x.png",
    className: "player-1-1",
    button1Props: button85Data,
    button2Props: button86Data,
    playProps: play13Data,
    button3Props: button87Data,
    button4Props: button88Data,
    button5Props: button89Data,
    button6Props: button90Data,
    button7Props: button91Data,
};

const button92Data = {
    className: "",
};

const button93Data = {
    className: "",
};

const play14Data = {
    className: "play",
};

const button94Data = {
    className: "",
};

const button95Data = {
    className: "",
};

const button96Data = {
    className: "button-23-4",
};

const button97Data = {
    className: "button-23-5",
};

const button98Data = {
    className: "button-23",
};

const player14Data = {
    albumCover: "/img/album-cover-4@2x.png",
    className: "player-1",
    button1Props: button92Data,
    button2Props: button93Data,
    playProps: play14Data,
    button3Props: button94Data,
    button4Props: button95Data,
    button5Props: button96Data,
    button6Props: button97Data,
    button7Props: button98Data,
};

const desktopPlaylistMaisCategoriasData = {
    overlapGroup34: "/img/spotify-playlist-06---rock-you@1x.png",
    group214: "/img/spotify-playlist-06---rock-you@1x.png",
    overlapGroup20: "/img/spotify-playlist-05---sunset-dreaming@1x.png",
    group212: "/img/spotify-playlist-05---sunset-dreaming@1x.png",
    suasPlaylists1: "Suas playlists",
    suasPlaylists2: "Suas playlists",
    overlapGroup33: "/img/spotify-playlist-01---to-the-moon-9@1x.png",
    group210: "/img/spotify-playlist-01---to-the-moon-9@1x.png",
    categorias: "Categorias",
    overlapGroup24: "/img/spotify-playlist-02---kick-the-beat@1x.png",
    group211: "/img/spotify-playlist-02---kick-the-beat@1x.png",
    overlapGroup28: "/img/spotify-playlist-10---rap-farsi-goodies@1x.png",
    group213: "/img/spotify-playlist-10---rap-farsi-goodies@1x.png",
    group1551: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1552: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1553: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1554: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1555: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1556: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1557: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1558: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1559: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group15510: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group15511: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group15512: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group15513: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group15514: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group15515: "/img/spotify-playlist-01---to-the-moon-10@1x.png",
    group1961Props: group1968Data,
    group1962Props: group1969Data,
    mainMainContent1Props: mainMainContent1Data,
    mainMainContent2Props: mainMainContent2Data,
    mainMainContent3Props: mainMainContent3Data,
    mainMainContent4Props: mainMainContent4Data,
    player1Props: player13Data,
    player2Props: player14Data,
};

const group19610Data = {
    className: "group-186",
};

const component3510Data = {
    className: "",
};

const group1783Data = {
    className: "group-188",
    component35Props: component3510Data,
};

const button99Data = {
    className: "button-29",
};

const button100Data = {
    className: "button-29",
};

const play15Data = {
    className: "play-13",
};

const button101Data = {
    className: "button-29",
};

const button102Data = {
    className: "button-29",
};

const button103Data = {
    className: "button-28-1",
};

const button104Data = {
    className: "button-28-2",
};

const button105Data = {
    className: "button-28",
};

const player15Data = {
    albumCover: "/img/album-cover-15@2x.png",
    className: "player-26",
    button1Props: button99Data,
    button2Props: button100Data,
    playProps: play15Data,
    button3Props: button101Data,
    button4Props: button102Data,
    button5Props: button103Data,
    button6Props: button104Data,
    button7Props: button105Data,
};

const group1733Data = {
    playerProps: player15Data,
};

const desktop8Data = {
    group187: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    image13: "/img/image-9@1x.png",
    image14: "/img/image-10@1x.png",
    bemVindo1: "Realmente deseja excluir essa playlist?",
    bemVindo2: "Excluir",
    group196Props: group19610Data,
    group178Props: group1783Data,
    group173Props: group1733Data,
};

const group19611Data = {
    className: "group-186-1",
};

const component3511Data = {
    className: "",
};

const group1784Data = {
    className: "group-188-1",
    component35Props: component3511Data,
};

const button106Data = {
    className: "",
};

const button107Data = {
    className: "",
};

const play16Data = {
    className: "play-14",
};

const button108Data = {
    className: "",
};

const button109Data = {
    className: "",
};

const button110Data = {
    className: "button-25-1",
};

const button111Data = {
    className: "button-25-2",
};

const button112Data = {
    className: "button-25",
};

const player16Data = {
    albumCover: "/img/album-cover-16@2x.png",
    className: "player-28",
    button1Props: button106Data,
    button2Props: button107Data,
    playProps: play16Data,
    button3Props: button108Data,
    button4Props: button109Data,
    button5Props: button110Data,
    button6Props: button111Data,
    button7Props: button112Data,
};

const group1734Data = {
    playerProps: player16Data,
};

const desktop5Data = {
    group187: "/img/spotify-playlist-01---to-the-moon-2@1x.png",
    toTheMoon: "To The Moon",
    cleidsonCosta: "Cleidson Costa",
    x3H6Min: "3h 6min",
    image13: "/img/image-9@1x.png",
    image14: "/img/image-10@1x.png",
    bemVindo2: "Excluir",
    group196Props: group19611Data,
    group178Props: group1784Data,
    group173Props: group1734Data,
};

