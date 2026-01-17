import {fakerES as fa} from "@faker-js/faker"
export const generaCliente=()=>{
    let nombre = fa.person.firstName()
    let apellido= fa.person.lastName()
    let email= fa.internet.email({firstName: nombre, lastName: apellido})
    let dni=fa.number.int({min:10_500_000, max: 54_000_000})

    return {nombre, apellido, dni, email}
}

// cliente: {
//     nombre: String,
//     apellido: String,
//     dni: String,
//     email: String
// }
