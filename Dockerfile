FROM node:14.15-alpine 

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY ./.sequelizerc ./
COPY ./.env.test  ./
COPY ./.env.development ./
COPY ./.env ./

RUN mkdir ./src
COPY ./src ./src

RUN mkdir ./tests
COPY ./tests ./tests



# CMD ["node", "./src/server.js"]
