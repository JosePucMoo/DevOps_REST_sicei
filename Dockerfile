# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia package.json y package-lock.json antes de instalar dependencias
COPY package*.json ./

# Instala todas las dependencias, incluidas las de desarrollo
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando de inicio con `npm run dev`
CMD ["npm", "run", "dev"]
