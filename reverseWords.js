// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// reverseWords("The greatest victory is that which requires no battle") // => should return "battle no requires which that is victory greatest The"


const reverseWords = (str) => str.split(' ').reverse().join(' ');

console.log(
  reverseWords("The greatest victory is that which requires no battle"), // => should return "battle no requires which that is victory greatest The"
  reverseWords("hello world!"), // => "world! hello"
  reverseWords("yoda doesn't speak like this"), // => "this like speak doesn't yoda")
  reverseWords("foobar"), // => "foobar")
  reverseWords("kata editor"), // => "editor kata")
  reverseWords("row row row your boat")  // => "boat your row row row")
);
