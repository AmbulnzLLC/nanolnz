FROM nginx:1.11
MAINTAINER Jake Bladt <jake@jakebladt.com>
# FOR PRODUCTION: RETRIEVE https pems from S3
COPY ./cacert.pem  /etc/ssl/cacert.pem
COPY ./privkey.pem /etc/ssl/privkey.pem
COPY ./nginx.conf  /etc/nginx/nginx.conf
