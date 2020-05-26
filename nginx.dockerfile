FROM nginx:latest
MAINTAINER Tran Sy Bao

RUN rm /etc/nginx/conf.d/default.conf
# Copy nginx.conf and default.conf
# COPY ./nginx-conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-conf/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx-conf/mime.types /etc/nginx/mime.types
# COPY ./nginx-conf/default.conf /etc/nginx/sites-available/default.conf

# Create cache and logs folder for easy error tracking
RUN mkdir /cache
RUN mkdir /logs

# Start Nginx
RUN echo "Starting nginx..."
CMD ["nginx", "-g", "daemon off;"]
