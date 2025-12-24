FROM node:latest
WORKDIR app
COPY package.json .
RUN npm install
COPY . .
Expose 3000
cmd ["npm","start"]