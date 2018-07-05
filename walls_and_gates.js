// TODO
var wallsAndGates = function(rooms) {
  const rows = rooms.length;
  const cols =  rooms[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
     if(rooms[i][j] === 0){
       traverse(rooms, i, j, rows, cols, 0);
     }
    }
  }
  return rooms;
};

var traverse = function(rooms, i, j, rows, cols, dist){
  if(i>=0 && i < rows && j>=0 && j < cols){
    if(rooms[i][j] !== -1 && rooms[i][j] >= dist ){
      rooms[i][j] = dist;
      traverse(rooms, i+1, j, rows, cols, dist + 1);
      traverse(rooms, i, j+1, rows, cols, dist + 1);
      traverse(rooms, i-1, j, rows, cols, dist + 1);
      traverse(rooms, i, j-1, rows, cols, dist + 1);
    }
   
  }
}

// runtime: O(n^2)


const rooms = [
  [Infinity,     -1,         0,            Infinity],
  [Infinity,    Infinity,   Infinity,            -1],
  [Infinity,    -1,         Infinity,            -1],
  [0,           -1,         Infinity,      Infinity]
];
console.log(wallsAndGates(rooms));
