function loopyLighthouse(a,b,c) {
  for (var i = a[0]; i < a[1] + 1; i++)
    if (i % b[0] === 0 && i % b[1] === 0) {
      console.log(c[0] + c[1]);
    } else if ( i % b[0] === 0) {
      console.log(c[0]);
    } else if ( i % b[1] === 0) {
      console.log(c[1]);
    } else
      console.log(i);

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);