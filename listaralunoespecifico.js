const input = require("readline-sync").question

const fs = require('fs')

function listar (){
    // leitura do arquivo
    let leitura = fs.readFileSync('menu.csv', {encoding: "utf-8"})

    let c =  leitura.split("\n")

    let a= 2
    while( a< c.length){
    
        let d = c[a].split(";")
    
        let h = d[0]
        console.log("id:" , h)
        
        let r = d[1]
        console.log("nome:" , r)
        
        let j = d[2]
        console.log("matrícula:" , j)
        
        let p = d[3]
        console.log("idade:" , p)
        
        let o = d[4]
        console.log("nota:" , o)
            a++

            if 
      }
}
listar()