// Importando o módulo 'UserDB'.
// const usersDB = require('./UserDB');  
// const UserDB  = usersDB.UserDB;

// ou

const UserDB = require('./UserDB');
const userDB = new UserDB();

(async function main() {
    const user = {
        name: 'Teste',
        login: 'teste',
        pass: 'teste'
    };


    const user2 = {
        name: 'Neilor',
        login: 'neilor',
        pass: 'teste123'
    };

    const result = await userDB.create(user);
    await userDB.create(user2);
    console.log(result);


    console.log('users', await userDB.read(
        {name: 'Teste', login: 'teste'},
        {name: true, login: true},
    ));

    console.log('before update', await userDB.read());
    const update = userDB.update({
        name: 'Neilor Paizão',
        login: 'neilor',
        pass: 'neilor12345'
    });
    console.log(update);

    console.log('updated users', await userDB.read());
    
    const deleteResult = await userDB.delete('teste');
    console.log('delete result', deleteResult);
    console.log('after deleted', await userDB.read({}, {name: true}));



})();
