#!/bin/bash
. ~/.bashrc

export NODE_ENV=production

cd /var/www/mcriss-proto
npm install
gulp build

cd /var/www/wwwroot/dist/server

echo "Starting NodeJS"
forever start app.js >> /home/ubuntu/gulplog/nodelog.log &
echo "NodeJS started"

exit 0
