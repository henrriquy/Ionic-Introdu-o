# Ionic-Introducao
Estudos introdutórios de Ionic

Esse projeto foi feito na versão 1.7.15 do Ionic

===================================================================

Comandos

ionic -> mostra todos os comandos do ionic.
ionic serve -> Cria um localhost para acessar o app via navegador.
ionic start nomeDaAplicacao blank -> cria um projeto em branco.

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