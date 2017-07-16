function loop() {
  for (var i = 100; i < 201; i++)
    if (i % 3 == 0 && i % 4 == 0) {
      console.log('Loopy Lighthouse');
    } else if ( i % 3 ==0) {
      console.log('Loopy');
    } else if ( i % 4 == 0) {
      console.log('Lighthouse');
    } else
      console.log(i);

}

loop();