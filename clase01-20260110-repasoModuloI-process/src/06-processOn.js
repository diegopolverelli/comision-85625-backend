process.on("SIGKILL", ()=>{
    console.log("Tareas de salida ante ctrl+C")
})

process.on("uncaughtException", ()=>{
    console.log(`Error detectado, revise logs...`)
})

process.on("exit", (code)=>{
    console.log(`Saliendo del backend con code ${code}`)
})

setTimeout(() => {
    throw new Error("error...!!!")
}, 2000);

let op=1
let i=setInterval(() => {    
    console.log(`Operación ${op}`)
    op++
    if(op>5){
        // console.log("entro", op)
        clearInterval(i)
    }
}, 1000);


