start:
	- docker-compose up

build:
	- docker-compose exec coding-challenge-devops npm run build

compile:
	- docker-compose build

up-build:
	- docker-compose up --build

stop:
	- docker-compose down

cache:
	- docker-compose exec coding-challenge-devops npm cache clean

cache-npx:
	- docker-compose exec coding-challenge-devops npx clear-npx-cache

eslint:
	- docker-compose exec coding-challenge-devops npm run eslint

format:
	-  docker-compose exec coding-challenge-devops npm run format

ko:
	- rm -rf node_modules && docker-compose up --build