// ./index.js

// 1. IMPORTACIONES

const express		= require("express")
const app			= express()

const hbs			= require("hbs")

const connectDB			= require("./config/db")
const sessionManager 	= require("./config/session")


// 2. MIDDLEWARES
require("dotenv").config()

sessionManager(app)

connectDB()

app.use(express.static("public"))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.use(express.urlencoded({ extended: true }))


// 3. RUTEO
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))



// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))
