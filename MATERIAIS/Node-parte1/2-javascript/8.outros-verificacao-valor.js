console.log(!!0);
console.log(!!undefined);
console.log(!!"");
console.log(!!null);

function usuarioTemNome(user) {
    //return user != undefined && user != null && user.nome != undefined && user.nome != '' && user.nome != null;
    return !!(user && user.nome);
}
let user = {
    nome: 'Manoel'
}

console.log('Tem nome?', usuarioTemNome(user));
console.log('Tem nome?', usuarioTemNome());