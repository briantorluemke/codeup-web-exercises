// Write a function named wait that accepts a number as a parameter, and
// returns a promise that resolves after the passed number of milliseconds.

function wait(number) {
    const promise = new Promise((resolve => {
        setTimeout(() => {
                resolve();
        }, number);
    }));
    promise.then(() => console.log(`You'll see this after ${number/1000} seconds.`));
    promise.catch(() => console.log('rejected'));
    return promise;
}

console.log(wait(2000));


const promiseRequest = fetch('https://api.github.com/users', {headers: {'Authorization' : 'token 7bb7c46087c4b85aef7c35a8d7e87a283e42256e'}});
promiseRequest
    .then((response) => response.json())
    .then(users => {
        console.log(users);
    });







function userCommits(username) {
    const githubPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization' : 'token 7bb7c46087c4b85aef7c35a8d7e87a283e42256e'}});
    githubPromise
        .then((response) => response.json())
        .then(users => {
            console.log(`${username}'s last commit was ${users[0].created_at}`);
        })
}
const name = "briantorluemke";
userCommits(name);


