COMPOSE=docker compose

up: 
	${COMPOSE} up -d

db:
	${COMPOSE} up pg -d