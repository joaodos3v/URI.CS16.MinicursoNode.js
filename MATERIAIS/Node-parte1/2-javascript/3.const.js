const fruta = "abacaxi";

function escopo() {
    
    //console.log(fruta);
    //fruta = 'Morango';
    // É possível declarar uma const com mesmo nome em um contexto inferior
    const fruta = "melancia";
    //fruta = "kiwi";
    if(true) {
        const fruta = "abacate";
        console.log('Fruta dentro do if', fruta);
    }
}
escopo();

const usuario = {
    nome: 'Marcílio',
    idade: 30
}
const usuario2 = {
    nome: 'Miranda',
    idade: 25
}
//usuario = usuario2;
// É possível trocar valores de um objeto const, mas não reatribuir seu valor
usuario.nome = 'Jarbas';
console.log('Usuario alterado??', usuario);
