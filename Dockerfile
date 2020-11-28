FROM node:12.16-alpine

WORKDIR /opt/merge-back-bot

ENV NODE_ENV=production

COPY . /opt/merge-back-bot

RUN apk add --no-cache dumb-init \
    && ln -s /opt/merge-back-bot/dist/index.js /usr/bin/merge-back-bot \
    && chmod +x /usr/bin/merge-back-bot

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["npm", "run", "start"]
