FROM node:10.14.1
MAINTAINER TRAN SY BAO
#USER root

# Install Node.js and other dependencies
RUN echo "Nodejs version" && node -v
RUN echo "NPM version" && npm -v

# Copy api source from api/ folder then run `npm install`
# Create an api folder within container
RUN mkdir /api
WORKDIR /api

COPY . /api

ENV MONGODB_URI=mongodb://mongo/nab-test

#Running the app
EXPOSE 8001
#CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]
