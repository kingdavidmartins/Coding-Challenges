// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such as
//
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
// Given a number, say prod (for product), we search two Fibonacci numbers F(n)
// and F(n+1) verifying
//
// F(n) * F(n+1) = prod.
// Your function productFib takes an integer (prod) and returns an array:
//
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.
//
// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prod
// you will return the following
//
// [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(m) being the smallest one such as F(m) * F(m+1) > prod.

const productFib = (prod) => {
  let history = [0, 1];

  for (let a = 0; a < 801; a++) {
    history.push( history[a] + history[a + 1] );
  }

  for (let a = 0; a < history.length; a++) {
    if ( (history[a] * history[a + 1]) === prod) {
      return [history[a], history[a + 1], true];
    } else if ( (history[a] * history[a + 1]) > prod) {
      return [history[a], history[a + 1], false];
    }
  }
}

console.log(
  productFib(4895), // => [55, 89, true]
  productFib(5895), // => [89, 144, false]
  productFib(74049690), // => [6765, 10946, true]
  productFib(84049690), // => [10946, 17711, false]
  productFib(193864606), // => [10946, 17711, true]
  productFib(447577), // => [610, 987, false]
  productFib(602070) // => [610, 987, true]
);
