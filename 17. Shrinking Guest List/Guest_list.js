"use strict";
let Guest_list = ['Saad', 'Asim', 'Shehzaib'];
// for(let i =0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our Pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_guest = 'Asim';
let new_guest = 'Daniyal';
Guest_list[0] = new_guest;
// for(let i =0; i<Guest_list.length; i++){
//       console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our Pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_guest} is not comming to the party.`);
console.log('Good News! we find big table so we are inviting 3 more guests.');
Guest_list.unshift('sir zia khan');
Guest_list.splice(2, 0, 'Shehariyal');
Guest_list.push('Ammar Kaleem');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our Pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log('\nsorry we can not arrange big table only two peoples will be invited');
while (Guest_list.length > 2) {
    let remove_guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_guest}, You are not invited for Dinner`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
