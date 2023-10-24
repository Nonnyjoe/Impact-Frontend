FROM alpine:3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "dev"]
