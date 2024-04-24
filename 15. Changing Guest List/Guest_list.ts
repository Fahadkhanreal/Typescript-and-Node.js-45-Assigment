

let Guest_list :string[] = ['Saad','Asim','Shehzaib'];

for(let i =0; i<Guest_list.length; i++){
  
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our Pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_guest :string = 'Asim' ;

let new_guest :string = 'Daniyal' ;

Guest_list[0] = new_guest ;

for(let i =0; i<Guest_list.length; i++){
  
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our Pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`Mr. ${absent_guest} is not comming to the party.`)