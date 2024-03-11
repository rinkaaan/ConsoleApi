pm2 start config.js
pm2 logs
pm2 delete all
pm2 restart --namespace media
pm2 startOrReload pm2.config.js --update-env
pm2 save
pm2 startup
pm2 monit
pm2 flush
rm -rf /root/.pm2/logs/*
