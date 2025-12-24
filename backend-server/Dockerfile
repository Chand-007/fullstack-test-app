FROM node:latest
workdir app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
cmd ["node","server.js"]