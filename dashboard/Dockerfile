FROM node:lts as dependencies
WORKDIR /dashboard
COPY package.json yarn.lock ./
RUN yarn install

FROM node:lts as builder
WORKDIR /dashboard
COPY . .
COPY --from=dependencies /dashboard/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /dashboard
ENV NODE_ENV production

COPY --from=builder /dashboard/next.config.js ./
COPY --from=builder /dashboard/public ./public
COPY --from=builder /dashboard/.next ./.next
COPY --from=builder /dashboard/node_modules ./node_modules
COPY --from=builder /dashboard/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]