FROM node:alpine

WORKDIR /app
#install dependences, el ultimo punto es el work directory
COPY package*.json . 
#correr solo para produccion final 
# RUN npm ci --only=production
#Correr con herramientas de desarollo
RUN npm install
#enviar todo el codigo al contenedor
COPY . .
#crear version de produccion
RUN npm run build
#exponer puertos
EXPOSE 3000
#comando que se ejecutara en el contenedor
CMD ["npm", "start"]