categories = [

{id:"Set", name:"Sets", 
defn:"sets with no operations",
signature:{},
axioms:[],
nalgs:{1:1,2:1,3:1,4:1,5:1},
superclasses:[],
subclasses:[]
},
{id:"MonoUn", name:"Monounary algebras", 
defn: "sets with a unary operation",
signature:{"f":[1,"prefix"]},
axioms:[],
nalgs:{1:1},
superclasses:[],
subclasses:[]
},
{id:"DuoUn", name:"Duounary algebras", 
defn: "sets with two unary operations",
signature:{"f":[1,"prefix"], "g":[1,"prefix"]},
axioms:[],
nalgs:{1:1},
superclasses:[],
subclasses:["MonoUn"]
},
{id:"Bin", name:"Binars", 
defn: "sets with a binary operation",
signature:{"\\cdot":[2,"infixomit"]},
axioms:[],
nalgs:{1:1},
superclasses:[],
subclasses:["Sgrp", "CBin", "IBin"]
},
{id:"Sgrp", name:"Semigroups", 
defn: "sets with an associative binary operation",
signature:{"\\cdot":[2,"infixomit",70]},
axioms:["(xy)z = x(yz)"],
nalgs:{1:1},
superclasses:["Bin"],
subclasses:["Bnd","CSgrp"]
},
{id:"CSgrp", name:"Commutative semigroups", 
defn: "semigroups with a commutative operation",
signature:{"\\cdot":[2,"infixomit",70]},
axioms:["(xy)z = x(yz)", "xy = yx"],
nalgs:{1:1},
superclasses:["Sgrp"],
subclasses:["Slat"]
},
{id:"Bnd", name:"Bands", 
defn: "semigroups with an idempotent operation",
signature:{"\\cdot":[2,"infixomit",70]},
axioms:["(xy)z = x(yz)", "xx = x"],
nalgs:{1:1},
properties:{locally_finite:"true"},
superclasses:["Sgrp"],
subclasses:["Slat"]
},
{id:"Slat", name:"Semilattices", 
defn: "semigroups with an idempotent operation",
signature:{"\\cdot":[2,"infixomit",70]},
axioms:["(xy)z = x(yz)", "xy = yx", "xx = x"],
nalgs:{1:1},
properties:{locally_finite:"true"},
superclasses:["Bnd","CSgrp"],
subclasses:["Triv"]
},
{id:"Mon", name:"Monoids",
defn: "semigroups expanded with an identity element",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
axioms:["(xy)z = x(yz)", "x1 = x = 1x"],
nalgs:{1:1},
superclasses:["Sgrp"],
subclasses:["CMon", "Grp", "IMon"]
},
{id:"CMon", name:"Commutative moniods",
defn: "monoids with a commutative binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
axioms:["(xy)z = x(yz)", "x1 = x = 1x","xy = yx"],
nalgs:{1:1},
superclasses:["Mon"],
subclasses:["USlat", "AbGrp"]
},
{id:"Grp", name:"Groups",
defn: "monoids expanded with an inverse operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0], "^{-1}":[1,"postfix",80]},
axioms:["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}"],
nalgs:{1:1},
superclasses:["Mon"],
subclasses:["AbGrp"]
},
{id:"AbGrp", name:"Abelian groups",
defn: "groups with a commutative binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0], "^{-1}":[1,"postfix",80]},
axioms:["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}", "xy = yx"],
nalgs:{1:1},
superclasses:["Grp"],
subclasses:["BoolGrp"]
},
{id:"BoolGrp", name:"Boolean groups",
defn: "groups with an order-2 binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0], "^{-1}":[1,"postfix",80]},
axioms:["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}", "xx = 1"],
nalgs:{1:1, 2:1, 3:0, 4:1, 5:0, 6:0, 7:0, 8:1},
superclasses:["AbGrp"],
subclasses:["Triv"]
},
{id:"IMon", name:"Idempotent moniods",
defn: "monoids with an idempotent binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
axioms:["(xy)z = x(yz)", "x1 = x = 1x", "xx = x"],
nalgs:{1:1},
superclasses:["Mon"],
subclasses:["USlat"]
},
{id:"USlat", name:"Unital semilattices",
defn: "commutative monoids with an idempotent binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
axioms:["(xy)z = x(yz)", "xy = yx", "x1 = x = 1x", "xx = x"],
nalgs:{1:1},
superclasses:["CMon", "IMon"],
subclasses:["Triv"]
},
{id:"DuoBin", name:"Duobinars",
defn: "sets with two binary operations",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:[],
nalgs:{1:1},
properties:{},
superclasses:[],
subclasses:[]
},
{id:"Shll", name:"Shells",
defn: "duobinars expanded with an identity and zero element",
signature:{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["x+0 = x = 0+x", "x1 = x = 1x", "x0 = 0 = 0x"],
nalgs:{1:1},
properties:{},
superclasses:["DuoBin"],
subclasses:["UZSrng"]
},
{id:"Srng", name:"Semirings",
defn: "duobinars with an associative operation that distributes over an associative commutative operation",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
nalgs:{1:1},
properties:{},
superclasses:["DuoBin"],
subclasses:["USrng", "ZSrng"]
},
{id:"ISrng", name:"Idempotent semirings",
defn: "semirings with an idempotent additive operation",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+x = x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
nalgs:{1:1},
properties:{},
superclasses:["Srng"],
subclasses:["IUSrng", "IZSrng"]
},
{id:"USrng", name:"Unital semirings",
defn: "semirings expanded with an identity element",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["Srng"],
subclasses:["UZSrng"]
},
{id:"ZSrng", name:"Zero semirings",
defn: "semirings expanded with an additive identity that is a multiplicative zero",
signature:{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "x0 = 0 = 0x"],
nalgs:{1:1},
properties:{},
superclasses:["Srng"],
subclasses:["UZSrng"]
},
{id:"UZSrng", name:"Unital zero semirings",
defn: "zero semirings expanded with a multiplicative identity",
signature:{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x = 0+x", "x0 = 0 = 0x", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["USrng", "ZSrng", "Shll"],
subclasses:["URng"]
},
{id:"Dio", name:"Dioids",
defn: "idempotent unital zero semirings",
signature:{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+x = x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x = 0+x", "x0 = 0 = 0x", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["UZSrng"],
subclasses:["Triv"]
},
{id:"Rng", name:"Rings",
defn: "zero semirings expanded with an additive inverse operation",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
nalgs:{1:1},
properties:{},
superclasses:["ZSrng"],
subclasses:["URng"]
},
{id:"CRng", name:"Commutative rings",
defn: "rings with a commutative multiplication",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz"],
nalgs:{1:1},
properties:{},
superclasses:["Rng"],
subclasses:["CURng"]
},
{id:"URng", name:"Unital rings",
defn: "rings expanded with a multiplicative identity element",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x = 0+x", "x+-x = 0 = -x+x", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["Rng"],
subclasses:["CURng"]
},
{id:"CURng", name:"Commutative unital rings",
defn: "unital rings with a commutative multiplication",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x"],
nalgs:{1:1},
properties:{},
superclasses:["CRng", "URng"],
subclasses:["IDom"]
},
{id:"IDom", name:"Integral domains",
defn: "commutative unital rings such that if a product is zero then one of the factors is zero",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x", "xy = 0 \\implies x = 0 \\text{ or } y = 0"],
nalgs:{1:1},
properties:{},
superclasses:["CURng"],
subclasses:["Fld"]
},
{id:"Fld", name:"Fields",
defn: "commutative unital rings such that any nonzero element has a multiplicative inverse and 0,1 are distinct",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0], "^{-1}":[1, "postfix"]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x", "x \\ne 0 \\implies xx^{-1} = 1", "0\\ne 1"],
nalgs:{1:1},
properties:{},
superclasses:["IDom"],
subclasses:["Triv"]
},
{id:"SkLat", name:"Skew lattices",
defn: "bands expanded with an associative idempotent operation that satisfy some absorption laws",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "(x\\vee y)\\wedge y=y=(x\\wedge y)\\vee y"],
nalgs:{1:1},
properties:{},
superclasses:["Bnd"],
subclasses:["Lat"]
},
{id:"Lat", name:"Lattices",
defn: "skew lattices with both operations commutative",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)"],
nalgs:{1:1},
properties:{},
superclasses:["SkLat"],
subclasses:["MLat"]
},
{id:"MLat", name:"Modular lattices",
defn: "lattices that satisfy the modular law",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\wedge(y\\vee (x\\wedge z)) = (x\\wedge y)\\vee(x\\wedge z)"],
nalgs:{1:1},
properties:{},
superclasses:["Lat"],
subclasses:["DLat"]
},
{id:"DLat", name:"Distributive lattices",
defn: "lattices with meet distributing over join (or equivalently jion ditributing over meet)",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)"],
nalgs:{1:1},
properties:{},
superclasses:["MLat"],
subclasses:["Triv"]
}
]

displayCategories = function(){
  var ms = document.getElementById("ms");
  var cts = categories;
  var elt, st, c, ind, sc, idx = {};
  for (c in cts) {
    idx[cts[c].id] = cts[c];
  }
  for (c in cts) {
    ind = 0;
    sc = cts[c].superclasses;
    for (i in sc) {
      if (ind <= idx[sc[i]]["indent"]) ind = idx[sc[i]]["indent"]+1;
    }
    cts[c]["indent"] = ind;
  }
  for (c in cts) {
    len = cts[c].axioms.length;
    elt = document.createElement("li");
    elt.style.cssText = "margin-left: "+(2*cts[c]["indent"])+"em"
    st = "<b><a href=\"http://en.wikipedia.org/wiki/"+cts[c].name+"\">"+
       cts[c].name+"</a></b> (<b>"+cts[c].id+"</b>): "+cts[c].defn+
       (len!=0?"<br/>Axioms: $":"")+cts[c].axioms.join("$, $")+(len!=0?"$":"");
    elt.innerHTML = st;
    ms.appendChild(elt);
  }
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"ms"])
}

displayCategoriesAtoZ = function(){
  var ms = document.getElementById("ms");
  var cts = categories;
  var elt, st, c, ind, sc, idx = {};
  cts.sort(function(a, b) {return a.name > b.name ? 1 : -1;});
  for (c in cts) {
    len = cts[c].axioms.length;
    elt = document.createElement("li");
    st = "<b><a href=\"http://en.wikipedia.org/wiki/"+cts[c].name+"\">"+
       cts[c].name+"</a></b> (<b>"+cts[c].id+"</b>): "+cts[c].defn+
       (len!=0?"<br/>Axioms: $":"")+cts[c].axioms.join("$, $")+(len!=0?"$":"");
    elt.innerHTML = st;
    ms.appendChild(elt);
  }
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"ms"])
}


/*
  -[[Action algebras]]
  -[[Bands]]
  -[[Basic logic algebras]]
  -[[BCK-algebras]]
  -[[Bilattices]]
  -[[Boolean algebras]]
  -[[Boolean semigroups]]
  -[[Brouwerian algebras]]
  -[[Brouwerian semilattices]]
  -[[Cylindric algebras]]
  -[[De Morgan algebras]]
  -[[De Morgan monoids]]
  -[[Dioids]]
  -[[Directoids]]
  -[[Distributive lattices]]
  -[[Double p-algebras]]
  -[[Double Stone algebras]]
  -[[Dunn monoids]]
  -[[Equivalence algebras]]
  -[[FL-algebras]]
  -[[G-sets]]
  -[[Generalized BL-algebras]]
  -[[Generalized Boolean algebras]]
  -[[Generalized MV-algebras]]
  -[[Goedel algebras]]
  -[[Groupoids]]
  -[[Groups]]
  -[[Heyting algebras]]
  -[[Hilbert algebras]]
  -[[Hoops]]
  -[[Idempotent semirings]]
  -[[Implication algebras]]
  -[[Implicative lattices]]
  -[[Intuitionistic linear logic algebras]]
  -[[Inverse semigroups]]
  -[[Involutive FL-algebras]]
  -[[Kleene algebras]]
  -[[Kleene lattices]]
  -[[Kleene logic algebras]]
  -[[Lattice-ordered groups]]
  -[[Lattice-ordered monoids]]
  -[[Lattice-ordered rings]]
  -[[Lattices]]
  -[[Goedel algebras]]
  -[[Linear logic algebras]]
  -[[Loops]]
  -[[Lukasiewicz algebras of order n]]
  -[[M-sets]]
  -[[Medial groupoids]]
  -[[Modal algebras]]
  -[[Modules over a ring]]
  -[[Monadic algebras]]
  -[[Monoids]]
  -[[Monounary algebras]]
  -[[MV-algebras]]
  -[[Near-rings]]
  -[[Nonassociative relation algebras]]
  -[[Ockham algebras]]
  -[[Order algebras]]
  -[[Ortholattices]]
  -[[Orthomodular lattices]]
  -[[Polyadic algebras]]
  -[[Post algebras]]
  -[[Process algebras]]
  -[[Pseudocomplemented distributive lattices]]
  -[[Pure discriminator algebras]]
  -[[Quasigroups]]
  -[[Quasi-implication algebras]]
  -[[Quasi-MV-algebra]]
  -[[Relation algebras]]
  -[[Relative Stone algebras]]
  -[[Residuated lattice-ordered semigroups]]
  -[[Residuated lattices]]
  -[[Rings]]
  -[[Semigroups]]
  -[[Semilattices]]
  -[[Semirings]]
  -[[Sequential algebras]]
  -[[Sets]]
  -[[Shells]]
  -[[Skew lattices]]
  -[[Stone algebras]]
  -[[Tarski algebras]]
  -[[Tense algebras]]
*/
