## Instrucciones para ejecutar el código

1. Instalar las dependencialas

    ````
    npm install
    ````
2. Iniciar el entorno de desarrollo

    ````
    npm run dev

## Construir la imagen y ejecutar el contenedor

1. Contruir imagen
    ````
    docker build -t sicei .
    ````

2. Ejecutar contenedor
    ````
    docker run -p 3000:3000 sicei
    ````

