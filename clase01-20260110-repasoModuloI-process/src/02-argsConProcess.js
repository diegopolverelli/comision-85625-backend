// let usuario={id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"}

// let {email, id}=usuario

// let [rutaNode, rutaScript, ...argumentos]=process.argv   // en este contexto los 3 ... son el operador rest
let [ , , ...argumentos]=process.argv   // en este contexto los 3 ... son el operador rest

// let args2=[1, 2, 3, ...argumentos]   // acá los ... son spread

// console.log(argumentos)

let indicePort=argumentos.findIndex(a=>a=="--port")

if(indicePort==-1){
    console.log(`Es necesario indicar la opción --port <PORT>`)
    process.exit()
}

const PORT=argumentos[indicePort+1]
console.log(`Server escuchando en puerto ${PORT}`)

