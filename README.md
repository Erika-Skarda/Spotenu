# Labenu | Desenvolvimento Web Full Stack

 <p align="center">
  <img src="https://i.imgur.com/xUhQLtc.png"/>
</p>

## Frontend do Projeto Spotenu

 <p align="center" >
  <img width="20%" src="https://i.imgur.com/MagoMtL.png" />
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT" />
  <img src="https://img.shields.io/static/v1?label=redux&message=library&color=yellow&style=for-the-badge&logo=REDUX"/>
  <img src="https://img.shields.io/static/v1?label=javascript&message=language&color=green&style=for-the-badge&logo=JAVASCRIPT"/>
  <img src="https://img.shields.io/static/v1?label=typescript&message=language&color=blue&style=for-the-badge&logo=TYPESCRIPT"/>

  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

> Status do Projeto: Em desenvolvimento :warning: 

## Descrição do Projeto

<p align="justify"> 
  Vamos finalizar o curso com chave de ouro fazendo o frontend para simular o Spotify. 
</p>
<p align="justify"> 
  O Spotenu é um projeto que visa facilitar o acesso a músicas pelo mundo. Para isso, vamos dar suporte para dois tipos de usuários: as bandas (ou músicos) e os ouvintes (usuários que consomem as músicas).
  Além disso, nós vamos montar uma operação com funcionários próprios que precisam gerenciar os dados que circulam no nosso sistema. Eles serão os nossos administradores. 
</p>

#### Usuários Músicos
<p align="justify">
  Vamos começar a explicar os usuários que são uma banda. Mesmo que haja músicos solos, nós vamos representar todos eles por uma banda, que deve possuir um nome, um nickname, uma descrição (onde se possa escrever qualquer texto de qualquer tamanho) e uma senha. 
  Quando uma banda de cadastra, ela precisa esperar que um administrador aprove o seu cadastro para pode utilizar a nossa aplicação. 
</p>
<p align="justify">
  As funcionalidades relacionadas a músicos são: criação, edição e deleção de álbuns; e criação, edição e deleção de músicas. Para criar um álbum, devemos informar o nome e relacioná-lo com um conjunto de gêneros. Um álbum pode ser de mais de um gênero musical. Na edição, é possível alterar o nome do álbum e os gêneros dele. Para criar uma música, os músicos devem informar o nome da música e o álbum a qual ela está relacionada.
Só é possível alterar o nome da música. Por fim, sobre a deleção de músicas, não há muito o que explicar, mas a de álbuns tem um comportamento importante: ao se deletar um álbum todas as músicas devem ser deletadas também.  
</p>
<p align="justify">
Para se logar, o usuário músico pode fornecer o email ou o nickname (junto com a senha). Caso ele não tenha sido aprovado ainda, ele não deve ser capaz de se logar na aplicação.
</p>

#### Usuários Ouvintes
<p align="justify">
  Os ouvintes são divididos em duas categorias: pagantes e não pagantes. 
  Os não pagantes só podem acessar a funcionalidade de busca da música, que deve fazer uma busca por termos dos nomes das músicas, com filtro de gênero opcional.
</p>
<p align="justify">
  Já os pagantes tem acesso a isso e mais: playlists próprias. Ao criar uma playlist, basta fornecer um nome. Podem ser adicionadas músicas da playlist, ou retira-las. 
  Todas as playlist são inicialmente privadas e só podem ser modificadas (ou adicionar e retirar músicas) pelo usuário criador. 
  Ele pode tornar a playlist colaborativa, permitindo que qualquer um a veja; e, então, quem for seguidor da playlist também pode a modificar.
</p>
<p align="justify">
  Um usuário ouvinte deve fornecer o nome, o email, nickname e senha no cadastro. Para logar, ele pode usar tanto o email como o nickname (junto com a senha).  
</p>

#### Usuários Administradores 

<p align="justify">
  Os usuários administradores são responsáveis pelo gerenciamento do nosso projeto. 
  Somente um usuário administrador pode cadastrar outro usuário administrador, passando as informações: nome, email, nickname e senha. 
</p>
<p align="justify">
  Eles podem aprovar os músicos (como explicado acima). Além disso, eles também são capazes de adicionar gêneros musicais, passando somente um nome.
</p>
<p align="justify">
  Por fim, há a possibilidade de bloquear qualquer usuário (que não seja um administrador). 
  Quando um usuário for bloqueado ele não pode mais logar na aplicação. 
  Para se logar, um administrador pode informar o email ou o nickname (junto com a senha)
</p>

### Frontend

<br>
- :headphones: 1. Tela de cadastro de usuário ouvinte**
<br>

- **2. Tela de cadastro de usuários administradores**

    Os administradores também se cadastram com nome, email, nickname e senha. Aqui, a senha tem que possuir, no mínimo, 10 carácteres. Somente um usuário administrador pode adicionar outro (ou seja, algum usuário admin deve estar logado para fazer essa funcionalidade

<br>

- **3. Tela de cadastro de usuários bandas**

    A banda precisa informar o seu nome, o nickname, o email, a sua descrição e uma senha, com, no mínimo 6 caracteres. 

<br>

- **4. Tela de aprovação de bandas**

    Deve possuir uma lista com todas as bandas e um botão que permita aprovar cada uma delas

<br>

- **5. Tela de Login**

    Todos os usuários (ouvintes, administradores ou bandas) devem se logar pelo mesma tela. Eles podem fornecer o email ou o nickname e a senha correta. 

<br>

- **6. Tela de home**

    A tela de home pode ser acessada por todos os usuários. Ela deve possuir um menu que permita navegar pelas funcionalidades de cada um deles. 
    Por exemplo, para o usuário administrador, deve haver as possibilidades de: aprovar bandas, gerenciar gêneros musicais e adicionar administradores

<br>

- **7. Tela de ver e adicionar gêneos**

    Um administrador deve ser capaz de ver todos os gêneros musicais e adicionar quantos gêneros quiser passando as informações básica (no caso, só o nome).

<br>

- **8. Tela de criação de álbuns**

    Essa funcionalidade é para banda criarem álbuns próprios. Para isso, ela deve passar um nome e selecionar os gêneros apropriados. 

<br>

- **9. Tela de criação de músicas**

    Aqui é o onde as bandas criam músicas Para isso, devem fornecer o nome e o selecionar um álbum que já tenham criado.

<br><br>

### Desafios

Você deve implementar os endpoints e as telas necessárias para se fazer as funcionalidades abaxio:

<br>

- **10. Procurar música**

    Essa funcionalidade pode ser acessada por usuários ouvintes (pagantes e não pagantes). Uma lista com o id e o nome deve ser retornada, paginada com 10 itens por vez.

<br>

- **11. Ver detalhe da música**

    Aqui, os usuários pagantes ou os não pagantes tem acesso a essa funcionalidade. Eles devem selecionar a música a partir de uma lista e serem redirecionados a uma tela com os detalhes dela

<br>

- **12. Tonar um usuário não pagante em um pagante**

    Um usuário administrador pode transformar um usuário não pagante em pagante, para ter acesso a outras funcionalidades. Caso o usuário já seja pagante, um erro deve ser mostrado.

<br>

- **13. Criação de playlist**

    Uma playlist pode ser criada por um usuário pagante. Ele só precisa fornecer um nome (e um id deve ser atrelado a ela). Inicalmente, ela é iniciada como privada, só podendo ser modificada pelo usuário que a criou.

<br>

- **14. Adicionar música a playlist**

    Um usuário pode adicionar em sua playlist uma música.

<br>

- **15. Retirar música de playlist**

    Um usuário pode retirar uma música de uma playlist dele.

<br>

- **16. Ver todas as playlists**

    Um usuário pode ver a lista de suas playlists. A lista deve ser paginada com 10 itens.

<br>

- **17. Tornar playlist colaborativa**

    Um usuário pode transformar a sua playlist em colaborativa. Permitindo que outros usuários a sigam e modifiquem.

<br>

- **18. Seguir playlist colaborativa**

    Um usuário pode seguir uma playlist de outro usuário. 

<br>

- **19. Modificar endpoints de playlist**

    Agora que possuimos a playlist colaborativa, você deve alterar as funcionalidades que são afetadas por isso

    - **Ver todas as playlists**

        Aqui, deve ser possível ver as playlists que o usuário criou e segue

    - **Adicionar música a playlist e retirar música de playlist**

        Agora, não só o usuário criador como também o usuário que segue uma playlist podem adicionar e retirar músicas das playlists

<br>

- **20. Editar perfil**

    Um usuário deve conseguir editar o seu perfil, alterando somente o nome.

<br>

- **21. Editar playlist**

    Usuários criadores e seguidores podem alterar o nome de uma playlist

<br>

- **22. Editar música**

    Os usuários banda podem alterar as suas músicas, mudando-a de álbum ou alterando o nome.

<br>

- **23. Deletar música**

    Os usuários banda podem deletar as suas músicas. Lembre-se de retirar todas as relações envolvidas: com álbuns, playlists e etc.

<br>

- **24. Deletar álbum**

    Os usuários banda podem deletar um álbum inteiro. Quando isso acontecer, todas as músicas e todas as relações envolvidas (inclusive as playlists) devem ser modificadoas.

<br>

- **25. Bloquear usuários ouvintes e músicos**

    Um administrador deve ser capaz de bloquear um usuário (ouvintes ou músicos). Isso impede-os de logar.

<br><br>

## Deploy

<p align="justify">
  O deploy do projeto foi realizado no firebase e encontra-se disponivel em: spotenu-erika.surge.sh
</p>

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Npm](https://www.npmjs.com/)

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/nauaramelo/spotenu-front.git
```
Entre no projeto e instale as dependências através do comando:
```
npm install
```
Por últomo, suba a aplicação: 
```
npm start
```

## Linguagens, dependencias e libs utilizadas :books:

- [Node](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://alligator.io/react/axios-react/)
- [Material ui](https://material-ui.com/pt/)
- [AWS](https://firebase.google.com/)

## Desenvolvido Por :octocat:

| [Likedin](https://www.linkedin.com/in/erika-skarda-99915488/) | 
| :---: |

## Licença 

[MIT License](https://github.com/Erika-Skarda)



