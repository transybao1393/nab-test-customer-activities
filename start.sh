#!/bin/bash

# Checking docker & folder nab-test
if [ -x "$(command -v docker)" && ! -d "/nab-test" ]
then
    git clone https://github.com/transybao1393/nab-test.git
    cd nab-test
    npm install
    # Creating network
    docker network create bao_network
    docker-compose up
    echo "Running process. Please wait..."
else
    echo "Please first install docker using Homebrew (if you are using Mac)"
    echo "Following steps will be list at: https://codingbee.net/docker/install-docker-for-mac-using-homebrew"
fi


