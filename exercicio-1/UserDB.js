class UserDB {

    constructor() {
        this._users = [];
    }

    _isValidUser(user) {
        return !!(user && user.login && user.pass);
    }



    create(user) {
        return new Promise((resolve, reject) => {
            const userNames = this.read({login: user.login});
            if (userNames.length)
                return reject(new Error('Este login já foi utilizado por outro usuário. Tente outro'));

            if (!this._isValidUser(user))
                return reject(new Error('É necessário enviar o login (login) e senha (pass) do usuário'));

            this._users.push(user);
            return resolve({ success: true });
        });
    }



    // e.g.: {nome: 'Neilor', login: 'neilor'}
    read(query, fields) {
        return new Promise((resolve, reject) => {
            let result = this._users;
            if (query) {
                const attrs = Object.keys(query);
                console.log('atributos', attrs);
                result = this._users.filter(user => {
                    let match = true;
                    for (const attr of attrs) {
                        if (user[attr] !== query[attr]) {
                            match = false;
                            break;
                        }
                    }

                    return match;
                });
            }

            if(fields) {
                console.log("campos para serem filtrados", fields);
                let attrs = Object.keys(fields);
                result = result.map(user => {
                    const newUser = {};
                    for (const attr of attrs) {
                        newUser[attr] = user[attr];
                    }
                    return newUser;
                });
            }

            resolve(result);
        });
    }



    update(user) {
        return new Promise((resolve, reject) => {
            if (!this._isValidUser(user))
                reject(new Error('Você precisa enviar o login do usuário!'));

            let found = false;
            for (const localUser of this._users) {
                if(user.login == localUser.login) {
                    Object.assign(localUser, user);
                    resolve({success: true});
                    found = true;
                    break;
                }
            }

            if(!found)
                resolve({success: false, error: 'User not found'});
        });
    }

    

    delete(login) {
        return new Promise((resolve, reject) => {
            let found = false;
            for(let index in this._users) {
                let user = this._users[index];
                if(user.login == login) {
                    this._users.splice(index, 1);
                    resolve({success: true});
                    found = true;
                    break;
                }
            }

            if(!found)
                resolve({success: false, message: 'User not found'});;
        })
    }

}



// Exportando a classe 'UserDB' para que outros arquivos possam instanciar objetivos a partir dela.
module.exports = UserDB