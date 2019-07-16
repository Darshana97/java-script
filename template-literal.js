const name = 'Darshana';
const age = 21;
const job = 'Web Developer';
const city = 'Kandy';
let html;

//Without template strings(es5)
html = '<ul><li>Name: ' + name +'</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city +'</li></ul>';

html = '<ul>' +
       '<li>Name: ' + name +'</li>' +
       '<li>Age: ' + age +'</li>' +
       '<li>Job: ' + job +'</li>' + 
       '<li>City: ' + city +'</li>' +
       '</ul>';
 


function hello(){
    return 'achi';
}
       
//With template string (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>

`;


document.body.innerHTML = html;