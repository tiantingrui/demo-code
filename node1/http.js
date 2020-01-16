const http = require('http') // 系统的模块

let server = http.createServer((request, response) => {
    response.write('hello world!')
    response.end()
})

server.listen(3000)