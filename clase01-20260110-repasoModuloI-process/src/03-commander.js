import {Command, Option} from "commander"

const program=new Command()

program.option("-p, --port <PORT>", "Puerto donde escuchará el server", 3000)
program.option("-u, --user <USER>", "Usuario que ejecuta el script")
program.option("-d, --debug", "Activar modo DEBUG")
program.option("-c, --colores [colores...]", "Array de colores")
program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["DEV", "TEST", "PROD"]).default("PROD"))

program.parse()
const opts=program.opts()

console.log(opts)