// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass
// based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.
/*
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------
Example
[                            [
 ['H', 'H', 'W', 'O'],        ['O','O','O','O']
 ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
 ['H', 'H', 'O', 'O']         ['H','H','H','H']
 ]                           ]

*/

var waterDensity = (glass) =>
  [
    glass.toString()
      .replace(/,/g, "")
      .match(/O/g)
    ,
    glass.toString()
      .replace(/,/g, "")
      .match(/A/g)
    ,
    glass.toString()
      .replace(/,/g, "")
      .match(/W/g)
    ,
    glass.toString()
      .replace(/,/g, "")
      .match(/H/g)
  ]
  .filter((value) => value !== null);


console.log(
  waterDensity([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']]) //[['O','O','O','O'],['A', 'A', 'A', 'A'],['W','W','W','W'],['H','H','H','H']]
);
