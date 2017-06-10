// You are developing an image hosting website.
// You have to create a function for generating random and unique image filenames.
// Create a function for generating a random 6 character string which will be used to access the photo URL.
// Note: We consider two names with same letters but different cases to be unique.

const generateName = () =>
  Array.apply(null, {length: 6})
    .map((value, index, arr) =>
      arr[index] = ('abcdefghijklmnopqrstuvwxyz'
                    +'abcdefghijklmnopqrstuvwxyz'.toUpperCase())
                      .split('')
                      [Math.floor(
                        Math.random() * ('abcdefghijklmnopqrstuvwxyz'.length * 2) )]
                      )
    .join('')


console.log(
   generateName()
);
