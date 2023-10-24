FROM node:18.18.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install yarn

RUN yarn install

COPY . .

CMD [ "yarn", "dev"]
