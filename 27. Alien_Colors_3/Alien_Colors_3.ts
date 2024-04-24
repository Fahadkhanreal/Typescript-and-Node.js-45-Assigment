// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_Colors: string = "green";


// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is red, print a message that the player earned 15 points.
// • If the alien is yellow, print a message that the player earned 10 points.

// version 1 of the program
if(alien_Colors === "green"){
    console.log("version 1: player earned 5 points.");
}
else if(alien_Colors === "yellow"){
    console.log("player earned 10 points.");
}
else if(alien_Colors === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right colour");
}

//version 2 of the program
alien_Colors = "yellow";


if(alien_Colors === "green"){
    console.log("player earned 5 points.");
}
else if(alien_Colors === "yellow"){
    console.log("version 2: player earned 10 points.");
}
else if(alien_Colors === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right colour");
}


//version 3 of the program
alien_Colors = "red";


if(alien_Colors === "green"){
    console.log("player earned 5 points.");
}
else if(alien_Colors === "yellow"){
    console.log("player earned 10 points.");
}
else if(alien_Colors === "red"){
    console.log("version 3: player earned 15 points.");
}
else{
    console.log("please select right colour");
}

