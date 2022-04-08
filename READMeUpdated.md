# Node Recruitment Tasks

## Features

- **Framework**: Express
- **Authentication**: JWT
- **Database**: PostgreSQL (Sequelize)
- **Code**: ESLint, Prettier, Husky
- **Debuging**: Debug, VS Code configurations
- **Logging**: Winston
- **Testing**: Jest, SuperTest, AutoCannon
- **Continuous Integration**: GitHub Actions + Docker Compose
- **Other**: Nodemon, DotEnv
- Well structured
- API versioning
- Request Validation

## Getting Started

```shell
git clone https://github.com/a-bew/nodejs-recruitment-task
cd nodejs-recruitment-task

```

## RUN from root dir

```shell
JWT_SECRET=secret docker-compose up -d
```

# Generate JWT keys

```
    curl --location --request POST '0.0.0.0:3000/auth' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "username": "basic-thomas",
        "password": "sR-_pcoow-27-6PAwCD8"
    }'
```

- Create db command
  `npx sequelize-cli db:create userDB`

- docker container shell access command after container is started
  ` docker compose exec <container-name> npx sequelize-cli db:create <database-name>`

- create database via active docker container (postgresdb)
  `docker-compose run --rm postgresdb psql -h postgresdb -U docker -c 'create database devDB;' `

- Migrate database via active docker container (postgresdb)
  `docker compose exec moviesservice npx sequelize-cli db:migrate --env development`
