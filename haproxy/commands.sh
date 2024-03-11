haproxy -f ./haproxy.cfg

sudo certbot -d media-api.lincolnnguyen.me --manual --preferred-challenges dns certonly

sudo cat \
/etc/letsencrypt/live/media-api.lincolnnguyen.me/fullchain.pem \
/etc/letsencrypt/live/media-api.lincolnnguyen.me/privkey.pem \
> ./haproxy.pem
