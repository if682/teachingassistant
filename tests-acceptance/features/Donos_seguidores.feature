Feature: Seguir e Visualizar Seguidores de Playlists
    As a usuário do sistema
    I want to seguir e ver as informações sobre seguidores e dono da playlist  

    Scenario: Seguir playlist
    	Given estou logado no app com o usuário "jonga"
		And estou na página da playlist "Rap de Naruto"
        When tento seguir a playlist
        Then eu passo a seguir a playlist 
        And ela passa fazer parte da minhas playlists

    Scenario: Deixar de Seguir Playlist
    	Given estou logado no app com o usuário "jonga"
		And estou na página da playlist "Rap de Naruto"
        When tento deixar seguir a playlist
        Then eu deixo de seguir a playlist 
        And ela deixa de fazer parte da minhas playlists

    Scenario: Visualizar Números e Seguidores de PlayList
    	Given estou logado no app com o usuário "jonga"
		And estou na página da playlist "Rap de Naruto"
        When desejo ver os seguidores da playlist
        Then são exibidos os seguidores da playlist 

