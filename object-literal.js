const person = {
    firstName: 'Darshana',
    lastName: 'Senevirathna',
    age: 22,
    email: 'darshanase@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Kandy',
        state: 'Galagedara'
    },

    getBirthYear: function(){
        return 2019 - this.age;
    }

}

let val;

val = person;

//Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [

    {name: 'Achi', age: 20},
    {name: 'Brayan', age: 21},
    {name: 'Kevin', age: 22}

];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}