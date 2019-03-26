#!/usr/bin/env bash
echo "Copy files..."
rsync -av ./config ./controllers ./models ./routers ./views ./index.js ./package.json root@128.199.157.14:/zserver/projects/server

echo "Restart project"
ssh root@128.199.157.14 "/zserver/projects/server/runserver.sh"

exit 0

# vi:ai sw=4 ts=4 tw=0 et
