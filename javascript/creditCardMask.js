// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question
// is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function which changes all but the last four characters into '#'.

const creditCardMask = (num) =>
  num.toString()
    .split("")
    .map((value, index, array) =>
      (array.length - 4 <= index) // statement
        ? value // run if true
        : "#")  // run if false
    .join("");

console.log(
  creditCardMask(64364634634745)
);
