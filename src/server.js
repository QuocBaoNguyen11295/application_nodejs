import express from "express"
require("dotenv").config()
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
const app = express()
configViewEngine(app)
initWebRoutes(app)
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log("Running success with port " + PORT)
})