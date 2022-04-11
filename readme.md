# performance tuning in Node

## real life block example
    JSON.stringify()
    JSON.parse()
    [5,1,2,3,4].sort()
    security related functions -> crypto.pbkdf2

## test multi workers
    http://localhost:3000/timer in two separate tab
    disable cache
    you can find they run in parallel with different pid, both returns in 9 seconds

## pm2
    npm i pm2
    pm2 start server.js
    pm2 list
    pm2 stop server
    pm2 start server.js -i max
    pm2 logs
    pm2 start server.js -l logs.txt -i max
    pm2 show 0
    pm2 stop 0
    pm2 monit

## pm2 zero downtime release
    keep at least one server running to serve request
    pm2 reload server
