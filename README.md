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

{<br>
m1:{<br>
"cardinality":2,<br> 
"bgalg":["Cat",k1], // optional background algebra that is being expanded here<br>
"operations":{"\\cdot":[[0,0],[0,1]], "1":1}, // optional<br>
"relations":{"\\le":[[1,1],[0,1]], "\\prec":{0:[1],1:[]}}, // optional<br>
"mingens":[0],<br>
"names":{0:"\\bot",1:"\\top"},<br>
"positions":[[x1,y1],[x2,y2],...], // optional or "positions3d" with view vector<br>
"properties":{"P":"True", "Q":"False", ...},<br>
"autgens":[],<br>
"maxsubs":[[n2,[...]], [n3,[...]], ...],<br>
"maxhomimgs":[[n4,[...]], [n5,[...]], ...]<br>
},<br>
m2:{<br>
...<br>
},<br>
...<br>
}

where n1, n2, ... are nonnegative integers.

The format for categories is similar, but based on syntactic axiomatic
descriptions:

[<br>
{id:"Abbr", name:"Long name",<br>
defn:"brief english definition",<br>
signature:{},<br>
bgtheory:"Abbr1",<br>
axioms:["x = y",... irredundant list of axioms],<br>
superclasses:[],<br>
subclasses:[],<br>
},<br>
{id:"",<br>
...<br>
}<br>
]
