FROM node:lts

ENV NODE_ENV=production

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn global add ts-node typescript
RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "migrate:start"]