const http = require("http");
const fs = require("fs")
const qs = require('querystring')

const port = 8001;
const ip = '127.0.0.1'
const address = `http://${ip}:${port}`

const sendResponse = (fileName, statusCode, reponse) => {
    fs.readFile(`./${fileName}`, (error, data) => {
        if (error) {
            reponse.statusCode = 500
            reponse.setHeader("Content-Type", "text/plain")
            reponse.end(error)
        } else {
            reponse.statusCode = statusCode
            reponse.setHeader("Content-Type", "text/html")
            reponse.end(data)
        }
    });
}

const server = http.createServer((request, reponse) => {
    // console.log("request",request)
    // console.log("reponse",reponse)
    console.log(request.url)
    let { method, url } = request

    if (method === "GET") {
        const requestUrl = new URL(url, address)
        console.log(requestUrl)
        console.log(requestUrl.searchParams.get("lang"))
        url = requestUrl.pathname
        const lang = requestUrl.searchParams.get("lang")

        const langSelector = lang && lang === "zh" ? "_zh" : ''

        if (url === "/") {
            sendResponse(`index${langSelector}.html`, 200, reponse)
        } else if (url === "/about.html") {
            sendResponse("about.html", 200, reponse)
        } else if (url === "/login.html") {
            sendResponse("login.html", 200, reponse)
        } else if (url === "/login_success.html") {
            sendResponse("login_success.html", 200, reponse)
        } else if (url === "/login_fail.html") {
            sendResponse("login_fail.html", 200, reponse)
        } else {
            sendResponse("404.html", 404, reponse)

        }

    } else {
        if (url === "/process_login") {
            let body = [];
            request.on("data", (chuck) => {
                body.push(chuck)
            })
            request.on("end", () => {
                body = Buffer.concat(body).toString()
                body = qs.parse(body)
                console.log(body)
                const { username, password } = body
                if (username === "123" && password === "123") {
                    //頁面跳轉301
                    reponse.statusCode = 301
                    reponse.setHeader("Location", "/login_success.html")
                } else {
                    //頁面跳轉301
                    reponse.statusCode = 301
                    reponse.setHeader("Location", "/login_fail.html")
                }
                reponse.end();
            })
        }
    }

    // reponse.end("hello js server")
});



server.listen(port, ip, () => {
    console.log(`Server is running at ${address}`)
});