
set -e

for ENV in test development
do
  # Create database for this environment if it doesn't already exist.
  docker compose exec theapp \
    npx sequelize-cli db:drop --env "$ENV"

  docker compose exec theapp \
    npx sequelize-cli db:create --env "$ENV"
  
  # Run migrations in this environment.
  docker compose exec theapp \
    npx sequelize-cli db:migrate --env "$ENV"

done
