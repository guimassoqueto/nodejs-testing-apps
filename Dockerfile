FROM node:latest

COPY . /

WORKDIR /src

RUN npm install -g npm@latest  \
    && npm install 

EXPOSE 8000

CMD [ "node", "database/setup-db.js"]