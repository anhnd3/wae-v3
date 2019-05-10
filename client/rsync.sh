#!/usr/bin/env bash
echo "Copy files..."
rsync -av ./components ./pages ./static ./next.config.js ./package.json ./server.js root@128.199.157.14:/zserver/projects/client

#echo "Restart project"
#ssh root@128.199.157.14 "/zserver/projects/server/runserver.sh"

exit 0

# vi:ai sw=4 ts=4 tw=0 et
