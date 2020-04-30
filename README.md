# Rick&Morty Filter
Esta aplicación se sirve de la API https://rickandmortyapi.com/documentation/#get-all-characters para elaborar un catálogo de personajes de la serie de televisión Rick&Morty en el que encontrar tus series favoritas mediantes el buscador y obetener más información sobre estos.

Este proyecto fue realizado como ejercicio de evaluación final del módulo 3 de Adalab por Maria Mateo [GitHub](https://github.com/memematvaz) #PromociónIdelisa.

## Objetivos 

* Responsive Web
* Estructura por componentes
* Conectar a la API
* LocalStorage
* Filtro funcional
* Desarrollar con React 
* Estilos con Sass

##  Estructura del proyecto 

```
├── Readme.md
├── package.json
├── package-lock.json
├── public
|   ├── favicon.ico
|   ├── index.html
|   ├── manifest.json
|   └── robots.txt
└──src
    ├── components
    |     ├── services
    |     |       └── FetchData.js
    |     ├── Character.js
    |     ├── CharacterDetails.js
    |     ├── CharacterList.js
    |     ├── FilterInput.js 
    |     ├── Header.js     
    |     └── App.js
    ├── icons
    |     ├── fontawesome-free-5.12.1-web
    |     ├── alien.png
    |     ├── dead.png
    |     ├── favicon.png
    |     ├── header.jpg
    |     ├── human.png    
    |     └── live.png 
    ├── styles
    |     ├── base
    |     |       └── reset.scss   
    |     ├── core
    |     |       ├── _mixins.scss   
    |     |       └── _variables.scss   
    |     ├── layout
    |     |       ├── _details.scss  
    |     |       ├── _filter.scss
    |     |       ├── _header.scss  
    |     |       ├── _hover.scss   
    |     |       └── _main.scss   
    |     └── App.scss    
    └── index.js 
 ```

## Tecnologías usadas 

* [ReactJS] (https://reactjs.org/docs/getting-started.html) React Docs!
* [Sass] (https://sass-lang.com/) Sass Docs.
* [Visual Studio Code] - awesome web-based text editor
* [GIT]- Control de versiones
* [GitHub] (https://guides.github.com/features/mastering-markdown/)


## Instalación 


Necesitarás instalar  📋 [Node.js](https://nodejs.org/) para trabajar con este repositorio, luego:

1. Descarga o clona el repositorio
```sh
$ git clone https://github.com/Adalab/modulo-3-evaluacion-final-memematvaz.git
```
2. Abre el proyecto en tu editor de codigo (Visual Sudio Code, Atom, Brackets...)

3. Instala las dependencias locales
```sh
$ npm install
```
4. Arranca el proyecto:
```sh
$ npm start
```

## Cómo funciona:
La aplicación cuenta con un buscador en el que puedes escribir el nombre de los personajes que desees encontrar y automáticamente filtrará los resultados coincidentes. Los personajes se encuentran ordenados alfabéticamente a lo largo del main de la página.

Al colocar el cursor encima de las diferentes tarjetas con las imágenes de los personajes podrás ver su nombre y si especie. Al clickar sobre ellas podrás acceder a un resumen de este personaje viendo además de su nombre el número de episodios en el que ha aparecido. El primer icono de la tarjeta representan la especie del personaje, si es humano o un alien; y el segundo si se encuentra vivo o muerto. Pulsando la x podrás volver atrás.

Por último visita la web aquí!

(http://beta.adalab.es/modulo-3-evaluacion-final-memematvaz/)
