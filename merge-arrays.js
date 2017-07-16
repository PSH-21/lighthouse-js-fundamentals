//variation 2
function merge(a,b) {
  var c = [];
  var x = 0
  var y = 0

  if (!a.length === true && !b.length === true) {
    console.log([]);
  }
  else if ( !a.length === true) {
    console.log(b);
  }
  else if( !b.length === true) { // !Array.isArray(array)
    console.log(a);
  } else {
      var c = [];
      var x = 0
      var y = 0
      while (c.length < (a.length + b.length +1)) {
        if (a[x] <= b[y]) {
          c.push(a[x]);
          x++; }
        else {
          c.push(b[y]);
          if (y === b.length-1) {
            while (x < a.length) {
              c.push(a[x]);
              x++;}
            break;
          } else
            y++;
        }
    }
  }
  return c;
}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);