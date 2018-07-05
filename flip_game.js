/** 
 * You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to compute all possible states of the string after one valid move.
*/

/**
 * 
 * 
 * @param {string} s 
 * @returns 
 */
var generatePossibleNextMoves = function(s) {
    if(!s) return [];
    const result = [];
    const input = s.split('');
    for (let i = 0; i < input.length - 1; i++) {
        if(input[i] === input[i+1] && input[i] === '+'){
            input[i] = '-';
            input[i+1] = '-';
            result.push(input.join(''));
            input[i] = '+';
            input[i+1] = '+';
        }
    }
    return result;
}
// runtime: O(n)

console.log(generatePossibleNextMoves('++++++'));