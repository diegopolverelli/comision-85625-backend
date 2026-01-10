import fs from "fs"
console.log("process.pid:", process.pid)
console.log("cwd:", process.cwd())
console.log("momoryUsage:", process.memoryUsage())

// console.log(process.env)
console.log(process.env.PRUEBA_PORT)
console.log(process.env.PRUEBA_SECRET)

console.log(process.argv)
