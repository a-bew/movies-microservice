FROM node:14.15-alpine 

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY ./tsconfig.json ./
COPY ./.sequelizerc ./
COPY ./.env.test.example  ./
COPY ./.env.development.example ./

RUN mkdir ./src
COPY ./src ./src

RUN mkdir ./tests
COPY ./tests ./tests