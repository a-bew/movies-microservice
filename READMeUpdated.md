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

## Access Docker Shell

- docker container shell access command after container is started
  ` docker compose exec <container-name> npx sequelize-cli db:create <database-name> --env development`
- create database via active docker container (postgresdb)
  `docker compose run --rm postgresdb psql -h postgresdb -U docker -c 'create database devDB;' `
- Migrate database via active docker container (postgresdb)
  `docker compose exec theapp npx sequelize-cli db:migrate --env development`

* -- Moving Forward, we can now create, drop and migrate database service from the terminal outside docker, while point to the root of our app

## drop db command

`shell NODE_ENV=development npx sequelize-cli db:drop --env development `

## Create db command

`shell NODE_ENV=development npx sequelize-cli db:create --env development `

## Create db migrate

`shell NODE_ENV=development npx sequelize-cli db:migrate --env development `

# Generate JWT keys

```
    curl --location --request POST '0.0.0.0:3000/auth' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "username": "basic-thomas",
        "password": "sR-_pcoow-27-6PAwCD8"
    }'

    Response: {"message":"Movie RRR Added Successfully"}
```

# POST MOVIE

```
  curl -d '{"title":"Morbius"}' \
    -H "Content-Type: application/json" \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY0OTQwMDAwMSwiZXhwIjoxNjQ5NDAxODAxLCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.GlbEVHPKMKULUqOQpQXRcpeb9zSIghfaq2tUmGYksS8' -X POST 0.0.0.0:3000/movies
```

# GET MOVIE

```shell
      curl -X GET "0.0.0.0:3000/movies?userId=123"

    Response: [{
        "id":1,
        "userId":123,
        "title":"Morbius",
        "release":"01 Apr 2022",
        "genre":"Action, Adventure, Drama",
        "director":"Daniel Espinosa",
        "createdAt":"2022-04-08T07:40:22.254Z",
        "updatedAt":"2022-04-08T07:40:22.254Z"
      },{
        "id":2,
        "userId":123,
        "title":"RRR",
        "release":"25 Mar 2022",
        "genre":"Action, Drama",
        "director":"S.S. Rajamouli",
        "createdAt":"2022-04-08T07:52:54.925Z",
        "updatedAt":"2022-04-08T07:52:54.938Z"
      }]
```
