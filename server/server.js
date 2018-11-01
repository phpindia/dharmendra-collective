import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import firebase from "firebase";
import { path as AppRoot} from "app-root-path";
import path from "path";

import dbConfig from "../config/Database.js";
import Api from "./routes/Api.js";

const app  = express();
const db = firebase.initializeApp(dbConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use("/api", Api);
app.use(express.static(path.join(AppRoot, "build")));
app.use("*", (req, res) => {
    return res.sendFile(path.join(AppRoot, "build/index.html"));
});

module.exports = app;