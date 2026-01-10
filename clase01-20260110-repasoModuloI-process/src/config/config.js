import dotenv from "dotenv"
import {Command, Option} from "commander"

const program=new Command()

program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["DEV", "PROD"]).default("DEV"))

program.parse()
// const opts=program.opts()
// console.log(opts)

// const MODE="PROD"
const {mode: MODE}=program.opts()

dotenv.config({
    path: MODE=="PROD"?"./src/.env.prod":"./src/.env.dev", 
    override: true, 
    quiet: true
})

export const config={
    DATABASE:{
        MONGO_URL: process.env.MONGO_URL, 
        DB_NAME: process.env.DB_NAME, 
    }, 
    GENERAL:{
        PORT: process.env.PORT, 
        SECRET: process.env.SECRET
    }
}