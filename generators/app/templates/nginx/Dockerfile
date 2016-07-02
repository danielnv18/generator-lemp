FROM nginx:stable

MAINTAINER Daniel Noyola <danielnv18@gmail.com>

COPY nginx.conf /etc/nginx/nginx.conf
COPY <%= projectType %>.conf /etc/nginx/conf.d/default.conf

RUN echo "upstream php-upstream { server php:9000; }" > /etc/nginx/conf.d/upstream.conf

CMD ["nginx"]

EXPOSE 80
EXPOSE 443