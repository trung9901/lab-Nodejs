const http = require('http');
const express = require('express')
const app = express();
const check = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("hello")
        next();
    } else {
        console.log("you don't have permission to access")
    }
}
app.get('/api/products', check, (req, res) => {
    const products = [{ id: "123", name: "product A" }, { id: "2", name: "product B" }]
    res.json(products);
});



// const server = http.createServer((req, res) => {
//     console.log('url', req.url)
//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html><body><h1>Home Page</h1></body></html>')
//         res.end()
//     } else if (req.url === '/api/products') {
//         const products = [{ id: "123", name: "product A" }, { id: "2", name: "product B" }]
//         res.end(JSON.stringify(products))
//     } else {
//         console.log('undefind')
//     }
// })
const PORT = 3001
app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})