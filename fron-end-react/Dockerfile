FROM node:18-alpine

WORKDIR /fron-end-react

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]