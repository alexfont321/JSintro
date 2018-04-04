var name = 'charles';
const states = 50;
var addition = 4 + 5;
var ageMy = 21
    ;

console.log(name.charCodeAt(0));

//* the if/else statement works! 

if (name.charCodeAt(0) === 76) {
    console.log('Back of the line!');
} else {
    console.log('Next!');
}


sayHello();

function sayHello(num1, num2) {
    alert('Hello World!');
}


checkAge('Charles', 21);


function checkAge(firstName, age) {
    if (age < 21) {
        console.log(`Sorry ${firstName}, you aren't old enough to view this page!`);
    }
}
checkAge('Charles', 21);
checkAge('John', 17);
checkAge('Abby', 27);
checkAge('James', 18);




var vegetables = ['carrots', 'potato', 'broccoli']


for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}



var people = [
    {
        firstName: 'winston',
        age: 45,
    },
    {
        firstName: 'dave',
        age: 13,
    },
    {
        firstName: 'terry',
        age: 32,
    },
    {
        firstName: 'yolanda',
        age: 17
    },
    {
        firstName: 'rick',
        age: 33
    },]

for (var t = 0; t < people.length; t++) {
    checkAge(people[t].firstName, people[t].age);
}

function getLength(word) {
    return word.length
}

var wordLength = getLength('yellow')




 if (wordLength %2 == 0) {
    console.log('The World is nice and even')
 } else {
     console.log('The World is an odd place')
 }

