Feature: Criar categorias para PlayList
    As an user of the music app 
    I want to create, edite and modify categories  in the app
    So that 


    # Scenario: Criar uma categoria  
        # Given que estou na página de playlists
        # When  clico no botão "criar_categoria"
        # And   um campo solicitando o nome da categiria é exibido
        # Then  preencho o campo com "nome_categoria" 
        # And   a categoria é criada e exibida acima das Playlists existentes



    Scenario: Listar categorias de uma playList
        Given estou na página inicial do app "home" 
        When  acesso a biblioteca de playlists e adiciono uma playList na categoria "genero_MPB" 
        Then  a playList é inserida nessa categoria 
        And   a página é atualizada não mais exibindo a playList inserida na lista de Playlists principal


    Scenario: Ordenação de uma categoria
        Given estou na biblioteca de playlists
        When  crio uma nova categoria 
        Then  a ordem padrão de exibição é definida pela ordem de criação
        And   é possivel alterar a ordenão



    Scenario: Categorias pré definidas
        Given estou na pagina inicial "home"
        When  entro na biblioteca de playlists
        Then  há categorias pré - definidas pela aplicação como "MPB", "FUNK", "Eletronica", "Sertanejo" "[...]"
        And   é possível adicionar uma playList "nome_playlist" dentro de alguma "categoria"


    Scenario: Apagar playlist de uma categoria
        Given estou na biblioteca de playLists
        When  entro em uma categoria listada "categora_nome"
        And   seleciono uma playlist dentro da categoria, uma opção de "apagar_playlist" é exibida  
        Then  a playList é apagada
        And   a categoria "nome_categoria" é atualizada


    Scenario: Apagar categoria 
        Given estou na biblioteca de playLists 
        When  tento selecionar uma categoria "nome_categoria" clicando e segurando e tento apagá-la
        Then  nada acontece, pois não é possível selecionar uma categoria 


   