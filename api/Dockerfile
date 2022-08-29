FROM node:lts

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn global add ts-node typescript
RUN yarn install

ENV NODE_ENV=production

COPY . .

ENTRYPOINT [ "yarn", "migrate:start"]