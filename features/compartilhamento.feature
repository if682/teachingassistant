Feature:  compartilhar playlist  
    As an owner of the playlist  
    I want to be able to share a playlist



    Scenario: compartilhar musica
        Given estou na playlist "nome_playlist" 
        When  clico em "compartilhar música"
        Then  um botão "copiar link" é gerado    
        And  opções de canais de comunicação  "whatsApp", "instagram", "facebook" são listados


    Scenario: compartilhar Playlist
        Given estou na biblioteca de playlist  
        When  seleciono uma playlist com "nome_playlist" 
        And   clico em "compartilhar playlist"
        Then  um botão "copiar link" é gerado    
        And   opções de canais de comunicação  "whatsApp", "instagram", "facebook" são listados