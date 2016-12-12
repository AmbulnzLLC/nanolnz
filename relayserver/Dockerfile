FROM node:7.2.1
MAINTAINER jake@jakebladt.com

WORKDIR /relayserver
COPY . /relayserver
EXPOSE 9002:5000
RUN npm install
CMD ["node", "server.js"]
