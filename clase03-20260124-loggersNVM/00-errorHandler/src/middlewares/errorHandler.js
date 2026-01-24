import fs from "fs"
let errores
if(fs.existsSync("./error.log")){
    errores=JSON.parse(fs.readFileSync("./error.log", "utf-8"))
}else{
    errores=[]
}

export const errorHandler=(error, req, res, next)=>{
    if(error.custom){
        errores.push({
            fecha: error.date,
            user: error.user,
            host: error.host,
            module: error.module,
            error: error.message, 
            detalle: error.stack
        })

        res.status(error.code).send("INTERNAL SERVER ERROR")
    }else{
        errores.push({
            fecha: `${new Date().toUTCString()}`,
            error: error.message, 
            detalle: error.stack
        })
        res.status(500).send("INTERNAL SERVER ERROR")
    }

    fs.writeFileSync("./error.log", JSON.stringify(errores, null, 5))

}