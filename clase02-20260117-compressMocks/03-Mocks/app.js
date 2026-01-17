import {fakerES_MX as fa} from "@faker-js/faker"


console.log("color:", fa.color.rgb())
console.log("ave:", fa.animal.bird())
console.log("descripcion producto:", fa.commerce.productDescription())
console.log("precio producto:", fa.commerce.price({ min: 1000, max: 32000, dec: 2, symbol: '$' }))


for(let i=0; i<10; i++){
    console.log("color:", fa.color.rgb())
    console.log("ave:", fa.animal.bird())
    console.log("descripcion producto:", fa.commerce.productDescription())
    console.log("precio producto:", fa.commerce.price({ min: 1000, max: 32000, dec: 2, symbol: '$' }))
    console.log("_id producto", fa.database.mongodbObjectId())

    let nombre=fa.person.firstName("female")
    let apellido=fa.person.lastName()
    console.log(nombre+" "+apellido)
    console.log("email", fa.internet.email({firstName:nombre, lastName: apellido, provider:"coderhouse.com"}))
    console.log("domicilio", `${fa.location.direction()} - ${fa.location.city()}`)

    console.log("------------------\n")
}