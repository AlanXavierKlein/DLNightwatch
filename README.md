# DLNightwatch
Nightwatch automation project

Explicacion:
Se corre un solo test llamado "Envio de formulario" donde se realizan las validaciones solicitadas en la consigna.

Mejoras:
Es la primera vez que tengo contacto con Nightwatch y test en javascript, no se aplica ningun patro de diseño. Podria aplicarse Page Objet Model, siendo esté es más usado.
Se pueden mejorar los locators (en una linea utilizo el cssSelector que genera chrome)

Para Ejecutar el test: (tener instalado node)
1- Clonar el proyecto
2-En la carpeta del proyecto ejecutar
--> npm init
Se le pedirá que rellene los detalles del proyecto. Puede rellenarlos o dejarlos en blanco a partir de ahora:
    package name: (project)
    version: (1.0.0)
    git repository: (https://github.com/AlanXavierKlein/DLNightwatch.git)
    author:
    license: (ISC)
    About to write to C:\Users\alank\Documents\Klei\Nueva carpeta\DLNightwatch\package.json:

--> npm install --save-dev nightwatch
--> npm install --save-dev chromedriver

Una vez instalado todo ejecutar > npm test  para correr el test
