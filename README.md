# DLNightwatch

## Nightwatch automation project

_Explicacion: Se corre un solo test llamado "Envio de formulario" donde se realizan las validaciones solicitadas:_

### Completar y enviar formulario de ‘Join our team’ siguiendo los siguientes pasos
1) Ingresar a la web de December Labs
2) Ingresar a la sección ‘Careers’ y validar que la sección se despliegue correctamente
3) Ingresar el formulario de ‘Join our team’ desde cualquier botón de ‘Apply now’
    * Dentro del formulario completar los diferentes campos con datos a elección, a no ser el email, en el cual se debe ingresar "test@decemberlabs.com"
    * Enviar el formulario y validar que el mismo se envió de forma exitosa.

### Mejoras:
_Es la primera vez que tengo contacto con Nightwatch y test en javascript, no se aplica ningun patro de diseño. Podria aplicarse Page Objet Model, siendo esté el más usado.
Se pueden mejorar los locators (en una linea utilizo el cssSelector que genera chrome lo cual no es lo mejor)_

### Pasos para Ejecutar el test: (tener instalado node)
1) Clonar el proyecto
2) En caso de no tener instalado Node.js, instalarlo
3) En la carpeta del proyecto ejecutar *npm init*
4) Se le pedirá que rellene los detalles del proyecto, solo dar ENTER:
    * package name: (project)
    * version: (1.0.0)
    * git repository: (https://github.com/AlanXavierKlein/DLNightwatch.git)
    * author:
    * license: (ISC)
    * About to write to {direccion local}:
    * Se preguntara _Is this OK (yes)_ poner **y** y dar Enter
5) Ejecutar --> *npm install --save-dev nightwatch*
6) Ejecutar --> *npm install --save-dev chromedriver*

7) Una vez instalado todo ejecutar --> *npm test*  para correr el test
