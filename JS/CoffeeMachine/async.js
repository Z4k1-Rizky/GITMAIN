/*(console.log("Proses pertama ");
setTimeout(() => {
    console.log("Proses kedua");
    }, 2000)

console.log("Proses ketiga");
*/

// Pola Callback
/*function getUsers(callback){
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
        callback(users);
    }, 3000);
}

//getUsers((user) => {
//    console.log(user);
//});

function usersCallback(users2) {
    console.log(users2);
}

getUsers(usersCallback);
*/

/*function getUsers(isOffline, callback) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null)
            return;
        }

        callback(null, users);
    }, 3000);
}

function usersCallback(error, data) {
    if (error) {
        console.log('process failed : ', error.message);
        return;
    }

    console.log('process success: ',data);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);
*/

// Pola Promise
function getUsers (isOffline) {
    // return a Promise object
    return new Promise((resolve, reject) => {
        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('Cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);

    });
}

getUsers(false)
    .then(users2 => console.log(users2))
    .catch(err => console.log(err.message));