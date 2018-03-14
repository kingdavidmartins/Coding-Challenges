def findUnique(l: List[Int]) = l.filter(i => l.indexOf(i) == l.lastIndexOf(i))
val myList: List[Int] = List(1, 1, 2, 3, 3, 3, 4)

println(
  findUnique(myList)
)