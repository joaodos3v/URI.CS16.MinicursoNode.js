console.log(0);
console.log(undefined);
console.log("");
console.log(null);

console.info('-------');
console.log(!0);
console.log(!undefined);
console.log(!"");
console.log(!null);

console.info('-------');
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


let login = '';
let pass = 'sdfsdf';

console.log('\n\nExibindo para teste', login, pass);
if( !login || !pass )
    console.log('if');
else 
    console.log('else');