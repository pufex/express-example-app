const express = require("express")
const morgan = require("morgan")

const app = express()

app.listen(3000)

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.contentType("text/html")
    res.sendFile("views/index.html", {root: __dirname})
    //res.send("<p>home page</p>")
})

app.get("/about", (req, res) => {
    res.contentType("text/html")
    res.sendFile("views/about.html", {root: __dirname})
})

//redirect
app.get("/about-us", (req,res) => {
    res.redirect("/about")
})


//404
app.use((req, res) => {
    res.status(404)
    res.sendFile("views/404.html", {root: __dirname})
})