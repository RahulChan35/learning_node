const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Node Page')
  res.end()
})

server.listen(5000)
