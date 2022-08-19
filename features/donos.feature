Feature:  donos de uma PlayList
    As an owner of the plalist  
    I want to create, edite and modify informations of the playlist
    So that manage my preferences


    Scenario: numero de seguidores  
        Given estou na dentro da playlist 
        When  seleciono uma plalist com "nome_playlist"
        Then  uma página é exibida e nela o "numero de seguidores" 
        And   ao clicar a lista de seguidores, também, é exibida


    Scenario: Mostrar seguidores    
        Given estou na biblioteca de playLists
        When  seleciono uma playList com "nome_playlist" 
        And   clico no botão "seguidores" 
        Then  uma lista de seguidores é exibida 
        And   posso visualizar os seguidores para aquela playList
    

    Scenario: Mostrar números de seguidores
        Given estou na biblioteca de playlists
        When  seleciono uma playList com "nome_playlist"
        Then  é mostrado um ícone com o "númeoro_de_seguidores"


    Scenario: Mostrar informações dos seguidores 
        Given estou na biblioteca de playList
        When  clico em uma playList com "nome_playlist" 
        Then  um botão "visualizar_seguidores" é exibido 
        And   é possivel ao cliclar no botão visualizar a lista de Seguidores

    Scenario: PlayList apagada pelo dono da playlist
        Given eu tenha criado uma playList com "nome_playlist"
        When  seleciono essa playList  
        And   clico no botão "apagar_playlist"
        Then  essa playList deixa de existir na biblioteca de playList
        And   deixará de existir para os seguidores da playList

    
    Scenario: Tentar remover um seguidor 
        Given estou em uma playlist com "nome_playlist"
        When  clico em um seguidor "nome_seguidor" e tento removê-lo
        Then  uma janela mensagem de erro é exibida 


    
   