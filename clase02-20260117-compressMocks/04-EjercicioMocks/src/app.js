import express from 'express';
import { generaCliente } from './mocks/datosMocks.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/clientes", (req, res)=>{
    let respuesta
    let {cant}=req.query

    // validaciones sobre cant... que sea numero, >0, etc...
    if(!cant){
        respuesta=generaCliente()
    }else{
        respuesta=[]
        for(let i=0; i<cant; i++){
            respuesta.push(generaCliente())
        }
    }


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({respuesta});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
