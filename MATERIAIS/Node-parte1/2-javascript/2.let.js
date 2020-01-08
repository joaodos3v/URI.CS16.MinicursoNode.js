let fruta = 'uva';
console.log('1. ', fruta);
function escopo() {
    // Caso uma variável não for declarada em um contexto,
    // seu valor será igual ao contexto pai
    
    //console.log('2. ', fruta);
    let fruta = 'melão';
    console.log('3. ', fruta);
    if(true) {
        let fruta = 'pera';
        console.log('4. ', fruta);
    }
    console.log('5. ', fruta);
    
}
escopo();
console.log('6. ', fruta);