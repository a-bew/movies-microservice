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

# COPY ./scripts/db/docker-entrypoint.sh /docker-entrypoint-initdb.d
# RUN chmod +x /docker-entrypoint-initdb.d/docker-entrypoint.sh

# RUN chmod +x /scripts/db/docker-entrypoint.sh

CMD ["node", "./src/server.js"]

# ENTRYPOINT [ "/scripts/init.sh" ]
