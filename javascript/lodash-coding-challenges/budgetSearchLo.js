import _ from 'lodash'
const budgetSearch = (budget, price) =>
  _.chain(price)
    .filter((value) => budget >= value)
    .value()

console.log(
  budgetSearch(5, [4, 2, 7, 9, 756, 35, 3, 5, 5])
)
