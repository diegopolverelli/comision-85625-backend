import express from 'express';
import { router as pruebasRouter } from './routes/pruebaRouter.js';
import cluster from "cluster"

if(cluster.isPrimary){
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}else{
    const PORT=3000;

    const app=express();
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.use("/api/pruebas", pruebasRouter)
    
    let visitas=0
    app.get('/',(req,res)=>{
        visitas++
        res.setHeader('Content-Type','text/plain');
        res.status(200).send(`Visitas: ${visitas}`);
    })
    
    const server=app.listen(PORT,()=>{
        console.log(`Server escuchando en puerto ${PORT} - process id: ${process.pid}`);
    });
}

