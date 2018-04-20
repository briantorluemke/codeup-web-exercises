const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


// Use .filter to create an array of user objects where
// each user object has at least 3 languages in the languages array.

const threeLang = users.filter(function (user) {
    return (user.languages.length >= 3);
});

console.log(threeLang);


// Use .map to create an array of strings where each
// element is a user's email address

const emails = users.map(function(user) {
    return (user.email.toString());
});

console.log(emails);


// Use .reduce to transform the array into an object where the object's keys
// are ids and the values are objects that represent each user

const userId = users.reduce(function(id, user) {
    id[user.id] = user.name;
    return id;
}, {});

console.log(userId);