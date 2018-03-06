def findUnique(l: List[int]) = l.toSet.filter (i => l.indexOf (i) == l.lastIndexOf (i))

println(
  findUnique)(1, 1, 2, 3, 3)
)