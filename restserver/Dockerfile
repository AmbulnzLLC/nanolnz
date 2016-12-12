FROM node:7.2.1
MAINTAINER jake@jakebladt.com

WORKDIR /restserver
COPY . /restserver
EXPOSE 9001:9001
RUN ['npm', 'install']
ENTRYPOINT ['node', 'api.js']
