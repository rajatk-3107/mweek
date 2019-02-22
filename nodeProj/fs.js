var fs = require('fs')

fs.writeFile('abc.txt', "gydgfgud", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File created")
    }
})
fs.appendFile('abc.txt', "qqqqqq", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File appended")
    }
})
