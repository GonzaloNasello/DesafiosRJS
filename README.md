# Documentacion del proyecto Mega Tienda Comics

Mega Tienda Comics es un E-commerce que sirve para comprar e informarte sobre comics de Marvel o DC, desarrollada mediante React JS y otras tecnologias.

* Contiene filtrado por categorias para navegar sobre los productos buscados y un filtrado por ID para el almacenamiento del carrito.
* Links para navegar sobre las distintas secciones y link para volver a los productos y continuar con la compra 
* Icono para ir al carrito.
* Al finalizar la compra se genera un ID por Firebase con el orden de la compra, se guardan los datos del comprador y productos seleccionados.

## Tecnologias usadas

* React: Utilizada para construir la aplicación que usa datos que cambian todo el tiempo.
* React APP.
* React-RouterDom: Para utilizar el routing en el browser.
* Node JS.
* NPM.
* Webpack: Agarra los modulos y los transforma para que el navegador pueda entenderlos.
* JSX: Utilizada para llamar funciones y construir objetos ya que es una extension de sintaxis de Javascript.
* CSS: Para dar estilos a la pagina.
* Firebase: Lo utilice para almacenar datos, consultar datos, hosing, eentre otras cosas.

## Pasos para utilizar el proyecto

1. Clonar el repositorio ( `git clone [link del repo] (https://github.com/GonzaloNasello/tiendacomicsnasello.git) `).  
2. En la terminal ir a la carpeta del proyecto (Ej: C:\Users\user\Documents\CODERHOUSE\React JS Desafios\app_nasello>).  
3. Ejecutar npm i (o npm install).  
4. Luego utilizar el comando npm start para iniciar el dashboard.  
5. La pagina se abrira en el navegador.  

## Componentes

* Cart: Es el encargado de mostrar los productos seleccionados por el comprador.
* CartWidget: Contiene el icono para ir al carrito.
* Context: Utilizado para realizar las cuentas y funciones del carrito para luego compartirlas con los otros componentes de la aplicacion.
* Firebase: Para conectar a firebase a la aplicacion.
* Formulario: Se encarga de tener las funciones para completar los datos que luego seran guardados en firebase.
* ItemListContainer: Es el encargado de filtrar por categoria y enviarle los props al ItemList.
* ItemList: Mapea los productos ya filtrados por categoria.
* Item: Muestra los productos que fueron mapeados.
* ItemDetailConteiner: Busca el producto por id.
* Itemdetail: Muestra el producto encontrado por id.
* ItemCount: Realiza la parte logica para los botones de sumar, restar y resetear cantidad de productos.
* NavBar: Muestra los links de la barra de navegacion y el icono del carrito.
* App: Es el encargado de generar las  rutas a las distintas secciones.



