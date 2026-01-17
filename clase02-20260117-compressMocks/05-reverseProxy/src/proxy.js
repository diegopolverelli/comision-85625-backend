// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const targets = [
    'http://localhost:3001/',
    'http://localhost:3002/',
    'http://localhost:3003/'
]

let contador = 0

const cambio = (req) => {
    console.log(req.headers, req.query)
    if (req.query.server == "2") return 1
    contador++
    if (contador == 1 || contador == 2) {
        return contador
    } else {
        contador = 0
        return 0
    }

}


app.get("/config", (req, res) => {
    res.send("Bienvenido al server Proxy...!!!")
})

app.use('/',
    createProxyMiddleware({
        router: req => targets[cambio(req)], // redirecciona cada vez que entra una req... de manera dinámica
        // target: targets[0], // siempre redirecciona a un site, fijo desde el inicio
        // router: req=>targets[0], // router de esta forma (retornando siempre la misma url), equivale a target
        changeOrigin: true, // needed for virtual hosted sites
    })
)




app.listen(3000, () => console.log("Server online!"));