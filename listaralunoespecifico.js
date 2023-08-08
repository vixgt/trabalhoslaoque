const input = require("readline-sync").question

const fs = require('fs')

function listar (){
    // leitura do arquivo
    let leitura = fs.readFileSync('menu.csv', {encoding: "utf-8"})

    var id = input("")

    let c =  leitura.split("\n")

    let a= 2

    let l =0
    while( a< c.length){
    
        let d = c[a].split(";")
    
        let h = d[0]
        
        let r = d[1]
        
        let j = d[2]
    
        let p = d[3]
            
        let o = d[4]
        
        

            if (id == h){
                l = 1

                console.log("id:" , h)
                console.log("nome:" , r)
                console.log("matrícula:" , j)
                console.log("idade:" , p)
                console.log("nota:" , o)
        
            }
            a++
      }

      if (l == 0){
        console.log("id invalido")
      }
}
listar()