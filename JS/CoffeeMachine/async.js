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
/*function getUsers (isOffline) {
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
*/

// callback-based to promise-based
/*const { promisify } = require('util');

function getUsers(isOffline, callback) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null)
            return;
        }

        callback(null, users);
    }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
 
getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));


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
/*function getUsers (isOffline) {
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
*/

// callback-based to promise-based
/*const { promisify } = require('util');

function getUsers(isOffline, callback) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null)
            return;
        }

        callback(null, users);
    }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));

getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
*/

function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error('Not enough money to withdraw'));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error('not enough money to buy ticket'));
      }

      resolve('ticket-1');
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('no ticket'));
      }

      resolve('enjoy the movie');
    }, 1000);
  });
}

function watchMovie() {
  withDrawMoney(10)
    .then((money) => {
      return buyCinemaTicket(money);
    })
    .then((ticket) => {
      return goInsideCinema(ticket);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

watchMovie();

/*//Promise static method

//Promise.all
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));
//[1,2,3] setelah 3 detik

//Promise.race
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value)); // 1 setelah 1 detik

//Promise.allSettled
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
 .then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik

//Promise.any
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected

//Async and Await
rang, bagaimana jika kita memanfaatkan async dan await dalam menangani proses asynchronous-nya? Kodenya akan tampak seperti ini.

async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

watchMovie();
*/