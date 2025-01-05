import express from "express"
import 'dotenv/config'
import sql from "mssql"
import cookieParser from "cookie-parser";

import configBodyParser from "./config/configBodyParser";
import configStaticFile from "./config/configStaticFile";
import initRouterWeb from "./router";
import connectDB from "./config/configSQLserver";
import configCors from "./config/configCors";
import configTemplateEngine from "./config/configTemplateEngine";
import upload from "./config/configUploadFile"

const app = express()

connectDB(sql)
app.use(cookieParser())

app.use('/uploads', express.static('uploads'));

configCors(app)
configBodyParser(app)
configStaticFile(app)
initRouterWeb(app)
configTemplateEngine(app)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});