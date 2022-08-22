Feature:  Seguidores de uma PlayList
    As an follow of the plalist  
    I want to folow, unfolow of the playlist
    So that manage my preferences



    Scenario: Seguir playlist
        Given dado que o seguidor "nome_seguidor" veja uma playlist que foi compartilhada 
        When  clica em "seguir_playlist" 
        Then  ele passa a seguir a Playlist 
        And   ela passa fazer parte de sua biblioteca de playlists


    Scenario: deixa de seguir playlist
        Given dado que o seguidor "nome_seguidor" tenha acesso a uma playlist que foi compartilhada 
        When  clica em "deixar de seguir_playlist" 
        Then  ele deixa a seguir a Playlist 
        And   ela passa deixa de fazer parte de sua biblioteca de playlists


Scenario: Salvar uma playlist
        Given dado que o seguidor "nome_seguidor" tenha acesso a uma playlist que foi compartilhada 
        When  clica em "salvar" "nome_playlist" 
        Then  a playlist é salva na sua biblioteca de Playlists 
        And   ela passa fazer integrar sua lista de playlists
