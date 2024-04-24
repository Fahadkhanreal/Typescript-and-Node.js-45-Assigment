//Write a program that creates Objects containing these items.

//Datatype of person object.
interface person {
    Age : Number,
    Name : string,
    Nationality : string,
    Student : boolean,    
}
 //person object.
let person :person = {
    Age : 24,
    Name: 'Fahad',
    Nationality: 'Pakistan',
    Student: true,
}
//print person.
console.log(person);

//Datatype of car object.
interface car {
    maker: string,
    colour: string,
    automatic : boolean,
}

// Car Object.
let car = {
    maker :'Toyota',
    colour : 'Black',
    automatic : true,
}

//print car.
console.log(car);