Feature: Compartilhar Playlists  
    As a usuário do sistema
    I want to ser capaz de compartilhar minhas playlists

    Scenario: compartilhar Playlists
    	Given estou logado no app com o usuário "jonga"
		And estou na página da playlist "Rap de Naruto"
        When tento compartilhar uma playlist
        Then um link de compartilhamento é gerado
        And eu posso copiar esse link para área de transferência