FROM node:7.2.1
MAINTAINER jake@jakebladt.com

WORKDIR /webclient
COPY . /webclient
RUN rm /webclient/pubic/scripts/config.js
COPY ./public/scripts/config.dev.js /webclient/scripts/config.js
EXPOSE 5665:5665
RUN npm install
CMD ["node", "client.js"]
