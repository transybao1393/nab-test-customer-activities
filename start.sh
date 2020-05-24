#!/bin/bash

# Checking docker
if [ -x "$(command -v docker)" ]; then
    # Creating network
    docker network create bao_network
    docker-compose up
    echo "Running process. Please wait..."
else
    echo "Please first install docker using Homebrew (if you are using Mac)"
    echo "Following steps will be list at: https://codingbee.net/docker/install-docker-for-mac-using-homebrew"
fi


