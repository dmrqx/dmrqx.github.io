O que é front-end e back-end?
=============================

A resposta-curta-que-~~quase~~-cabe-em-um-tweet:

*Front-end é aquilo que você vê e com o que você interage: a interface gráfica. Back-end é o contrarregra por trás desta interface, capaz de fazer um dado programa funcionar de fato.*

Agora entrando em detalhes:


## O que é uma interface?
Em um sentido amplo, interface é um meio que possibilita a comunicação de dois ou mais grupos que não conseguem se comunicar diretamente entre si.

Uma interface gráfica é a parte visual de um software ou aplicação que disponibiliza para o usuário uma forma de enviar comandos que serão traduzidos em código para fazer esse software executar alguma ação.


## Um exemplo prático
Quando falamos de front-end na web, por exemplo, estamos falando de tudo o que você vê quando acessa um site no seu navegador. Os links, imagens, botões ou até mesmo este texto, é resultado de uma mistura de linguagens que o navegador é capaz de interpretar e exibir graficamente, o HTML e o CSS.

O HTML (_Hyper Text Markup Language_) é uma linguagem de marcação e é através dela que definimos o que é o que dentro de uma página para que o navegador saiba como exibir cada conteúdo corretamente. O CSS (_Cascade Style Sheet_) é a linguagem que utilizamos para especificar estilos visuais para cada elemento ou grupo de elementos que definimos com o HTML: a margem em volta de uma imagem, a tipografia utilizada nos textos ou cabeçalhos, as cores que destacam um link.

Geralmente o HTML e o CSS têm um aliado para tornar os sites mais interativos: o JavaScript. O JavaScript permite que criemos carrosseis de imagens, janelas pop-up, filtros de conteúdo e até animações. (codepen.io/search/pens?q=javascript [galeria de snippets que utilizam JavaScript])


## Front-end = Client side
Outro termo usado para definir o front-end é _client side_. O “cliente” neste caso, é o navegador: um programa capaz de fazer a ponte entre o usuário e um servidor de arquivos utilizando certos protocolos de comunicação. No caso da internet, o protocolo mais comum é o HTTP, que vemos no começo das urls que usamos para acessar algum site no navegador.

Então nem tudo o que acontece dentro do cliente fica dentro do cliente. Quando pensamos em aplicações mais complexas, como o sistema online da faculdade, o internet banking ou um site de notícias com vários colaboradores, percebemos que o front-end sozinho não é suficiente.


## Back-end = Server side
Lembra que o back-end é como se fosse o contrarregra por trás da interface gráfica? Pois bem. Enquanto o front-end cuida da interação entre o usuário e a interface, o back-end está agindo constantemente nos bastidores, buscando em um servidor as informações, dados e arquivos que serão exibidos no navegador. O back-end também é conhecido como lado do servidor (server side), e consiste normalmente de três partes: um servidor, uma aplicação e um banco de dados.

Quando procuramos um produto em um site de compras estamos usando o navegador para fazer uma requisição no servidor, pedindo para que algumas informações específicas apareçam na nossa tela: uma lista de produtos de uma determinada marca, ordenados do menor para o maior preço, novos ou usados. Essa requisição é interpretada pela aplicação que está rodando no servidor e vai determinar, geralmente, que alguma informação seja buscada ou guardada em um banco de dados.

Como foi dito em um post anterior (http://www.programaria.org/2015/07/26/o-que-e-programar/), existem várias linguagens de programação que podemos empregar para conversar com os computadores. Algumas das linguagens mais populares, como Python, Ruby ou PHP, podem ser utilizadas para escrever essas aplicações que estabelecem a comunicação do navegador com o servidor, do servidor com o banco de dados, e como as informações que buscamos ou inserimos em uma página na web serão manipuladas e armazenadas nesse banco de dados.


## Front-end vs. Back-end
Um tópico de discussão entre desenvolvedores é a complexidade que envolve cada ponta da linha que define todos esses níveis de comunicação: usuário-navegador, navegador-servidor, servidor-banco de dados.

Para alguns, parece que o fato do front-end estar mais ligado ao caráter gráfico de um site ou aplicativo, ou que escrever código em HTML, CSS e JavaScript seja mais fácil que desenvolver o código que atua no lado do servidor, usando as outras linguagens que já citamos (Python, Ruby, PHP ou ainda C#, Swift, etc).

Na verdade, esse preconceito é infundado. Hoje em dia, o HTML em sua quinta versão e o CSS em sua terceira, possibilitam a criação de conteúdo muito mais complexo do que antigamente e manipular essas linguagens para criar páginas com maior apelo visual não é uma tarefa tão descomplicada. O JavaScript então, tem evoluído tanto que atualmente é utilizado também por desenvolvedores back-end em ferramentas como o Node.js e em banco de dados como o MongoDB.

E o desenvolvimento back-end também não fica pra trás quanto ao rigor da demanda por melhores aplicações. Existem muitos frameworks em constante atualização para fazer com que as linguagens server side trabalhem com melhor performace.


## O melhor dos dois mundos?
Em vez de discutir, não seria melhor se cada lado aprendesse como o outro funciona para todos trabalharem melhor, juntos?

Pois é, aí entram os desenvolvedores full-stack. Normalmente, são desenvolvedores back-end que buscam entender e se capacitar para poderem criar páginas HTML ou plugins em JavaScript, ou desenvolvedores front-end que trabalham com administradores de conteúdo como o WordPress ou Joomla e procuram aprofundar seus conhecimentos nas linguagens com as quais essas ferramentas foram criadas.

O importante, no final das contas, é estar seguro daquilo que se quer saber e manter o foco. Em um mundo ideal, nós seríamos capazes de programar em todas as linguagens possíveis mas, na realidade, é melhor sabermos fazer bem aquilo que nos propusemos a fazer do que ser um pato programador que faz tudo “mais ou menos”.
