#!/bin/sh

NODE_ENV=development npx sequelize-cli db:drop --env development

NODE_ENV=development npx sequelize-cli db:create --env development

NODE_ENV=development npx sequelize-cli db:migrate --env development
