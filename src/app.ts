import express from 'express';
import path from 'path';
import router from './router';
import routerAdmin from "./routerAdmin"
/** 1-ENTRANCE **/
const app = express();
// console.log("__dirname:",__dirname);
app.use(express.static(path.join(__dirname, 'public'))); // Middleware DP: Folder Client (app.use)
app.use(express.urlencoded({extended: true})); // Middleware Traditional API
app.use(express.json()); // Middleware DP: Rest API

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', "ejsnp")
/** 4-ROUTERS **/
app.use('/admin', routerAdmin); //SSR: EJS
app.use('/', router);       // Midlleware DP used, SPA: REACT

export default app // module.exports = app 