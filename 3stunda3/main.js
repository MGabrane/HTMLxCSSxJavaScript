var number = 123123; //integer
var decimal = 3.14; //float
var bool = true; //bool
var name = 'MAD'; //string
var cars = [
    'ZAZ',
    'VAZ',
    'GAZ',
]; //array
var person = {
    name: 'Jhonny',
    age: 15
};

var people = [
    {
        name: 'Jhonny',
        age: 15
    },
    {
        name: 'Billy',
        age: 16
    },
    {
        name: 'Jane',
        age: 17
    },
];

// +, -, *, /, %
var smth = 1 + 1;
smth = 3;

'foo ' + 'bar'
'foo ' + 1

console.log(add(1,2));

function add(num1,  num2) {
    return num1 + num2;

}

if (true) {

} else {

};
// ==
//!=
//<
//>
//=>
//>=
// &&, and
// ||, or
// === pārbaudennetikai vērtību, bet arī tipu
//!== točna false būs

var gander = 'doge';
switch (gander) {
    case 'male' :
    console.log('Gender is: male');
    break;
    case 'female' :
    console.log('Gender is: female');
    break;
    case 'I dont know' :
    console.log('Gender is: IDK');
    break;
    default :
    console.log('Gender is: camel');
    break; 
}

var i = 0;
while(i < 10){
    i++;
    if (i == 5) {
        break;
    }

}
for(var i = 0; i < 10; i++){

}
 var cars = ['vaz', 'gaz', 'zaz'];
 for(var i in cars){
     console.log(cars[i]);
 }

var a = 0;
for(var a = 0; a <= 20; a++){
        if(a % 2 == 0){
        console.log(a);
        }
}

 document
 .querySelector('#another-button')
 .innerHTML = 'Super cool button';
 //console.log();

 function addNumber() {
     var number = document
     .querySelector('#counter')
     .innerHTML;
     document
     .querySelector('#counter')
     .innerHTML = parseInt(number) + 1;
 }

 document
 .querySelector('#another-button')
 .addEventListener('click', function(){
    document
    .querySelector('.place-for-text')
    .innerHTML = 'Some other text';
 });