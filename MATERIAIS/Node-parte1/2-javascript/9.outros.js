let user = {
    nome: 'Jarbas',
    idade: 29
}

let fruta = 'jaca';

let frase = `O ${user.nome} está comendo uma ${fruta}`;

console.log(frase);

// Aspas
console.log('Dizem que "aspas nunca são boas", mas em JS prefiro aspas simples');

// Remover uma propriedade de um objeto
console.log(user);
delete user.idade;
console.log(user);