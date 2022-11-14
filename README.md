<br />
<div align="center">
  <a href="">
    <img src="src/img/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Entrega Final Curso de Backend Coderhouse</h3>
  <h2>API REST E-Commerce</h2>
</div>

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

En esta entrega final se implementa una API REST con arquitectura en capas; en la carpeta "src" se crean las distintas capas de la aplicación con módulos con responsabilidad propia. El la carpeta router se encuentran los archivos respectivos de las rutas para eealizar las pruebas de CRUD en la base de datos. 

La persistencia se realizó con MongoDB, por lo que se implementó el schema específico para las rutas respectivas. Para realizar las pruebas se debe verificar los archivos contenidos en "schema" para crear los carritos, productos y usuarios. 

Para la prueba del Login o autenticación se creó un frontend básico con el motor de plantilla "EJS". Una vez creado el usuario se debe ingresar con el "username" y el "password"; se redirige la ruta a "/chat" en el que se puede probar el centro de chat de la app. Igualmente se puede verificar la info del usuario y de la sesión.

## Features

### Stack seleccionado para el desarrollo

El stack que se utilizó para el desarrollo de la API fue el siguiente:

[![Node][Node.js]][Node-url] Entorno de desarrollo.

[![Express][Express.js]][Express-url] Gestión de rutas o controladores.

## Inicializar la app

### Requerimientos
Para poder iniciar la aplicación se debe instalar en el equipo NodeJS (https://nodejs.org/en/) ya que es el entorno en que se desarrollo la API.

### App start 
1. Al momento de clonar el repositorio de GitHub se deben instalar las dependencias requeridas para que se la app funcione. Para ello el comando a utilizar por medio de CLI es el siguiente:

```console
npm install
```

2. Luego se deberá establecer las variables de entorno que se contienen en el archivo "ejemplo.env" para que la app funcione. 

3. Una vez que las dependencias estén instaladas y las variables de entrono estén definidas, el comando para iniciar la app es el siguiente:

```console
npm start
```

## Rutas y métodos

- Para la prueba de las rutas se puede realiar en POSTMAN para el CRUD respectivo. El body del req al momento de crear documentos en la base de datos, se deberá postear en formato json siguiendo el schema respectivo para productos, carritos y usuarios, respectivamente. 

- La misma fórmula de prueba se deberá implementar cuando se realice el Put o modificación de algún elemento de la base de datos. 

- Para los otros tipos de rutas se podrá probar por POSTMAN o en el navegador una vez que se ingrese a la app a través del Login respectivo. 
## Autor
Elaborado por **Victor Vega**

[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/victor-vega-v/
[Node.js]: https://img.shields.io/badge/Node-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB
[Node-url]: https://nodejs.org/en/
[Express.js]: https://img.shields.io/badge/Express-35495E?style=for-the-badge&logo=express&logoColor=4FC08D
[Express-url]: https://expressjs.com/