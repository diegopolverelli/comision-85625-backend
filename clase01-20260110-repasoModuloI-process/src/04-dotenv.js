// node --env-file ./src/.env ./src/04-dotenv.js
// process.loadEnvFile("./src/.env")
import dotenv from "dotenv"

dotenv.config({
    path:"./src/.env", 
    override: true,
    quiet: true
})

// console.log(process.env.PORT)
// console.log(process.env.SECRET)
// console.log(process.env.MONGO_URL)
// console.log(process.env.PRUEBA_PORT)
// console.log(process.env.PRUEBA_SECRET)

import express from 'express';
const PORT=process.env.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

