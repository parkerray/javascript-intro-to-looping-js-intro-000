function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push(`I am ${i} strange loop.`)
    } else {
        arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr;
}

function whileLoop(number) {
  while (number > -1) {
    console.log(--number)
  }
  return 'done'
}
