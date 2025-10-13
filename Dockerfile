FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]


# create docker image
# docker build -t server-image .

# create docker container
# docker run --name server-image-container -p 3000:3000 server-image

# create docker container(with volume)
# docker run --name server-image-container --rm -p 3000:3000 -v /app/node_modules -v ${PWD}:/app server-image
