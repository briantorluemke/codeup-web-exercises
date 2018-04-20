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




function userCommits(username) {
    const githubPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization' : 'YOUR_TOKEN_HERE'}});
    githubPromise
        .then((response) => response.json())
        .then(users => {
            $(".here").text(`${username}'s last commit was ${users[0].created_at}`);
        });
}

$("button").click(function () {
   const value = $("input").val();
   userCommits(value);
});





