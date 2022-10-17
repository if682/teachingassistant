Feature: Cadastro e Manutenção de Playlists
	As a usuário do sistema
    I want criar, alterar e deletar uma playlist 
    So that eu possa agrupar manipular minhas playlists da maneira que preferir

    Scenario: Criar uma PlayList Corretamente
    	Given estou logado no app com usuário "jonga"
		And estou na página inicial de playlist
		When tento criar uma playlist 
		And preencho  os campos com nome "Rap de Naruto"
		And preencho o campo de imagem com "KillerBee.png" (facultativo)
		And preencho o campo categoria com "Rap" (facultativo)
		And tento criar a playlist
		Then sou redirecionado para dentro da PlayList vazia, sendo possível adicionar novas músicas/ playlists
	
    # Scenario: Criar uma PlayList Sem Nome
    # 	Given estou logado no app com o usuário "jonga"
	# 	And estou na página inicial de playlist
	# 	When tento criar uma playlist 
	# 	And preencho o campo de imagem com "KillerBee.png" (facultativo)
    #     And preencho o campo categoria com "Rap" (facultativo)
	# 	And não preencho o campo de nome
	# 	And tento criar a playlist
    #     Then recebo uma mensagem uma mensagem de erro de criação

    # Scenario: Atualizar dados uma PlayList Corretamente
    # 	Given estou logado no app com o usuário "jonga"
	# 	And estou na página da playlist "Rap de Naruto"
	# 	When tento atualizar a playlist 
	# 	And mudo o campo de imagem com "KillerBee.png" para "Itachi.png" (facultativo)
    #     And mudo o campo categoria com "Rap" para "Funk"
	# 	And mudo o campo de nome com "Rap de Naruto" para "Rap da Akatsuki"
	# 	And tento atualizar a playlist
    #     Then a playlist é atualizada com sucesso
	
    # Scenario: Atualizar dados de uma PlayList Para uma Sem Nome
    # 	Given estou logado no app com o usuário "jonga"
	# 	And estou na página da playlist "Rap de Naruto"
	# 	When tento atualizar uma playlist 
	# 	And mudo o campo de imagem com "KillerBee.png" para "Itachi.png" (facultativo)
    #     And mudo o campo categoria com "Rap" para "Funk"
	# 	And mudo o campo de nome com "Rap de Naruto" para ""
	# 	And tento atualizar a playlist
    #     Then recebo uma mensagem uma mensagem de erro de atualização
	
	# Scenario: Adicionando Música a uma PlayList
    # 	Given estou logado no app com o usuário "jonga"
	# 	And estou na página da playlist "Rap de Naruto"
	# 	When tento adicionar músicas a uma Playlist
	# 	And seleciono as músicas "Rap da Akatsuki", "Renegado", "Essa dor que eu causei"
    #     And adiciono as músicas na playlist
	# 	Then a playlist é atualizada com sucesso

	# Scenario: Excluindo Música de uma PlayList
    # 	Given estou logado no app com o usuário "jonga"
	# 	And estou na página da playlist "Rap de Naruto"
    #     When tento excluir a música "Rap da Akatsuki"
    #     And excluo a música
	# 	Then a música é excluida com sucesso

	# Scenario: Baixar uma PlayList
    # 	Given estou logado no app com o usuário "jonga"
	# 	And estou na página da playlist "Rap de Naruto"
    #     When tento baixar a playlist
    #     And baixo a playlist
	# 	Then a playlist é baixada com sucesso

	# Scenario: Excluindo uma PlayList
    # 	Given estou logado no app com o usuário "jonga"
	# 	And estou na página da playlist "Rap de Naruto"
    #     When tento excluir a playlist
    #     And excluo a playlist
	# 	Then a playlist é excluida com sucesso

