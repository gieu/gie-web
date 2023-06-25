FROM node:18-alpine

WORKDIR /app
COPY . /app

RUN npm config set fetch-retry-maxtimeout 120000

RUN npm install
RUN npm install -g gatsby-cli

RUN gatsby build --prefix-paths

EXPOSE 80

CMD gatsby serve --port 80 --host 0.0.0.0
