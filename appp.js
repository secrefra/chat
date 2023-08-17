const appp = require('http')
const port = 3000// Choose a port number

const server = http.createServer(function(req, res){
    res.write('hello node')
    res.end()
})

server.listen(port, function(error){
    if (error){
        console.log('something went wrong', error)
    }
    else{
        console.log('server is listening on prt' + port)
    }
})

// Start the server
appp.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});