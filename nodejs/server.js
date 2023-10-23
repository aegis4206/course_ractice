const express = require('express');
const cors = require('cors');
const http = require('http')
const app = express();
const server = http.createServer(app)
const port = 8001;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

const orderListRoutes = require('./src/list/routes');
const pool = require('./db');
const queries = require("./src/list/queries")


app.use(express.json());

const corsOptions={
    origin:'http://aegis4206.tplinkdns.com:8000',
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// app.get("/",(req,res)=>{
//     res.send("Hello World!")
// })


wss.on('connection', (ws) => {
    console.log('Client connected');

    const query = pool.query('LISTEN test_changes');
    pool.on('notification', (msg) => {
        // 接收 PostgreSQL 的通知，發送給 WebSocket 客戶端
        pool.query(queries.getOrderList, (error, results) => {
            // console.log(results.rows)
            if (error) throw error;
            ws.send(JSON.stringify(results.rows));
        })

    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

app.use("/api/orderList", orderListRoutes);

server.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});

module.exports = {
    wss,
}