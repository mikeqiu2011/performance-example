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