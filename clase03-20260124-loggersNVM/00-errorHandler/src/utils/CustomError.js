import os from "os"

export class CustomError{
    static generateError(tipoError, message, detalle, codigo, modulo){
        // throw new Error("error prueba")
        let error=new Error(message, {cause: detalle})
        error.code=codigo
        error.custom=true
        error.name=tipoError
        error.module=modulo
        error.date=new Date()
        error.user=os.userInfo().username
        error.host=os.hostname()

        throw error
    }
}