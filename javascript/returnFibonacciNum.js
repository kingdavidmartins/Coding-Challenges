// function fibonacci(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci
// function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch
// (i.e. fibonacci(n-1)).
// This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a
// nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.
//
// For this particular problem we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion
// algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

// The trick of the memoized version is that we will keep a cache data structure (most likely an associative array)
// where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache,
// if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

const returnFibonacciNum = (n) => {
  let fib = [0, 1];
  for (let a = 0; a < n; a++){
    fib.push((fib[a] + fib[a + 1]));
  }
  return fib[n];
};

console.log(
  returnFibonacciNum(70), // => 190392490709135
  returnFibonacciNum(60), // => 1548008755920
  returnFibonacciNum(50) // => 12586269025
);
