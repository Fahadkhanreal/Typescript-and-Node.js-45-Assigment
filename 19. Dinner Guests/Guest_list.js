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
// console.log(`Mr. ${absent_guest} is not comming to the party.`);
// console.log('Good News! we find big table so we are inviting 3 more guests.')
// array ma 3 guest add kiya hai.
Guest_list.unshift('sir zia khan');
Guest_list.splice(2, 0, 'Shehariyal');
Guest_list.push('Ammar Kaleem');
// Yaha per mena 6 guest ka array ko print karvaya hai.
// for(let i =0; i<Guest_list.length; i++){
//    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our Pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// Sorry message to guest for not inviting
// console.log('\nsorry we can not arrange big table only two peoples will be invited') ;
// Yaha per mena guest remove kiya hai.
while (Guest_list.length > 2) {
    let remove_guest = Guest_list.pop();
    //   console.log(`Sorry Mr. ${remove_guest}, You are not invited for Dinner`);
}
// Hamara bache howe 2 invited guest.
// for(let i =0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
//  }
// Mena sare guest Array sa remove kardiya.
Guest_list.splice(0, 2);
console.log(Guest_list);
//Exercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_list.length}`);
