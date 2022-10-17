Feature: Categorias de Playlists
    As a usuário do sistema
    I want to manipular categorias 
    So that eu possa agrupar minhas playlists da maneira que preferir

    Scenario: Adicionar playlist sem categoria à uma categoria
        Given estou logado no app com usuário "jonga"
        And estou na página de categoria "Rap"
        When tento adicionar uma playlist à categoria 
        And seleciono a playlist sem categoria "Rap One Piece"
        And adiciono a playlist à categoria
        Then a playlist é adicionada na categoria
        And a categoria da playlist é estabelecida como "Rap"

    Scenario: Adicionar playlist com categoria à uma outra categoria
        Given estou logado no app com usuário "jonga"
        And estou na página de categoria "Rap"
        When tento adicionar uma playlist à categoria 
        And seleciono a playlist "Rap Naruto" com categoria "Funk" à categoria "Rap"
        And adiciono a playlist à categoria
        Then a playlist é adicionada na categoria
        And a categoria da playlist é estabelecida como "Rap"


    Scenario: Apagar playlist de categoria 
        Given estou logado no app com usuário "jonga"
        And estou na página de categoria "Rap"
        When tento retirar uma playlist da categoria 
        And seleciono a playlist "Rap One Piece"
        And excluo a playlist da categoria
        Then a playlist é retirada da categoria
        And a categoria da playlist é estabelecida como vazia


   