-- CreateTable

CREATE TABLE IF NOT EXISTS Users (
  "id" INTEGER NOT NULL AUTO_INCREMENT,
  "userId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE IF NOT EXISTS Roles (
  "id" INTEGER NOT NULL AUTO_INCREMENT,
  "userId" INTEGER NOT NULL,
  "userId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE IF NOT EXISTS Movies (
  "id" INTEGER NOT NULL AUTO_INCREMENT,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "release" TEXT NOT NULL,
  "genre" TEXT NOT NULL,
  "director" TEXT NOT NULL,
  PRIMARY KEY ("id")
);

-- Seed
-- INSERT INTO users (id, name, email) VALUES ('userid', 'Gopher', 'hello@gopher.com');