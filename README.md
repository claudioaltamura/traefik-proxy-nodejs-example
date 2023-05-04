# traefik-proxy-nodejs-example
A Traefik proxy example with Node.js and Express.js
# Run server

    npm start

# Build container image

    docker build . -t node-web-app:1.0.0 -t node-web-app:latest

    docker images | grep node-web-app

# Run just the image

    docker run -e APP_NAME=APP_A -p 13000:3000 -d node-web-app

    docker ps

    docker logs <container id>

    curl -i localhost:13000

# Stop image

    docker stop <container id>

# Run docker-compose

reverse-proxy

    docker-compose up -d reverse-proxy

app_a
    docker-compose up -d app_a

# Stop docker-compose

    docker-compose down -v

# ap_a

    curl -i http://app_a.localhost
