#!/bin/bash
[ ! -d ./node_modules ] && npm install
chmod +x wait-for-it.sh
docker-compose up