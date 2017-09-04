# Ionic-Introducao
Estudos introdutórios de Ionic

Esse projeto foi feito na versão 1.7.15 do Ionic

===================================================================

Comandos

ionic -> mostra todos os comandos do ionic.
ionic serve -> Cria um localhost para acessar o app via navegador.

ionic stars appProdutos sidebar -> cria um projeto com o menu
ionic start nomeDaAplicacao blank -> cria um projeto em branco.
npm install -> instala todas as dependencias listadas no package.json
ionic setup sass -> configura a aplicação para trabalhar com sass

npm install -g bower -> instalação do bower, gerenciador de pacotes
bower -> mostra os comandos do bower

bower install ngstorage -> biblioteca necessária para se trabalhar com Location Storage

===========================================================================

Conhecendo a estrutura de arquivos do Ionic
hooks -> Implementa os scripts de bild da aplicação, compilação para n plataformas.
plugins -> Pugins do cordova - acesso a ferramentas nativas dos dispositivos.
scss-> Configuração das variaveis para customizar temas do Ionic.
www -> Todos os arquivos do projeto...estilos, javascript, angularjs e etc.
www/templates -> View da aplicação...páginas e telas.
index.html -> Arquivo inicial da aplicação com todas as referências js necessárias.

=================================================================================

Rotas Angular
www/js/app.js -> controle de rotas
www/js/controller.js -> métodos da camada de controller
ww/js/services.js -> acesso a dados, webapi e etc

============================================================

Componentes

 
           ================Cards
      <div ng-controller="appController">
        
        <div class="card">
          <div class="item item-divider">Título</div>
          <div class="item item-text-wrap">
            Conteúdo do Catão
          </div>
        </div>
        <div class="list card">
          <a href="#" class="item item-icon-left">
          <i class="icon ion-home"></i>
          Endereço
        </a>
          <a href="#" class="item item-icon-left">
            <i class="icon ion-ios-telephone"></i>
            Telefone
          </a>
          <a href="#" class="item item-icon-left">
              <i class="icon ion-wifi"></i>
              Wi-Fi
            </a>
        </div>

        <div class="card" ng-repeat="item in noticias">
          <div class="item item-avatar">
            <img src="img/{{item.imgUser}}" alt="">
            <h2>{{item.nome}}</h2>
            <p>{{item.titulo}}</p>
          </div>
          <div class="item item-body">
            <img class="full-image" src="img/{{item.imgNot}}" alt="">
            <p>{{item.descricao}}</p>
            <p>
              <a href="#" class="subdued">Leia mais</a>
            </p>
          </div>
        </div>
      </div>


       ================Listas
      <ul class="list">

        tags a,li,div podem ser item da lista, basta ter a class item
        <a href="#" class="item item-icon-left">
              <i class="icon ion-email"></i>
              Olhar E-mail
        </a>
        <a href="#" class="item item-icon-left">
            <i class="icon ion-person-stalker"></i>
            Amigos
            <span class="badge badge-assertive">12</span>
          </a>
        <a href="#" class="item item-avatar">
              <img src="img/ionic.png"></img>
              <h2>Pedro</h2>
              <p>Descrição do avatar</p>
          </a>
        <li class="item">Item</li>
        <li class="item">Item</li>
        <li class="item">Item</li>
        <li class="item">Item</li>
        <li class="item">Item</li>
        <li class="item">Item</li>
      </ul>

      <ion-list ng-controller="MeuController" show-reorder="true">
        <div class="item item-divider">
          Reordenar Lista
        </div>
        <ion-item ng-repeat="item in itens">
          Item {{item}}
          <ion-reorder-button class="ion-navicon" on-reorder="moveItem(item,$fromIndex,$toIndex)">
            
          </ion-reorder-button>
        </ion-item>
      </ion-list>
    
      ================Botões  
      <button ng-click="alteraNomeBtn('Botão Básico')" class="button button-royal">
        {{(nomeBtn1?nomeBtn1:'button-royal')}}
      </button>
      <div class="padding">
        <label class="item item-input">
          <input ng-model="textoInput" type="text" placeholder="Digite o nome do botão.">
        </label>
        <button ng-mouseenter="alteraNomeBtn2(textoInput)" class="button button-block button-calm">
            {{(nomeBtn2?nomeBtn2:'button-calm')}}
        </button>
      </div>
      <button ng-disabled="desabilitar" ng-click="desabilitar=true" class="button button-assertive button-full">button-assertive</button>
    

    ==================Formulários

     <div class="list list-inset">
        <label class="item item-input">
          <i class="icon ion-search placeholder-icon"></i>
          <input type="text" placeholder="Busca">
        </label>
      </div>

      <div class="list">
        <label class="item item-input">
          <input type="text" placeholder="Nome">
        </label>
        <label class="item item-input">
            <input type="text" placeholder="Sobrenome">
        </label>
        <label class="item item-input">
              <textarea ></textarea>
              <button class="button button-full button-royal">Publicar</button>
        </label>
      </div>

      <div class="list" ng-controller="formController">
        <div class="item item-input item-stacked-label">
          <span class="input-label">Nome</span>
          <input ng-model="nome" type="text" placeholder="Paulo">
        </div>
        <div class="item item-input item-stacked-label">
          <span class="input-label">Sobrenome</span>
          <input ng-model="sobrenome" type="text" placeholder="Paulo">
        </div>
        <div class="item item-input item-stacked-label">
          <span class="input-label">Email</span>
          <input  ng-model="email" type="text" placeholder="Paulo@mail.com">
        </div>
        <button ng-click="form()" class="button button-full button-royal">Cadastrar</button>
      </div>

      <div class="list list-inset">
          <label class="item item-input">
            <input type="text" placeholder="Nome">
          </label>
          <label class="item item-input">
              <input type="text" placeholder="Sobrenome">
          </label>
          <label class="item item-input">
                <textarea ></textarea>
                <button class="button button-full button-royal">Publicar</button>
          </label>
        </div>

==========Header,Contenc, footer
<ion-pane ng-controller="btnController">
    <ion-header-bar class="bar-calm">
      <h1 class="title">Teste Componentes</h1>
    </ion-header-bar>
    <ion-content class="has-header has-footer">
      content
     
    </ion-content>
    <ion-footer-bar class="bar-calm">
      <div class="buttons">
        <button class="button">btnEsquerdo</button>
      </div>
      <h1 class="title">Footer Teste Componentes</h1>
      <div class="buttons">
        <button class="button">btnDireito</button>
      </div>
    </ion-footer-bar>
  </ion-pane>

  ===========================Model
  <body ng-app="starter">

  <ion-pane ng-controller="appController">
    <ion-header-bar class="bar-calm">
      <h1 class="title">Teste Componentes</h1>
      <button class="button button-icon ion-compose" ng-click="modal.show()"></button>
    </ion-header-bar>
    <ion-content class="has-header has-footer">
      <ion-list>
        <ion-item ng-repeat="contato in contatos">
          {{contato.nome}} - {{contato.email}}
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer-bar class="bar-calm">
      <div class="buttons">
        <button class="button">btnEsquerdo</button>
      </div>
      <h1 class="title">Footer Teste Componentes</h1>
      <div class="buttons">
        <button class="button">btnDireito</button>
      </div>
    </ion-footer-bar>
  </ion-pane>

  <!-- text/ng-template -> o ionic entende que é uma página externa -->
  <script id="templates/modal.html" type="text/ng-template">
    <ion-modal-view>
      <ion-header-bar class="bar bar-header bar-positive">
        <h1 class="title">Novo Contato</h1>
        <button ng-click="modal.hide()" class="button button-clear button-primary">Cancalar</button>
      </ion-header-bar>
      <ion-content class="padding">
        <div class="list">
          <label class="item item-input">
            <span class="input-label">Nome</span>
            <input type="text" ng-model="Contato.nome">
          </label>
          <label class="item item-input">
              <span class="input-label">E-amil</span>
              <input type="text" ng-model="Contato.email">
            </label>
          <button ng-click="addContato(Contato)" class="button button-full button-positive">
                Adicionar
          </button>
        </div>
      </ion-content>
    </ion-modal-view>
  </script>

</body>

=======================sitema de grid
<body ng-app="starter">

  <ion-pane>
    <ion-header-bar class="bar-calm">
      <h1 class="title">Teste Componentes</h1>
      <button class="button button-icon ion-compose" ng-click="modal.show()"></button>
    </ion-header-bar>
    <ion-content class="has-header has-footer">
      <h2>Grid Base</h2>
      <div class="row">
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
      </div>
      <h3>Tamanhos (10,20 'padrão',25,33,50,67,75,80,90)</h3>
      <div class="row">
        <div class="col col-50">.col .col-50</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
      </div>
      <div class="row">
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col col-75">.col .col-75</div>
      </div>
      <h3>Offset</h3>
      <div class="row">
        <div class="col col-33 col-offset-33">.col-33 .col-offset-33</div>
        <div class="col">.col</div>
      </div>

      <div class="row">
        <div class="card col">
          <div class="item item-text-wrap">
            Conteúdo de Exemplo.
          </div>
        </div>
        <div class="card col">
          <div class="item item-text-wrap">
            Conteúdo de Exemplo.
          </div>
        </div>
        <div class="card col">
          <div class="item item-text-wrap">
            Conteúdo de Exemplo.
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card col">
          <div class="item item-text-wrap">
            Conteúdo de Exemplo.
          </div>
        </div>
        <div class="card col col-67">
          <div class="item item-text-wrap">
            Conteúdo de Exemplo .col-67.
          </div>
        </div>
        <div class="card col">
          <div class="item item-text-wrap">
            Conteúdo de Exemplo.
          </div>
        </div>
      </div>

    </ion-content>
    <ion-footer-bar class="bar-calm">
      <div class="buttons">
        <button class="button">btnEsquerdo</button>
      </div>
      <h1 class="title">Footer Teste Componentes</h1>
      <div class="buttons">
        <button class="button">btnDireito</button>
      </div>
    </ion-footer-bar>
  </ion-pane>
</body>

================checkbox,radio e range
<body ng-app="starter">

  <ion-pane>
    <ion-header-bar class="bar-calm">
      <h1 class="title">Teste Componentes</h1>
      <button class="button button-icon ion-compose" ng-click="modal.show()"></button>
    </ion-header-bar>
    <ion-content class="has-header has-footer">
      <ion-list >
        <ion-checkbox  ng-model="cor.azul">Azul</ion-checkbox>
        <ion-checkbox  ng-model="cor.vermelho">Vermelho</ion-checkbox>
        <ion-checkbox  ng-model="cor.amarelo">Amarelo</ion-checkbox>
        <ion-checkbox  ng-model="cor.verde">Verde</ion-checkbox>
        <ion-item >{{cor}}</ion-item>
      </ion-list>
      <ion-list >
        <ion-radio  ng-model="sexo" ng-value="'Masculino'">Masculino</ion-radio>
        <ion-radio  ng-model="sexo" ng-value="'Feminino'">Feminino</ion-radio>
        <ion-item >{{sexo}}</ion-item>        
      </ion-list>
   
    <div class="list">
      <div class="item range">
        <i class="icon ion-volume-low"></i>
        <input type="range"  ng-model="volume">
        <i class="icon ion-volume-high"></i>
      </div>
      <div class="item">{{volume}}</div>
    </div>
  </ion-content>
    <ion-footer-bar class="bar-calm">
      <div class="buttons">
        <button class="button">btnEsquerdo</button>
      </div>
      <h1 class="title">Footer Teste Componentes</h1>
      <div class="buttons">
        <button class="button">btnDireito</button>
      </div>
    </ion-footer-bar>
  </ion-pane>
</body>

