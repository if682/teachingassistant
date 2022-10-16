import { createPlaylist, deletePlaylist, downloadPlaylist, getPlaylist, updatePlaylist } from '../src/infrastructure/internal/playlist.js'

describe("O uso do banco de dados", () => {
    var originalTimeout;
    let newPlaylist = {
        id: 9,
        name: "Rap Naruto",
        image: "",
        accountID: 1,
        musics: [],
        followers: [],
        relevance: 0,
        category: "Rap"
    };
    let updatedPlaylist = {
        id: 9,
        name: "Openings One Piece",
        image: "",
        accountID: 1,
        musics: [],
        followers: [],
        relevance: 0,
        category: "Rap"
    };
    let existentPlaylist = {
        id:8,
        name:"pipipi popopo",
        image:"/images/youtube.png",
        accountID:1,
        musics:[],
        followers:[],
        relevance:0,
        category:"teste 2"
    };

    beforeAll(() => {
        process.stdout.write("database-services: ");
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
    
    it("testando getPlaylist", () => {
          expect(getPlaylist(8)).toEqual(existentPlaylist);
    })    

    it("testando createPlaylist", () => {
        createPlaylist(newPlaylist.name, newPlaylist.image, newPlaylist.accountID, newPlaylist.category)
        expect(getPlaylist(newPlaylist.id)).toEqual(newPlaylist);
        deletePlaylist(newPlaylist.id);
    })    

    it("testando deletePlaylist", () => {
        createPlaylist(newPlaylist.name, newPlaylist.image, newPlaylist.accountID, newPlaylist.category)
        expect(getPlaylist(newPlaylist.id)).toEqual(newPlaylist);
        deletePlaylist(newPlaylist.id);
        expect(getPlaylist(newPlaylist.id)).toBe(null)
    })    

    it("testing updatePlaylist", () => {
        createPlaylist(newPlaylist.name, newPlaylist.image, newPlaylist.accountID, newPlaylist.category)
        newPlaylist.name = "Openings One Piece";
        updatePlaylist(newPlaylist)
        expect(getPlaylist(newPlaylist.id)).toEqual(updatedPlaylist);
        deletePlaylist(newPlaylist.id);
    })    

  })