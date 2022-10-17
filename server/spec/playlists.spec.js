import { CreatePlaylistUseCase, DeletePlaylistUseCase, UpdatePlaylistUseCase, GetPlaylistUseCase } from '../src/domain/playlist.js';
import { CreatePlaylistUseCaseRequest, DeletePlaylistUseCaseRequest, UpdatePlaylistUseCaseRequest, GetPlaylistUseCaseRequest } from '../src/domain/ucio/playlist.js';
import { CreatePlaylistUseCaseValidate, DeletePlaylistUseCaseValidate, UpdatePlaylistUseCaseValidate, GetPlaylistUseCaseValidate } from '../src/infrastructure/provider/validate/playlist.js';
import { CreatePlaylistUseCaseRepository, DeletePlaylistUseCaseRepository, UpdatePlaylistUseCaseRepository, GetPlaylistUseCaseRepository } from '../src/infrastructure/provider/repository/playlist.js';


describe("O uso de playlist", () => {
    var originalTimeout;
    var usecase;
    var ucReq;
    var validate;
    var repository;
    var response;
    let newPlaylist = {
        id: 9,
        name: "Rap Naruto",
        image: "",
        accountID: 1,
        category: "Rap",
        musics: ["Rap da Akatsuki", "Essa dor que eu causei"]
    };
    let wrongPlaylist = {
        id: 9,
        name: "",
        image: "",
        accountID: 1,
        category: "Rap",
        musics: ["Rap dos Hokages", "O ninja mais forte"]
    };

    beforeAll(() => {
        process.stdout.write("playlist-service: ");
    })

    beforeEach(() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    })

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
      });
    
    afterAll(() => {
        console.log('\n');
      });
    
    function createPlaylist(){
        ucReq = new CreatePlaylistUseCaseRequest(newPlaylist.name, newPlaylist.image, newPlaylist.accountID,newPlaylist.category);    
        validate = new CreatePlaylistUseCaseValidate();
        repository = new CreatePlaylistUseCaseRepository();
        usecase = new CreatePlaylistUseCase(validate, repository);
        response = usecase.createPlaylist(ucReq);
        return response
    }

    function deletePlaylist(){
        ucReq = new DeletePlaylistUseCaseRequest(newPlaylist.id);    
        validate = new DeletePlaylistUseCaseValidate();
        repository = new DeletePlaylistUseCaseRepository();
        usecase = new DeletePlaylistUseCase(validate, repository);
        response = usecase.deletePlaylist(ucReq);
        return response
    }


    //TESTES CRIAÇÃO PLAYLIST

    it("validate createPlaylists validando playlist correta", () => {
        ucReq = new CreatePlaylistUseCaseRequest(newPlaylist.name,newPlaylist.image,newPlaylist.accountID,newPlaylist.category);    
        validate = new CreatePlaylistUseCaseValidate();
        expect(validate.createPlaylist(ucReq)).toBe(null);
    })    

    it("validate createPlaylists validando playlist sem nome", () => {
        ucReq = new CreatePlaylistUseCaseRequest(wrongPlaylist.name,wrongPlaylist.image,wrongPlaylist.accountID,wrongPlaylist.category);    
        validate = new CreatePlaylistUseCaseValidate();
        expect(validate.createPlaylist(ucReq)).toBe('O nome da playlist não pode ser vazio.');
    })    

    it("criação de uma playlist", () => {
        expect(createPlaylist().error).toBe(null);
        deletePlaylist();
    })

    //TESTES ATUALIZAÇÃO DE UMA PLAYLIST

    it("validate updatePlaylists validando playlist correta", () => {
        createPlaylist();
        ucReq = new UpdatePlaylistUseCaseRequest(newPlaylist.id, newPlaylist.name, newPlaylist.image, newPlaylist.category, newPlaylist.musics, newPlaylist.accountID);    
        validate = new UpdatePlaylistUseCaseValidate();
        expect(validate.updatePlaylist(ucReq)).toBe(null);
        deletePlaylist();
    })    
  
    it("validate updatePlaylists validando playlist sem nome", () => {
        createPlaylist();
        ucReq = new UpdatePlaylistUseCaseRequest(wrongPlaylist.id, wrongPlaylist.name, "", wrongPlaylist.category, wrongPlaylist.musics, wrongPlaylist.accountID);    
        validate = new UpdatePlaylistUseCaseValidate();
        expect(validate.updatePlaylist(ucReq)).toBe('O nome da playlist não pode ser vazio.');
        deletePlaylist();
    })    

    it("atualização de uma playlist", () => {
        createPlaylist();
        ucReq = new UpdatePlaylistUseCaseRequest(newPlaylist.id, newPlaylist.name, "", newPlaylist.category, newPlaylist.musics, newPlaylist.accountID);    
        validate = new UpdatePlaylistUseCaseValidate();
        repository = new UpdatePlaylistUseCaseRepository();
        usecase = new UpdatePlaylistUseCase(validate, repository);
        response = usecase.updatePlaylist(ucReq);
        expect(response.error).toBe(null);
        deletePlaylist();
    })

    //TESTES DELETANDO PLAYLIST

    it("validate deletePlaylist validando playlist correta", () => {
        createPlaylist();
        ucReq = new DeletePlaylistUseCaseRequest(newPlaylist.id);    
        validate = new DeletePlaylistUseCaseValidate();
        expect(validate.deletePlaylist(ucReq)).toBe(null);
        deletePlaylist();
    })    
  
    it("validate deletePlaylist validando playlist sem id", () => {
        createPlaylist();
        ucReq = new DeletePlaylistUseCaseRequest(null);    
        validate = new DeletePlaylistUseCaseValidate();
        expect(validate.deletePlaylist(ucReq)).toBe('O identificador de playlist não pode ser vazio.');
        deletePlaylist();
    })    

    it("deletando playlist", () => {
        createPlaylist();
        expect(deletePlaylist().error).toBe(null);
    })
  
    //TESTE FUNÇÃO AUXILIAR GET PLAYLIST

    it("validate getPlaylist validando playlist correta", () => {
        createPlaylist();
        ucReq = new GetPlaylistUseCaseRequest(newPlaylist.id);    
        validate = new GetPlaylistUseCaseValidate();
        expect(validate.getPlaylist(ucReq)).toBe(null);
        deletePlaylist();
    })    
  
    it("validate getPlaylist validando playlist sem id", () => {
        createPlaylist();
        ucReq = new GetPlaylistUseCaseRequest(null);    
        validate = new GetPlaylistUseCaseValidate();
        expect(validate.getPlaylist(ucReq)).toBe('O identificador da playlist não pode ser vazio.');
        deletePlaylist();
    })    

    it("retornando playlist", () => {
        createPlaylist();
        ucReq = new GetPlaylistUseCaseRequest(newPlaylist.id);    
        validate = new GetPlaylistUseCaseValidate();
        repository = new GetPlaylistUseCaseRepository();
        usecase = new GetPlaylistUseCase(validate, repository);
        response = usecase.getPlaylist(ucReq);
        expect(response.error).toBe(null);
        deletePlaylist();
    })    

  })