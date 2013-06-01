mathstructures
==============

Database for finite mathematical structures in JSON format

The format is:

{
n1:{
cardinality:m1, 
operations:{"\\cdot":[[0,0],[0,1]], "1":1}, 
relations:{"\\le":[[1,1],[0,1]], "\\prec":{0:[1],1:[]}},
properties:["P", "Q"],
maxsubs:[n2, n3],
minsups:[n4, n5]
},
n2:{
...
}
}

where m1, n1, n2, ... are nonnegative integers
