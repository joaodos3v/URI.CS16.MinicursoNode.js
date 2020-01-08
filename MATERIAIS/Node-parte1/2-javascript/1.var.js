var fruta = 'uva';
console.log('1. ', fruta);
function escopo() {
    console.log('2. ', fruta);
    
    var fruta = 'melão';
    console.log('3. ', fruta);

    for (var indice = 1; indice <= 5; indice++) {
        var fruta = 'pera' + indice;
        console.log('Indice dentro do for', indice);
    }
    console.log('Indice fora do for', indice);
    console.log('4. ', fruta);
    
}
escopo();
console.log('5. ', fruta);