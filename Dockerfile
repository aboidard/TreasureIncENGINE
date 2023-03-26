FROM node:16-alpine

# Global npm dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /app
COPY package*.json ./

RUN yarn install --frozen-lockfile --production

COPY --chown=node:node . ./
USER node


CMD [ "node", "engine.js" ]