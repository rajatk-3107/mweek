var ab = st => {
    if(st.indexOf('+')!=-1){
        console.log("Add")
    }else if(st.indexOf('-')!=-1){
        console.log("Subtract")
    }else if(st.indexOf('*')!=-1){
        console.log("Multiply")
    }else if(st.indexOf('/')!=-1){
        console.log("Divide")
    }else{
        console.log('err')
    }
}