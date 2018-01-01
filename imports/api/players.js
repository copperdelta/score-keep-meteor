import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if (index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }
// the follwing uses the object-spread operator
// also we downloaded a number formatting library called numeral
    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };
  });
};
