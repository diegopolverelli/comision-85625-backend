import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
process.loadEnvFile("./.env")
// logica que define el level, atada a variables de entorno o argumentos x consola
// let level=

const transporteConsola=new winston.transports.Console({
    level: "verbose", 
    format: winston.format.combine(
        winston.format.colorize(), 
        winston.format.timestamp(), 
        winston.format.simple()
    )
})

export const logger=winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "warn", 
            dirname:"./src/logs",
            filename:"error.log",
            format: winston.format.combine(
                // winston.format.colorize(), 
                winston.format.timestamp(), 
                winston.format.json()
            )
        }),
    ]
})

let mode=process.env.NODE_ENV
// console.log(mode)
if(mode!="production"){
    logger.add(transporteConsola)
}



export const middLog=(req, res, next)=>{
    req.logger=logger
    next()
}


