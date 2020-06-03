FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8000
RUN yarn start
CMD ["yarn", "server"]