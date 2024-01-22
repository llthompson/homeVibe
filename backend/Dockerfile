FROM node:18 AS base

WORKDIR /api

COPY package*.json ./
RUN npm install


COPY . .
RUN npm run build


EXPOSE 8000

FROM base as dev

CMD ["npm", "run", "dev"]

FROM base AS production

COPY --from=base /api/node_modules ./node_modules
COPY --from=base /api/package*.json ./
COPY --from=base /api/dist .
COPY .env.production /api/.env
CMD [ "npm", "run", "start:prod" ]