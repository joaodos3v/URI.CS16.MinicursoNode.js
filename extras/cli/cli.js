const commander = require('commander');
const UserDB = require('../../exercicio-1/UserDB');

(async () => {
    commander.version('1.0.0')
        .option('-c, --create', 'Create an user')
        .option('-u, --update', 'Update an user')
        .option('-r, --read [value', 'Get an user by login')
        .option('-d, --delete [value]', 'Delete an user')
        
        .option('-l, --login [value]', 'User login')
        .option('-p, --pass [value]', 'User password')
        .option('-n, --name [value]', 'User name')

        .parse(process.argv);




        console.log(commander);


        if(commander.create) {
            const newUser = {
                login: commander.login,
                password: commander.password,
                name: commander.name
            }

            const result = await UserDB.create(newUser);
            console.log(result);
        }

        
        if(commander.update) {}
        if(commander.read) {}
        if(commander.delete) {}

})();