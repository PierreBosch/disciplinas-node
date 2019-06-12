const express = require("express")
const cors = require("cors")
const nunjucks = require("nunjucks")
const path = require("path")

class App {
    constructor() {
        this.express = express()
        this.isDev = process.env.NODE_ENV = 'production';

        this.views()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(express.urlencoded({extended: false}))
    }

    views(){
        nunjucks.configure(path.resolve(__dirname, "app", "views" ), {
            express: this.express,
            watch: this.isDev,
            autoescape: true
        })
        this.express.use(express.static(path.resolve(__dirname, "public")))
        this.express.set('view engine', 'njk')
    }

    routes(){
        this.express.use(require('./routes'))
    } 

    
}

module.exports = new App().express