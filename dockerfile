FROM node:lts-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install
COPY . .
RUN yarn build

EXPOSE 3300
CMD ["node", "build/server.js"]

