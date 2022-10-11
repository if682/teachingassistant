Feature: Cadastro e Manutenção
    As an user of the music app 
    I want to add, remove and modify music list in the app
    So that manage my preferences in registration of the playList

    ## Cadastro e Manutenção de Playlists (criar, atualizar, deletar):
    Scenario: Criar uma PlayList
        Given estou logado no app com "username", "senha"
        When  aciono o botão "adicionar uma nova PlayList" e  preencho  os campos com "nome_da_PlayList", " imagem_da_playlist" (facultativo) 
        Then  sou redirecionado para dentro da PlayList vazia, sendo possível adicionar novas músicas 
        And   uma lista de músicas recomendadas é apresentada como opção para serem adicionadas



    Scenario: atualizar uma PlayList
        Given estou na biblioteca de PlayLists
        When  seleciono uma PlayList com "nome PlayList" 
        And   entro na página da PlayList
        Then  é possível alterar informações como "nome PlayList", " músicas na playlist"
        And   depois da alteração uma mensagem de sucesso é exibida 



    Scenario: Ordenação de uma playlist
        Given eu estou na biblioteca de Playlists, uma ordenação "padrão" é exibida por "mais tocadas" 
        When  clico no botão "ordenar por" uma lista é exibida com opções de ordenação "alfabetica", "mais tocadas", "em alta"
        Then  a página é atualizada e exibida com a ordenação escolhida 



    Scenario: Adicionar uma imagem à PlayList
        Given que estou na biblioteca de PlayLists
        When  seleciono uma playlist com "nome PlayList"
        And   abro as configurações de personalização
        Then  é possível adicionar uma "imagem" de capa para ela 
        And   a PlayList é atualizada com a nova aparencia



    Scenario: Baixar uma PlayList
        Given que estou na biblioteca de PlayLists
        When  selecino uma playlist com "nome da playlist", um ícone (seta para baixo) de download ao lado dela é exibido
        Then  é possível baixá-la localmente 
        And   o ícone é exibido numa cor sólida, indicando download bem sucedido



    Scenario: Múltiplos usuários
        Given que estou na página de cadastro
        When  aciono a opção "cadastrar novo user" é exibida uma janela com o tipo de cadastro "user comercial", "user comum" 
        And   insiro os dados de cadastrais "nome/gravadora", "User name" e "senha", 
        And   clico em logar
        Then  consigo logar na página com diferentes contas
        And   cada conta com privilégios específicos 



    Scenario: Adicionando música à playList a partir da página principal
        Given que estou na página principal do app "home"
        When  seleciono um artista ou banda com "nome_artista", "nome_banda" ou busco pelo "nome_musica"
        Then  é possível adicioná-la a uma playlist especifica com "nome_playlist"
        And   uma mensagem indicando que a musica é inserida é exibida  


    
    Scenario: Adicionando música à playList estando dentro da playlist
        Given estou dentro de uma playlist com nome "nome_playlist"
        And   aparecem algumas músicas como recomendação a serem adicionadas 
        When  eu clico sobre uma delas, um botão "adicionar" é exibido
        Then  é possivel adicioná-la à playlist que estou 
        And   a playlist é atualizada exibindo a nova muisica 

        
    Scenario: Adicionando um album à playList 
        Given estou na página principal "home"
        And   selelciono um artista na "lista_de_artista" exibida
        When  clico em um artista, uma lista de albuns associado a esse artista é exibida
        And   um botão ao lado do album é mostrado com uma cor "cinza" 
        Then  é possível adcionar todo algum a uma playlist com "nome_playlist"
        And   o botão modifica sua cor para mostrar que a adição foi bem sucedida


    Scenario: Playlist exibidas 
        Given que estou na página principal do app "home"
        And   favorito e/ou baixo uma música "nome_música"  
        When  abro a biblioteca de PlayLists, ainda que existam ou não playlists criadas 
        Then  uma playlist de músicas "curtidas" é exibida
    

    Scenario: Album como playList
        Given  estou logado como "gravadora"
        And    adiciono um algum de um novo artista "nome_artista" na base de dados do app
        When   seleciono esse album, uma opção "adicionar_à_playlist" é exibida
        Then   quando clicada, cria uma nova playlist na biblioteca de playlists com os atrubutos originais do album
        And    agrupa, apenas, as músicas referentes aquele album (inicialmente)
        
    
    Scenario: Organização da biblioteca de playList
        Given estou na página inicial do app
        When  entro na biblioteca de playlists
        Then  as playlists existentes me são exibidas em forma de grade
        And   navego rolando a página para encontrar a playList de interesse


    Scenario: Remover músicas de uma playList
        Given que estou na biblioteca de Playlists
        When  seleciono e seguro uma (ou várias) música(s) da playList, uma opção "excluir_música(s)" é exibida 
        Then  ao clicar, a(s) música(s) deixa de existir na playlist
        And   a playlist é atualizada 

    

    Scenario: Remover uma playList da biblioteca de playLists
        Given estou na biblioteca de playlists
        When  seleciono e seguro uma playList com "nome_playList", uma opção "ecluir_playList" é exibida 
        Then  ao clicar na opção, a playlist é apagada 
        And   a biblioteca de playLists é atualizada

