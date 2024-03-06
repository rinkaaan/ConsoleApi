# local haproxy
docker run --name my-haproxy -p 8080:80 -v /Volumes/workplace/Console/ConsoleApi/poc/local_haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg:ro haproxy:latest
haproxy -f ./local_haproxy.cfg
