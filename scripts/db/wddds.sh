#!/usr/bin/env bash

set -e

docker-compose up -d postgresdb

WAIT_FOR_PG_ISREADY="while ! pg_isready --quiet; do sleep 1; done;"
docker-compose exec postgresdb bash -c "$WAIT_FOR_PG_ISREADY"

for ENV in development test
do
  # Create database for this environment if it doesn't already exist.
  docker-compose exec postgresdb \
    su - docker -c "psql $ENV -c '' || createdb $ENV"

  # Run migrations in this environment.
  docker-compose run --rm -e NODE_ENV=$ENV todo npx sequelize-cli migrate --env $ENV
done

docker-compose up -d