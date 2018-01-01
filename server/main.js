import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

// Call-back function to ensure Meteor app is ready before running
Meteor.startup(() => {

});

// object spread operator

// // Object Propeprty Shorthand
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
//
//  let yearBuilt = 1995;
//
//  let newHouse = {
//    ...house,
//    yearBuilt, // (this can also be written as yearBuilt: yearBuilt,)
//    bedrooms: 3,
//    flooring: 'Carpet'
//  };
//
//  console.log(newHouse);
