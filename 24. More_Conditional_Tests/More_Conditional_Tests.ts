

// Equality and equality Test 1
console.log("Equalityty test with strings: ", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Equalityty test with strings: ", ("Apple" as string) != "Orange");

// Tests using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality
console.log("Equalityty test with numbers: ", 26 === 26 );
// Numerical tests involving inequality
console.log("Inequality test with numbers: ", (26 as number) != 35) ;

//greater than 
console.log("Greater than test: " , 10 > 5); 
//less than
console.log("less than test: " , 5 < 10); 


 //greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//less than or equal to
console.log("less than or equal to test: ", 5 <= 10)

//Tests using "and" Operator
console.log("And operator test: ", 5===5 && 10 > 5);
//Tests using "or" operators
console.log("or operator test: ", 5===5 || false);


//Test whether an item is in a array
const fruits :string[] = ['Nashpati','Banana','Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));
//Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', !fruits.includes('Apple'));