import { Router } from 'express';
export const router=Router()
import HeroesManager from '../manager/HeroesManager.js'
import { CustomError } from '../utils/CustomError.js';
import { TIPOS_ERROR } from '../utils/tiposError.js';

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    if(req.query.error){
        throw new Error("error de prueba")
    }

    if(req.query.error2){
        CustomError.generateError("TestError", "Error de pruebas", "Error para probar Custom Error", TIPOS_ERROR.ARGUMENTOS_INVALIDOS, "get-heroes / routerHeroes")
    }

    let heroes=heroesManager.getHeroes()

    res.status(200).json({heroes})
})


router.get('/informe',async(req, res, next)=>{

    try {
        if(req.query.error){
            throw new Error("error de prueba")
        }
    
        if(req.query.error2){
            CustomError.generateError("TestError", "Error de pruebas", "Error para probar Custom Error", TIPOS_ERROR.ARGUMENTOS_INVALIDOS, "get-heroes / routerHeroes")
        }
    
        let heroes=heroesManager.getHeroes()
    
        res.status(200).json({heroes})
    } catch (error) {
        next(error)
    }
})


router.post('/',(req,res)=>{
    let {name}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete al menos el name`})
    }

    let propiedadesValidas=['name','alias','publisher','powers','team']
    let propiedadesHeroeNuevo=Object.keys(req.body)
    let valido=propiedadesHeroeNuevo.every(prop=>propiedadesValidas.includes(prop))

    if(!valido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ha ingresado propiedades invalidas`, detalle:propiedadesValidas})
    }

    let heroes=heroesManager.getHeroes()
    let existe=heroes.find(heroe=>heroe.name.toLowerCase()===name.toLowerCase())
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El heroe ${name} ya existe en DB`})
    }

    let id=1
    if(heroes.length>0){
        id=heroes[heroes.length-1].id+1
    }

    let heroeNuevo=heroesManager.createHeroe({id, ...req.body})

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:heroeNuevo});

})