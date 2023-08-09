const input = require("readline-sync").question

const aluno = require('fs')

function excluir(){
    let leitura = aluno.readFileSync('menu.csv', {encoding: "utf-8"})
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
        
            c.splice(a, 1)
            console.log(c )
            }
            a++
      }

      if (l == 0){
        console.log("aluno não encontrado")
      }
      aluno.writeFileSync("menu.csv", c.join("\n"), {flag: "w"})
}
excluir()
