FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 81

CMD ["npm", "run", "dev"]