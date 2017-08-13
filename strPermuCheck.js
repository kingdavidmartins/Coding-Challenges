// write a function called strPermuCheck() that will check if str1 is a
// permutation of another string.

const strPermuCheck = (str1, str2) =>
  (
    str1
      .split('')
      .map(x => 'abcdefghijklmnopqrstuvwxyz'.indexOf(x))
      .sort((a, b) => b - a)
      .join('')
    ===
    str2
    .split('')
      .map(x => 'abcdefghijklmnopqrstuvwxyz'.indexOf(x))
      .sort((a, b) => b - a)
      .join('')
  )

console.log(
  strPermuCheck('asddsa', 'asdasd'), // => true
  strPermuCheck('rwetyq', 'qwerty'), // => true
  strPermuCheck('dave', 'eavd'), // => true
  strPermuCheck('lolasdasd', 'lolddaass'), // => true
  strPermuCheck('kkiinngg', 'kingking'), // => true
  strPermuCheck('kkkkiiii', 'kikikiki') // => true
);
