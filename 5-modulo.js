const {paises,favoritos,nombre} = require("./5-moduloapp")

let paisesFinal = []

paisesFinal = paises.a.concat(paises.b,paises.c)

const favoritosFinal = []

for(let i = 0; i < favoritos.length; i++){
    favoritosFinal.push(paisesFinal[favoritos[i]])
}

console.log(favoritosFinal)