categories = [

{id:"Set", name:"Sets", 
defn:"sets with no operations",
signature:{},
axioms:[],
nalgs:{1:1,2:1,3:1,4:1,5:1},
superclasses:[],
subclasses:[]
},
{id:"Alg(1)", name:"Monounary algebras", 
defn: "sets with a unary operation",
signature:{"f":[1,"prefix"]},
axioms:[],
nalgs:{1:1},
superclasses:[],
subclasses:[]
},
{id:"Alg(1,1)", name:"Duounary algebras", 
defn: "sets with two unary operations",
signature:{"f":[1,"prefix"], "g":[1,"prefix"]},
axioms:[],
nalgs:{1:1},
superclasses:[],
subclasses:["MonoUn"]
},
{id:"Alg(2)", name:"Binars", 
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
superclasses:["Alg(2)"],
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
bgtheory:"Bnd",
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
{id:"MV", name:"MV-algebras",
defn: "commutative monoids with a unary involution that satisfies two more equations",
signature:{"\\oplus":[2,"infixl",60], "\\neg":[1,"prefix",90]},
axioms:["(x\\oplus y)\\oplus z = x\\oplus (y\\oplus z)", "x\\oplus 0 = x", "\\neg\\neg x = x", "x\\oplus\\neg 0 = \\neg 0", "\\neg(\\neg x\\oplus y)\\oplus y = \\neg(\\neg y\\oplus x)\\oplus x"],
nalgs:{1:1},
properties:{},
superclasses:["CMon"],
subclasses:["BA"]
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
bgtheory:"Grp",
axioms:["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}", "xy = yx"],
nalgs:{1:1},
superclasses:["Grp"],
subclasses:["BoolGrp"]
},
{id:"BoolGrp", name:"Boolean groups",
defn: "groups with an order-2 binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0], "^{-1}":[1,"postfix",80]},
bgtheory:"Grp",
axioms:["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}", "xx = 1"],
nalgs:{1:1, 2:1, 3:0, 4:1, 5:0, 6:0, 7:0, 8:1},
superclasses:["AbGrp"],
subclasses:["Triv"]
},
{id:"IMon", name:"Idempotent moniods",
defn: "monoids with an idempotent binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
bgtheory:"Mon",
axioms:["(xy)z = x(yz)", "x1 = x = 1x", "xx = x"],
nalgs:{1:1},
superclasses:["Mon"],
subclasses:["USlat"]
},
{id:"USlat", name:"Unital semilattices",
defn: "commutative monoids with an idempotent binary operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
bgtheory:"Slat",
axioms:["(xy)z = x(yz)", "xy = yx", "x1 = x = 1x", "xx = x"],
nalgs:{1:1},
superclasses:["CMon", "IMon"],
subclasses:["Triv"]
},
{id:"Drctd", name:"Directoids",
defn: "posets where $xy = \\min(x,y)$ if $x\\le y$ or $y\\le x$, else $xy\\le x,y$",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
axioms:["x((xy)z) = (xy)z", "(xy)x = xy = y(xy)", "xx = x"],
nalgs:{1:1},
superclasses:["Alg(2)"],
subclasses:["CDrctd"]
},
{id:"CDrctd", name:"Commutative directoids",
defn: "directoids with a commutative operation",
signature:{"\\cdot":[2,"infixomit"], "1":[0]},
bgtheory:"Drctd",
axioms:["x((xy)z) = (xy)z", "(xy)x = xy", "xy = yx", "xx = x"],
nalgs:{1:1},
superclasses:["Drctd"],
subclasses:["Sgrp"]
},
{id:"Alg(2,2)", name:"Duobinars",
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
superclasses:["Alg(2,2)"],
subclasses:["UZSrng"]
},
{id:"Srng", name:"Semirings",
defn: "duobinars with an associative operation that distributes over an associative commutative operation",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
nalgs:{1:1},
properties:{},
superclasses:["Alg(2,2)"],
subclasses:["USrng", "ZSrng"]
},
{id:"ISrng", name:"Idempotent semirings",
defn: "semirings with an idempotent additive operation",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
bgtheory:"Srng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+x = x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
nalgs:{1:1},
properties:{},
superclasses:["Srng"],
subclasses:["IUSrng", "IZSrng"]
},
{id:"USrng", name:"Unital semirings",
defn: "semirings expanded with an identity element",
signature:{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[0]},
bgtheory:"Srng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["Srng"],
subclasses:["UZSrng"]
},
{id:"ZSrng", name:"Zero semirings",
defn: "semirings expanded with an additive identity that is a multiplicative zero",
bgtheory:"Srng",
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
bgtheory:"Srng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "x0 = 0 = 0x", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["USrng", "ZSrng", "Shll"],
subclasses:["URng"]
},
{id:"Dio", name:"Dioids",
defn: "idempotent unital zero semirings",
signature:{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
bgtheory:"UZSrng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+x = x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "x0 = 0 = 0x", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["UZSrng", "ISrng"],
subclasses:["Triv"]
},
{id:"Rng", name:"Rings",
defn: "zero semirings expanded with an additive inverse operation",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70]},
bgtheory:"Srng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
nalgs:{1:1},
properties:{},
superclasses:["ZSrng"],
subclasses:["URng"]
},
{id:"CRng", name:"Commutative rings",
defn: "rings with a commutative multiplication",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70]},
bgtheory:"Rng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz"],
nalgs:{1:1},
properties:{},
superclasses:["Rng"],
subclasses:["CURng"]
},
{id:"URng", name:"Unital rings",
defn: "rings expanded with a multiplicative identity element",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
bgtheory:"Rng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "-x+x = 0", "x1 = x = 1x"],
nalgs:{1:1},
properties:{},
superclasses:["Rng"],
subclasses:["CURng"]
},
{id:"CURng", name:"Commutative unital rings",
defn: "unital rings with a commutative multiplication",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
bgtheory:"Rng",
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x"],
nalgs:{1:1},
properties:{},
superclasses:["CRng", "URng"],
subclasses:["IDom"]
},
{id:"IDom", name:"Integral domains",
defn: "commutative unital rings such that if a product is zero then one of the factors is zero",
bgtheory:"CURng",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x", "xy = 0 \\implies x = 0 \\text{ or } y = 0"],
nalgs:{1:1},
properties:{},
superclasses:["CURng"],
subclasses:["Fld"]
},
{id:"Fld", name:"Fields",
defn: "commutative unital rings such that any nonzero element has a multiplicative inverse and 0,1 are distinct",
bgtheory:"CURng",
signature:{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0], "^{-1}":[1, "postfix"]},
axioms:["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x", "x \\ne 0 \\implies xx^{-1} = 1", "0\\ne 1"],
nalgs:{1:1},
properties:{},
superclasses:["IDom"],
subclasses:["Triv"]
},
{id:"$\\lambda$Lat", name:"$\\lambda$-lattices",
defn: "sets with two commutative operations that satisfy some absorption laws",
refs: "Snasel [1997], Kopytov and Dimitrov [1989]",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
axioms:["x\\vee y = y\\vee x", "x\\wedge y = y\\wedge x", "x\\vee((x\\vee y)\\vee z) = (x\\vee y)\\vee z", "x\\wedge((x\\wedge y)\\wedge z) = (x\\wedge y)\\wedge z", "x\\wedge(x\\vee y) = x = x\\vee (x\\wedge y)"],
nalgs:{1:1},
properties:{},
superclasses:["Alg(2,2)"],
subclasses:["Lat"]
},
{id:"SkLat", name:"Skew lattices",
defn: "bands expanded with an associative idempotent operation that satisfies four outer absorption laws",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee (x\\wedge y)", "(x\\vee y)\\wedge y = y = (x\\wedge y)\\vee y"],
nalgs:{1:1},
properties:{},
superclasses:["Alg(2,2)"],
subclasses:["Lat"]
},
{id:"Lat", name:"Lattices",
defn: "skew lattices with both operations commutative",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)"],
nalgs:{1:1},
properties:{},
superclasses:["SkLat"],
subclasses:["MLat"]
},
{id:"MLat", name:"Modular lattices",
defn: "lattices that satisfy the modular law",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
bgtheory:"Lat",
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\wedge(y\\vee (x\\wedge z)) = (x\\wedge y)\\vee(x\\wedge z)"],
nalgs:{1:1},
properties:{},
superclasses:["Lat"],
subclasses:["DLat"]
},
{id:"SDJoin", name:"Join-semidistributive lattices",
defn: "lattices that satisfy join-semidistributivity",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
bgtheory:"Lat",
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\vee y=x\\vee z\\implies x\\vee(y\\wedge z) = (x\\vee y)"],
nalgs:{1:1},
properties:{},
superclasses:["Lat"],
subclasses:["SDLat"]
},
{id:"SDMeet", name:"Meet-semidistributive lattices",
defn: "lattices that satisfy meet-semidistributivity",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
bgtheory:"Lat",
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\wedge y=x\\wedge z\\implies x\\wedge(y\\vee z) = (x\\wedge y)"],
nalgs:{1:1},
properties:{},
superclasses:["Lat"],
subclasses:["SDLat"]
},
{id:"SDLat", name:"Semidistributive lattices",
defn: "lattices that are join and meet-semidistributive",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
bgtheory:"Lat",
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\vee y=x\\vee z\\implies x\\vee(y\\wedge z) = (x\\vee y)", "x\\wedge y=x\\wedge z\\implies x\\wedge(y\\vee z) = (x\\wedge y)"],
nalgs:{1:1},
properties:{},
superclasses:["SDJoin, SDMeet"],
subclasses:["DLat"]
},
{id:"DLat", name:"Distributive lattices",
defn: "lattices with meet distributing over join (or equivalently join distributing over meet)",
signature:{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
bgtheory:"Lat",
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)"],
nalgs:[1, 1, 1, 2, 3, 5, 8, 15, 26, 47, 82, 151, 269, 494, 891, 1639, 2978, 5483, 10006, 18428, 33749, 62162, 114083, 210189, 386292, 711811, 1309475, 2413144, 4442221, 8186962, 15077454, 27789108, 51193086, 94357143, 173859936, 320462062, 590555664, 1088548290, 2006193418, 3697997558, 6815841849, 12563729268, 23157428823, 42686759863, 78682454720, 145038561665, 267348052028, 492815778109, 908414736485],
properties:{},
superclasses:["MLat"],
subclasses:["BDLat"]
},
{id:"BDLat", name:"Bounded distributive lattices",
defn: "distributive lattices with a bottom and a top element",
signature:{"\\vee":[2,"infixl",60], "0":[0], "\\wedge":[2,"infixl",60], "1":[1]},
bgtheory:"DLat",
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)", "x\\vee 0=x", "x\\wedge 1=x"],
nalgs:[1, 1, 1, 2, 3, 5, 8, 15, 26, 47, 82, 151, 269, 494, 891, 1639, 2978, 5483, 10006, 18428, 33749, 62162, 114083, 210189, 386292, 711811, 1309475, 2413144, 4442221, 8186962, 15077454, 27789108, 51193086, 94357143, 173859936, 320462062, 590555664, 1088548290, 2006193418, 3697997558, 6815841849, 12563729268, 23157428823, 42686759863, 78682454720, 145038561665, 267348052028, 492815778109, 908414736485],
properties:{},
superclasses:["DLat"],
subclasses:["Triv"]
},
{id:"HA", name:"Heyting algebras",
defn: "relatively pseudocomplemented bounded distributive lattices",
signature:{"\\vee":[2,"infixl",60], "0":[0], "\\wedge":[2,"infixl",60], "1":[1], "\\to":[2,"infixr",70]},
bgtheory:"DLat",
axioms:["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y)=x=x\\vee (x\\wedge y)", "x\\vee 0=x", "x\\wedge 1=x", "x\\to x=1", "x\\wedge(x\\to y)=x\\wedge y", "(x\\to y)\\wedge y=y", "x\\to(y\\wedge z) = (x\\to y)\\wedge(x\\to z)"],
nalgs:[1, 1, 1, 2, 3, 5, 8, 15, 26, 47, 82, 151, 269, 494, 891, 1639, 2978, 5483, 10006, 18428, 33749, 62162, 114083, 210189, 386292, 711811, 1309475, 2413144, 4442221, 8186962, 15077454, 27789108, 51193086, 94357143, 173859936, 320462062, 590555664, 1088548290, 2006193418, 3697997558, 6815841849, 12563729268, 23157428823, 42686759863, 78682454720, 145038561665, 267348052028, 492815778109, 908414736485],
properties:{},
superclasses:["BDLat"],
subclasses:["GAlg"]
}
]

differenceList = function(L1, L2){
    var L3 = [];
    for (i in L1) {
	if (L2.indexOf(L1[i])==-1) L3.push(L1[i]);
    }
    return L3;
}

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
       (len!=0?"<br/>Axioms: ":"")+
       ("bgtheory" in cts[c]?"<b>"+cts[c].bgtheory+"</b> and $"+
	differenceList(cts[c].axioms,idx[cts[c].bgtheory].axioms).join("$, $"):
        (len!=0?"$":"")+cts[c].axioms.join("$, $"))+(len!=0?"$":"");
    elt.innerHTML = st;
    ms.appendChild(elt);
  }
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"ms"])
}

latextrim = function(st){
    // remove $ and \ symbols from strings and upcase
    return st.replace(/\$|\\/g,'').toUpperCase()
}

displayCategoriesAtoZ = function(){
  var ms = document.getElementById("ms");
  var cts = categories;
  var elt, st, c, ind, sc, idx = {};
  cts.sort(function(a, b) {
      return latextrim(a.name) > latextrim(b.name)?1:-1;});
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
