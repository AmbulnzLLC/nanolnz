FROM node:7.2.1
MAINTAINER jake@jakebladt.com

WORKDIR /relayserver
USE . /relayserver
EXPOSE 5000:5000
RUN npm install
CMD ["node", "server.js"]
