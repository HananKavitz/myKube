# Dockerfile
FROM node:latest

# Create app directory
RUN mkdir -p /app
WORKDIR /app


COPY tsconfig.json/. /app/tsconfig.json
COPY public/. /app/public
# Install app dependencies
COPY ./package.json /app
COPY server.js /app
RUN npm install

# Bundle app source
COPY src/. /app/src

# Build and optimize react app
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "production" ]
