import __dirname, { logger, middLog } from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';

const PORT=3000;

const app=express();

app.use(middLog)

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)
app.use('/api/heroes', heroesRouter)

app.get("/testLogger", (req, res)=>{

    req.logger.silly("silly message")
    req.logger.debug("debug message")
    req.logger.verbose("verbose message")
    req.logger.http("http message")
    req.logger.info("info message")
    req.logger.warn("warning message")
    req.logger.log("warn", "warning message")
    req.logger.error("error message")
    req.logger.log("error", "error message")

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Logger ok, consulte consola"});
})

const server=app.listen(PORT,()=>{
    // console.log(`Server escuchando en puerto ${PORT}`);
    logger.info(`Server escuchando en puerto ${PORT}`)
});
