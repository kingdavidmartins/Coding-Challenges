// you've been hired at AWS. You are with the cloud file upload team. Your team has
// been given the task to help manage the file name during upload. You  need to create a function that takes 2 arguments
//  the 1st (strLength) take a number that will creates a unique str of the length you specify.
// the 2nd (numOfStrGenerated) which will also take a number that will create the amount of unique str that are needed
// Note: We consider two names with same letters but different cases to be unique.

const generateNameDynamic = (strLength, numOfStrGenerated) =>
  Array.apply(null, {length: numOfStrGenerated})
    .map((uniqueId) =>
      Array
      .apply(null, {length: strLength})
      .map((str) =>
         ('abcdefghijklmnopqrstuvwxyz0123456789'
                      +'abcdefghijklmnopqrstuvwxyz0123456789'.toUpperCase())
                        .split('')
                        [Math.floor(
                          Math.random() * ('abcdefghijklmnopqrstuvwxyz'.length * 2) )]
                        )
      .join(''))
  .join('\n')

console.log(
  // try different inputs
  // generateNameDynamic(30, 99999) // => generates 99,999 different unique ids with a with 30 characters.
  generateNameDynamic(70, 10) // => generates 70 different unique ids with 10 characters.
);
