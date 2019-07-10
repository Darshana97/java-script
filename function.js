//FUNCTION DECLARATIONS

function greet(firstName = 'darshana', lastName = 'senevirathna'){

    // if(typeof firstName === 'undefined'){firstName = 'Brayan'}
    // if(typeof lastName === 'undefined'){lastName = 'Senevirathna'}

    //console.log('Hello');
    return 'hello ' + firstName + ' ' + lastName ;
}

//console.log(greet('achi', 'senevirathna')); 

//FUNCTON EXPRESSIONS

const square = function( x =3 ){
    //x=4;
    return x*x;
};

//console.log(square());

//IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IFFE Ran...');
// })();

// (function(name){
//     console.log('hello ' + name);
// })('Darshana');

const todo = {
    add: function(){
        console.log('Add todo...');
    },

    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();
