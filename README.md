mathstructures
==============

Database of finite mathematical structures in a lightweight declarative
machine readable mathematical format. Currently this is JSON with strings
that include LaTeX.

There are two formats, one for describing small first-order structures
(with less than a few hundred elements), and the other for describing
categories of structures by untyped first-order (or higher-order) axioms.

The format for finite structures is a key:value list (native JSON/Python 
syntax and easily parsable in other languages). Each key (m1, m2, ...) is 
a unique identifier for the corresponding structure within its collection.

{
m1:{
"cardinality":2, 
"bgalg":["Cat",k1], // optional
"operations":{"\\cdot":[[0,0],[0,1]], "1":1}, // optional
"relations":{"\\le":[[1,1],[0,1]], "\\prec":{0:[1],1:[]}}, // optional
"mingens":[0],
"names":{0:"\\bot",1:"\\top"},
"positions":[[x1,y1],[x2,y2],...], // optional or "positions3d" with view vector
"properties":{"P":"True", "Q":"False", ...},
"autgens":[],
"maxsubs":[[n2,[...]], [n3,[...]], ...],
"maxhomimgs":[[n4,[...]], [n5,[...]], ...]
},
m2:{
...
},
...
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