const express = require("express")

const app = express()

app.listen(3000)

app.get("/", (req, res) => {
    res.contentType("text/html")
    res.sendFile("views/index.html", {root: __dirname})
    //res.send("<p>home page</p>")
})

app.get("/about", (req, res) => {
    res.contentType("text/html")
    res.sendFile("views/about.html", {root: __dirname})
})

app.get("/about-us", (req,res) => {
    res.redirect("/about")
})