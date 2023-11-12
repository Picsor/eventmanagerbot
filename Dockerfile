FROM node:21-alpine

WORKDIR /repositories/eventmanagerbot

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "./index.js"]
