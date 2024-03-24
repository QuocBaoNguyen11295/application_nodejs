import express from "express"
/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    app.use(express.static("./src/public"))//Configure where js, css, html we can access
    app.set("view engine","ejs")//What technology we use to write html
    app.set("views","./src/views")//Where do we store files
}

export default configViewEngine