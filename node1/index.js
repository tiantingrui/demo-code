const fs = require('fs') // 读取文件

// 理解node 的一个特点 非阻塞 IO
fs.readFile('./data/name.json', (err, data) => {
    if (!err) {
        setTimeout(() => {
            console.log('我三秒后执行')
        },3000)
        console.log(data.toString())
    }
})
console.log('我是最后才执行')