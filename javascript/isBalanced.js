const isBalanced = (str) => {
  let stack = [];

  let pairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };

  for (let a = 0; a < str.length; a++) {
    if (str[a] === '{' || str[a] === '(' || str[a] === '[' ) {
      stack.push(str[a]);
    }
    if (str[a] === '}' || str[a] === ')' || str[a] === ']' ) {
      (pairs[stack[stack.length -1 ]] === str[a]) ? stack.pop() : false;
    }
  }

  return stack.length === 0;
}

console.log(
  isBalanced('(foo { bar (baz) [boo] })'), // => true
  isBalanced('foo { bar { baz }'), // => false
  isBalanced('foo { (bar [baz] } )') // => false
);
