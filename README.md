# Microservicios con Docker

Este proyecto contiene una aplicación simple que implementa dos microservicios ejecutados con Docker. Uno de los servicios gestiona productos y el otro gestiona el carrito de compras, simulando una pequeña tienda.

## Descripción

- **Product Service**: Este microservicio ofrece una lista de productos. Los productos incluyen un ID, nombre y precio.
- **Cart Service**: Este microservicio gestiona un carrito de compras. Permite agregar productos al carrito y consultar los productos en el carrito.

## Requisitos

- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) instalados en tu máquina.

## Estructura del Proyecto

docker/
│
├── product-service/ # Microservicio de Productos
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
│
├── cart-service/ # Microservicio de Carrito
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
│
└── docker-compose.yml # Orquestador para Docker

## Instrucciones

### Clonar el Repositorio

Para comenzar, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/<tu_usuario>/<nombre_del_repositorio>.git
cd <nombre_del_repositorio>
```

### Construir y Ejecutar los Contenedores
Asegúrate de tener Docker y Docker Compose instalados. Luego, ejecuta el siguiente comando para construir las imágenes y ejecutar los servicios:

```bash
docker-compose up --build
```
Este comando construirá los contenedores a partir de los Dockerfiles y levantará los microservicios de productos y carrito. Los servicios estarán disponibles en los siguientes puertos:

Product Service: http://localhost:3001/products

Cart Service: http://localhost:3002/cart

### Interactuar con los Servicios
Una vez que los contenedores estén en ejecución, puedes interactuar con ellos utilizando curl o cualquier herramienta similar. Aquí algunos ejemplos:

Obtener los productos: Realiza una solicitud GET al servicio de productos para obtener la lista de productos disponibles.

```bash
curl http://localhost:3001/products
```
Agregar un producto al carrito: Realiza una solicitud POST para agregar un producto al carrito. Por ejemplo, para agregar el producto con ID 1:

```bash
curl -X POST http://localhost:3002/add-to-cart/1
```
Esto agregará el producto al carrito.

Ver el carrito: Realiza una solicitud GET para ver el carrito y los productos agregados.

```bash
curl http://localhost:3002/cart
```

### Detener los Contenedores
Cuando ya no necesites los contenedores en ejecución, puedes detenerlos con el siguiente comando:

```bash
docker-compose down
```
Este comando detendrá los contenedores, eliminará las redes y volúmenes definidos en el archivo docker-compose.yml, pero no eliminará las imágenes Docker creadas.
