FROM node:7.2.1
MAINTAINER jake@jakebladt.com

WORKDIR /webclient
COPY . /webclient
EXPOSE 5665:5665
RUN npm install
CMD ["node", "client.js"]
