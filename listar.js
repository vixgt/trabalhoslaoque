const fs = require('fs')

function menu(){
    let leitura = fs.readFileSync('menu.csv', {encoding: "utf-8"})

    console.log(leitura)

    let b = ("2;victor;2222;16;100")
  let c =  leitura.split("\n")
  console.log(c)

//   let c = ["2","victor","2222","16", "100"]
  let a = 2
  while( a< c.length){
    console.log(c[a])

    let d = c[a].split(";")
console.log(d)

let h = d[0]
console.log(h)

let r = d[1]
console.log(r)

let j = d[2]
console.log(j)

let p = d[3]
console.log(p)

let o = d[4]
console.log(o)
    a++
  }


}

menu()