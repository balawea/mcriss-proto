#!/bin/bash
. ~/.bashrc

export NODE_ENV=production

cd /var/www/wwwroot/mcriss-proto
npm install
gulp build

cd /var/www/wwwroot/dist/

cd /var/www/wwwroot/
echo "Starting NodeJS"
forever start app.js >> /home/ubuntu/gulplog/nodelog.log &
echo "NodeJS started"

exit 0
