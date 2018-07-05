/** 
 * You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.
Write a function to determine if the starting player can guarantee a win.

For example, given s = "++++", return true. The starting player can guarantee a win by flipping the middle "++" to become "+--+".
 * 
*/

// This problem is solved by backtracking.
var canWin = function(s) {
    if(!s) return false;
    return determine(s.split(''));

}
 // player 1 can guarantee win if the move player 1 made can lead to player 2 no win of winning
var determine = function(arr){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] === arr[i+1] && arr[i]=== '+'){
            arr[i] = '-';
            arr[i+1] = '-';

            const win = determine(arr);

            arr[i] = '+';
            arr[i+1] = '+';
            
            //if there is a flip which makes the other player lose, the first player wins
            if(!win) return true;

        }
        
    }
    return false;
}
// runtime: O(n ^ n) The reason is each recursion takes O(n) and there are totally n recursions.