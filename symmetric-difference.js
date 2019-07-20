function sym(args) {
  let symDiff = Array.from(arguments[0]);
  for (let i = 1; i < arguments.length; i++) {
    console.log(i);
    symDiff = getDiff(symDiff, Array.from(arguments[i]));
  }
  console.log(symDiff);
  return symDiff;
}

function getDiff(args, args2) {
  let diff = [];
  args.map(value => {
    if (!args2.includes(value) && !diff.includes(value)) diff.push(value);
  })
  args2.map(value => {
    if (!args.includes(value) && !diff.includes(value)) diff.push(value);
  })
  console.log(diff);
  return diff;
}

// sym([1, 2, 3], [5, 2, 1, 4], [1,6,7,8]);
sym([1, 2, 3], [5, 2, 1, 4]);