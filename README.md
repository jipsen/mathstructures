mathstructures
==============

Database of finite mathematical structures in a lightweight declarative
machine readable mathematical format. Currently this is JSON with strings
that include LaTeX.

There are two formats, one for describing small first-order structures
(with less than a few hundred elements), and the other for describing
categories of structures by untyped first-order (or higher-order) axioms.

The format for finite structures is a key:value list (native JSON/Python 
syntax and easily parsable in other languages). Each key (n1, n2, ...) is 
a unique identifier for the corresponding structure within its collection.

{
n1:{
cardinality:2, 
operations:{"\\cdot":[[0,0],[0,1]], "1":1}, 
relations:{"\\le":[[1,1],[0,1]], "\\prec":{0:[1],1:[]}},
mingens:[0],
names:{0:"\\bot",1:"\\top"},
properties:["P", "Q"],
maxsubs:[n2, n3],
minsups:[n4, n5],
maxhomimgs:[n6, n7]
},
n2:{
...
}
}

where n1, n2, ... are nonnegative integers.

The format for categories is similar, but based on syntactic axiomatic
descriptions:

[
{id:"Abbr", name:"Long name",
defn:"brief english definition",
signature:{},
bgtheory:"Abbr1",
axioms:["x = y",... irredundant list of axioms],
superclasses:[],
subclasses:[],
},
{id:"",
...
}
]