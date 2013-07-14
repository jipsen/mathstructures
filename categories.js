categories = 
[

{"id":"Set", "name":"Sets", 
"defn":"sets with no operations",
"signature":{},
"axioms":[],
"nmodels":"constant function with value 1",
"superclasses":[],
"subclasses":[]
},
{"id":"Alg(1)", "name":"Monounary algebras", 
"defn": "sets with a unary operation",
"signature":{"f":[1,"prefix"]},
"axioms":[],
"nmodels":[1, 3, 7, 19, 47, 130, 343, 951, 2615, 7318, 20491, 57903, 163898, 466199, 1328993, 3799624, 10884049, 31241170, 89814958, 258604642, 745568756, 2152118306, 6218869389, 17988233052, 52078309200, 150899223268, 437571896993],
"superclasses":[],
"subclasses":[]
},
{"id":"Alg(1,1)", "name":"Duounary algebras", 
"defn": "sets with two unary operations",
"signature":{"f":[1,"prefix"], "g":[1,"prefix"]},
"axioms":[],
"nmodels":[1, 10, 129, 2836, 83061, 3076386, 136647824, 7081061404, 419223006090, 27914819962058],
"superclasses":[],
"subclasses":[]
},
{"id":"Alg(2)", "name":"Binars", 
"defn": "sets with a binary operation",
"signature":{"\\cdot":[2,"infixomit"]},
"axioms":[],
"nmodels":[1, 10, 3330, 178981952, 2483527537094825],
"superclasses":[],
"subclasses":["Sgrp", "CBin", "IBin"]
},
{"id":"CBin", "name":"Commutative binars", 
"defn": "sets with a commutative binary operation",
"signature":{"\\cdot":[2,"infixomit"]},
"axioms":["xy = yx"],
"nmodels":[1, 4, 129, 43968, 254429900, 30468670170912],
"oeis":"A001425",
"superclasses":["Alg(2)"],
"subclasses":["CSgrp", "CIBin", "$\\lambda$Lat"]
},
{"id":"IBin", "name":"Idempotent binars", 
"defn": "sets with an idempotent binary operation",
"signature":{"\\cdot":[2,"infixomit"]},
"axioms":["xx = x"],
"nmodels":[1, 3, 138, 700688, 794734575200],
"oeis":"A030247",
"superclasses":["Alg(2)"],
"subclasses":["Bnd", "CIBin", "Drctd"]
},
{"id":"CIBin", "name":"Commutative idempotent binars", 
"defn": "sets with an idempotent binary operation",
"signature":{"\\cdot":[2,"infixomit"]},
"axioms":["xy = yx", "xx = x"],
"nmodels":[1, 1, 7, 192, 82355, 653502972, 110826042515867],
"oeis":"A030257",
"superclasses":["CBin", "IBin"],
"subclasses":["CDrctd", "Slat"]
},
{"id":"Sgrp", "name":"Semigroups", 
"defn": "sets with an associative binary operation",
"signature":{"\\cdot":[2,"infixomit",70]},
"axioms":["(xy)z = x(yz)"],
"nmodels":[1, 5, 24, 188, 1915, 28634, 1627672, 3684030417, 105978177936292],
"superclasses":["Alg(2)"],
"subclasses":["Bnd", "CSgrp", "Mon"]
},
{"id":"CSgrp", "name":"Commutative semigroups", 
"defn": "semigroups with a commutative operation",
"signature":{"\\cdot":[2,"infixomit",70]},
"axioms":["(xy)z = x(yz)", "xy = yx"],
"nmodels":[1, 3, 12, 58, 325, 2143, 17291, 221805, 11545843, 3518930337],
"superclasses":["CBin", "Sgrp"],
"subclasses":["Slat"]
},
{"id":"Bnd", "name":"Bands", 
"defn": "semigroups with an idempotent operation",
"signature":{"\\cdot":[2,"infixomit",70]},
"axioms":["(xy)z = x(yz)", "xx = x"],
"nmodels":[1, 3, 10, 46, 251, 1682, 13213],
"properties":{"locally_finite":"true"},
"superclasses":["IBin", "Sgrp"],
"subclasses":["Slat", "SkLat"]
},
{"id":"Slat", "name":"Semilattices", 
"defn": "semigroups with an idempotent operation",
"signature":{"\\cdot":[2,"infixomit",70]},
"bgtheory":"Bnd",
"axioms":["(xy)z = x(yz)", "xy = yx", "xx = x"],
"nmodels":[1, 1, 2, 5, 15, 53, 222, 1078, 5994, 37622, 262776, 2018305, 16873364, 152233518, 1471613387, 15150569446, 165269824761],
"properties":{"locally_finite":"true"},
"superclasses":["Bnd","CIBin", "CSgrp", "CDrctd"],
"subclasses":["USlat"]
},
{"id":"Mon", "name":"Monoids",
"defn": "semigroups expanded with an identity element",
"signature":{"\\cdot":[2,"infixomit"], "1":[0]},
"axioms":["(xy)z = x(yz)", "x1 = x = 1x"],
"nmodels":[1, 2, 7, 35, 228, 2237, 31559, 1668997],
"superclasses":["Sgrp"],
"subclasses":["CMon", "Grp", "IMon", "RL"]
},
{"id":"CMon", "name":"Commutative moniods",
"defn": "monoids with a commutative binary operation",
"signature":{"\\cdot":[2,"infixomit"], "1":[0]},
"axioms":["(xy)z = x(yz)", "x1 = x = 1x","xy = yx"],
"nmodels":[1, 2, 5, 19, 78, 421, 2637, 20486],
"superclasses":["Mon"],
"subclasses":["AbGrp", "MV", "USlat"]
},
{"id":"MV", "name":"MV-algebras",
"defn": "commutative monoids with a unary involution that satisfies two more equations",
"signature":{"\\oplus":[2,"infixl",60], "\\neg":[1,"prefix",90]},
"axioms":["(x\\oplus y)\\oplus z = x\\oplus (y\\oplus z)", "x\\oplus 0 = x", "\\neg\\neg x = x", "x\\oplus\\neg 0 = \\neg 0", "\\neg(\\neg x\\oplus y)\\oplus y = \\neg(\\neg y\\oplus x)\\oplus x"],
"nmodels":"[1, 1, 1, 2, 1, 2, 1, 3, 2, 2, 1, 4, 1, 2, 2, 5, 1, 4, 1, 4, 2, 2, 1, 7, 2,...], the number of algebras with n elements is given by the number of ways of factoring n into a product with nontrivial factors, see oeis.org/A001055",
"properties":{},
"superclasses":["CMon"],
"subclasses":["BA"]
},
{"id":"Grp", "name":"Groups",
"defn": "monoids expanded with an inverse operation",
"signature":{"\\cdot":[2,"infixomit"], "1":[0], "^{-1}":[1,"postfix",80]},
"axioms":["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}"],
"nmodels":[1, 1, 1, 2, 1, 2, 1, 5, 2, 2, 1, 5, 1, 2, 1, 14, 1, 5, 1, 5, 2, 2, 1, 15, 2, 2, 5, 4, 1, 4, 1, 51, 1, 2, 1, 14, 1, 2, 2, 14, 1, 6, 1, 4, 2, 2, 1, 52, 2, 5, 1, 5, 1, 15, 2, 13, 2, 2, 1, 13, 1, 2, 4, 267],
"superclasses":["Mon"],
"subclasses":["AbGrp"]
},
{"id":"AbGrp", "name":"Abelian groups",
"defn": "groups with a commutative binary operation",
"signature":{"\\cdot":[2,"infixomit"], "1":[0], "^{-1}":[1,"postfix",80]},
"bgtheory":"Grp",
"axioms":["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}", "xy = yx"],
"nmodels":"number of factorizations of n into prime powers",
"superclasses":["CMon", "Grp"],
"subclasses":["BoolGrp"]
},
{"id":"BoolGrp", "name":"Boolean groups",
"defn": "groups with an order-2 binary operation",
"signature":{"\\cdot":[2,"infixomit"], "1":[0], "^{-1}":[1,"postfix",80]},
"bgtheory":"Grp",
"axioms":["(xy)z = x(yz)", "x1 = x = 1x", "x^{-1}x = 1 = xx^{-1}", "xx = 1"],
"nmodels":"1 if $\\ \\exists k\\ (n=2^k)$ else 0",
"superclasses":["AbGrp"],
"subclasses":["Triv"]
},
{"id":"IMon", "name":"Idempotent moniods",
"defn": "monoids with an idempotent binary operation",
"signature":{"\\cdot":[2,"infixomit"], "1":[0]},
"bgtheory":"Mon",
"axioms":["(xy)z = x(yz)", "x1 = x = 1x", "xx = x"],
"nmodels":[1, 1, 3, 10, 46, 251, 1682, 13213],
"superclasses":["Mon"],
"subclasses":["USlat"]
},
{"id":"USlat", "name":"Unital semilattices",
"defn": "commutative monoids with an idempotent binary operation",
"signature":{"\\cdot":[2,"infixomit"], "1":[0]},
"bgtheory":"Slat",
"axioms":["(xy)z = x(yz)", "xy = yx", "x1 = x = 1x", "xx = x"],
"nmodels":[1, 1, 1, 2, 5, 15, 53, 222, 1078, 5994, 37622, 262776, 2018305, 16873364, 152233518, 1471613387, 15150569446, 165269824761],
"superclasses":["CMon", "IMon", "Slat"],
"subclasses":["Triv"]
},
{"id":"Drctd", "name":"Directoids",
"defn": "posets where $xy = \\min(x,y)$ if $x\\le y$ or $y\\le x$, else $xy\\le x,y$",
"signature":{"\\cdot":[2,"infixomit"]},
"axioms":["x((xy)z) = (xy)z", "(xy)x = xy = y(xy)", "xx = x"],
"nmodels":[1, 2, 7, 61],
"superclasses":["IBin"],
"subclasses":["CDrctd"]
},
{"id":"CDrctd", "name":"Commutative directoids",
"defn": "directoids with a commutative operation",
"signature":{"\\cdot":[2,"infixomit"], "1":[0]},
"bgtheory":"Drctd",
"axioms":["x((xy)z) = (xy)z", "(xy)x = xy = y(xy)", "xy = yx", "xx = x"],
"nmodels":[1, 2, 6, 28, 249],
"superclasses":["Drctd", "CIBin"],
"subclasses":["Slat"]
},
{"id":"Alg(2,2)", "name":"Duobinars",
"defn": "sets with two binary operations",
"signature":{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
"axioms":[],
"nmodels":[1, 136],
"nmodelscomment":"same as Alg(3)? See oeis.org/A091510",
"properties":{},
"superclasses":[],
"subclasses":["Shll", "Srng", "$\\lambda$Lat", "SkLat"]
},
{"id":"Shll", "name":"Shells",
"defn": "duobinars expanded with an identity and zero element",
"signature":{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
"axioms":["x+0 = x = 0+x", "x1 = x = 1x", "x0 = 0 = 0x"],
"nmodels":[1, 2, 243],
"properties":{},
"superclasses":["Alg(2,2)"],
"subclasses":["UZSrng"]
},
{"id":"Srng", "name":"Semirings",
"defn": "duobinars with an associative operation that distributes over an associative commutative operation",
"signature":{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
"nmodels":[1, 10, 132, 2341],
"properties":{},
"superclasses":["Alg(2,2)"],
"subclasses":["ISrng", "USrng", "ZSrng"]
},
{"id":"ISrng", "name":"Idempotent semirings",
"defn": "semirings with an idempotent additive operation",
"signature":{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70]},
"bgtheory":"Srng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "x+x = x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
"nmodels":[1, 6, 61, 866, 15751, 354409],
"nsubirr":[1, 6, 29, 173, 1177],
"nsimple":[1, 6, 3, 1, 4],
"properties":{},
"superclasses":["Srng"],
"subclasses":["IUSrng", "IZSrng"]
},
{"id":"USrng", "name":"Unital semirings",
"defn": "semirings expanded with an identity element",
"signature":{"+":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[0]},
"bgtheory":"Srng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x1 = x = 1x"],
"nmodels":[1, 4, 22, 169],
"properties":{},
"superclasses":["Srng"],
"subclasses":["IUSrng", "UZSrng"]
},
{"id":"ZSrng", "name":"Zero semirings",
"defn": "semirings expanded with an additive identity that is a multiplicative zero",
"bgtheory":"Srng",
"signature":{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70]},
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "x0 = 0 = 0x"],
"nmodels":[1, 4, 22, 283],
"properties":{},
"superclasses":["Srng"],
"subclasses":["IZSrng", "Rng", "UZSrng"]
},
{"id":"IUSrng", "name":"Idempotent unital semirings",
"defn": "unital semirings expanded with an idempotent operation",
"signature":{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
"bgtheory":"Srng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x1 = x = 1x", "xx = x"],
"nmodels":[1, 2, 11, 73, 703, 9195, 164163],
"properties":{},
"superclasses":["ISrng", "USrng"],
"subclasses":["Dio"]
},
{"id":"IZSrng", "name":"Idempotent zero semirings",
"defn": "zero semirings expanded with an idempotent operation",
"signature":{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
"bgtheory":"Srng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "x0 = 0 = 0x", "xx = x"],
"nmodels":[1, 2, 10, 68, 520, 4447],
"properties":{},
"superclasses":["ISrng", "ZSrng"],
"subclasses":["Dio"]
},
{"id":"UZSrng", "name":"Unital zero semirings",
"defn": "zero semirings expanded with a multiplicative identity",
"signature":{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
"bgtheory":"Srng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "x0 = 0 = 0x", "x1 = x = 1x"],
"nmodels":[1, 2, 6, 40, 295],
"properties":{},
"superclasses":["USrng", "ZSrng", "Shll"],
"subclasses":["URng", "Dio"]
},
{"id":"Dio", "name":"Dioids",
"defn": "idempotent unital zero semirings",
"signature":{"+":[2,"infixl",60], "0":[0], "\\cdot":[2,"infixomit",70], "1":[0]},
"bgtheory":"UZSrng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "x+x = x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "x0 = 0 = 0x", "x1 = x = 1x"],
"nmodels":[1, 1, 3, 20, 149, 1488, 18554, 295292],
"properties":{},
"superclasses":["IZSrng", "IUSrng", "UZSrng"],
"subclasses":["Triv"]
},
{"id":"Rng", "name":"Rings",
"defn": "zero semirings expanded with an additive inverse operation",
"signature":{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70]},
"bgtheory":"Srng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz"],
 "nmodels":[1, 2, 2, 11, 2, 4, 2, 52, 11, 4, 2, 22, 2, 4, 4, 390, 2, 22, 2, 22, 4, 4, 2, 104, 11, 4, 59, 22, 2, 8, 2],
"properties":{},
"superclasses":["ZSrng"],
"subclasses":["CRng", "URng"]
},
{"id":"CRng", "name":"Commutative rings",
"defn": "rings with a commutative multiplication",
"signature":{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70]},
"bgtheory":"Rng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz"],
"nmodels":[1, 2, 2, 9, 2, 4, 2, 34, 9, 4, 2, 18, 2, 4, 4, 162, 2, 18, 2, 18, 4, 4, 2, 68, 9, 4, 36, 18, 2, 8, 2],
"properties":{},
"superclasses":["Rng"],
"subclasses":["CURng"]
},
{"id":"URng", "name":"Unital rings",
"defn": "rings expanded with a multiplicative identity element",
"signature":{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
"bgtheory":"Rng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "(xy)z = x(yz)", "x(y+z) = xy + xz", "(x+y)z = xz + yz", "x+0 = x", "-x+x = 0", "x1 = x = 1x"],
"nmodels":[1, 1, 1, 4, 1, 1, 1, 11, 4, 1, 1, 4, 1, 1, 1, 50, 1, 4, 1, 4, 1, 1, 1, 11, 4, 1, 12, 4, 1, 1, 1, 208, 1, 1, 1, 16, 1, 1, 1, 11, 1, 1, 1, 4, 4, 1, 1, 50, 4, 4, 1, 4, 1, 11, 1, 11, 1, 1, 1, 4, 1, 1, 4],
"properties":{},
"superclasses":["UZSrng", "Rng"],
"subclasses":["CURng"]
},
{"id":"CURng", "name":"Commutative unital rings",
"defn": "unital rings with a commutative multiplication",
"signature":{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
"bgtheory":"Rng",
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x"],
"nmodels":[1, 1, 1, 4, 1, 1, 1, 10, 4, 1, 1, 4, 1, 1, 1, 37, 1, 4, 1, 4, 1, 1, 1, 10, 4, 1, 11, 4, 1, 1, 1],
"properties":{},
"superclasses":["CRng", "URng"],
"subclasses":["IDom"]
},
{"id":"IDom", "name":"Integral domains",
"defn": "commutative unital rings such that if a product is zero then one of the factors is zero",
"bgtheory":"CURng",
"signature":{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0]},
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x", "xy = 0 \\implies x = 0 \\text{ or } y = 0"],
"nmodels":"1 if $n$ is a prime power else 0",
"properties":{},
"superclasses":["CURng"],
"subclasses":["Fld"]
},
{"id":"Fld", "name":"Fields",
"defn": "commutative unital rings such that any nonzero element has a multiplicative inverse and 0,1 are distinct",
"bgtheory":"CURng",
"signature":{"+":[2,"infixl",60], "0":[0], "-":[1,"prefix",90], "\\cdot":[2,"infixomit",70], "1":[0], "^{-1}":[1, "postfix"]},
"axioms":["(x+y)+z = x+(y+z)", "x+y = y+x", "x+0 = x", "-x+x = 0", "(xy)z = x(yz)", "xy = yx", "x(y+z) = xy + xz", "x1 = x", "x \\ne 0 \\implies xx^{-1} = 1", "0\\ne 1"],
"nmodels":"1 if $n$ is a prime power else 0",
"properties":{},
"superclasses":["IDom"],
"subclasses":["Triv"]
},
{"id":"$\\lambda$Lat", "name":"$\\lambda$-lattices",
"defn": "sets with two commutative operations that satisfy some absorption laws",
"refs": "Snasel [1997], Kopytov and Dimitrov [1989]",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"axioms":["x\\vee y = y\\vee x", "x\\wedge y = y\\wedge x", "x\\vee((x\\vee y)\\vee z) = (x\\vee y)\\vee z", "x\\wedge((x\\wedge y)\\wedge z) = (x\\wedge y)\\wedge z", "x\\wedge(x\\vee y) = x = x\\vee (x\\wedge y)"],
"nmodels":[],
"properties":{},
"superclasses":["Alg(2,2)", "CBin"],
"subclasses":["Lat"]
},
{"id":"SkLat", "name":"Skew lattices",
"defn": "bands expanded with an associative idempotent operation that satisfies four outer absorption laws",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee (x\\wedge y)", "(x\\vee y)\\wedge y = y = (x\\wedge y)\\vee y"],
"nmodels":[1, 3, 7, 21, 53, 173],
"properties":{},
"superclasses":["Alg(2,2)", "Bnd"],
"subclasses":["Lat"]
},
{"id":"Lat", "name":"Lattices",
"defn": "skew lattices with both operations commutative",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)"],
"nmodels":[1, 1, 1, 2, 5, 15, 53, 222, 1078, 5994, 37622, 262776, 2018305, 16873364, 152233518, 1471613387, 15150569446, 165269824761],
"properties":{},
"superclasses":["$\\lambda$Lat", "SkLat"],
"subclasses":["BLat", "MLat", "SDJoin", "SDMeet", "RL"]
},
{"id":"RL", "name":"Residuated lattices",
"defn": "lattices with an associative monoid operation that has left and right residuals",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"Lat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x"],
"nmodels":[1, 1, 3, 20, 149, 1488, 18554, 295292],
"properties":{},
"superclasses":["Lat", "Mon"],
"subclasses":["CRL", "DRL", "IRL"]
},
{"id":"CRL", "name":"Commutative residuated lattices",
"defn": "residuated lattices with a commutative monoid operation",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"RL",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x", "xy = yx"],
"nmodels":[1, 1, 3, 16, 100, 794, 7493, 84961],
"properties":{},
"superclasses":["RL"],
"subclasses":["CDRL", "CIRL"]
},
{"id":"IRL", "name":"Integral residuated lattices",
"defn": "residuated lattices with the monoid identity as top element)",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"RL",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x", "x\\wedge 1 = x"],
"nmodels":[1, 1, 2, 9, 49, 364, 3335, 37026],
"properties":{},
"superclasses":["RL"],
"subclasses":["CIRL", "DIRL"]
},
{"id":"CIRL", "name":"Commutative integral residuated lattices",
"defn": "commutative residuated lattices with the monoid identity as top element",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"RL",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x", "xy = yx", "x\\wedge 1 = x"],
"nmodels":[1, 1, 2, 7, 26, 129, 723, 4712, 34698, 290565, 2779183, 30653419],
"properties":{},
"superclasses":["CRL", "IRL"],
"subclasses":["CDIRL"]
},
{"id":"BLat", "name":"Bounded lattices",
"defn": "lattices that have a bottom element and a top element",
"signature":{"\\vee":[2,"infixl",60], "0":[0], "\\wedge":[2,"infixl",60], "1":[1]},
"bgtheory":"Lat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\wedge(y\\vee (x\\wedge z)) = (x\\wedge y)\\vee(x\\wedge z)", "x\\vee 0 = x", "x\\wedge 1 = x"],
"nmodels":["Lat"],
"properties":{},
"superclasses":["Lat"],
"subclasses":["BDLat"]
},
{"id":"MLat", "name":"Modular lattices",
"defn": "lattices that satisfy the modular law",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"bgtheory":"Lat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\wedge(y\\vee (x\\wedge z)) = (x\\wedge y)\\vee(x\\wedge z)"],
"nmodels":[1, 1, 1, 2, 4, 8, 16, 34, 72, 157, 343, 766, 1718, 3899, 8898, 20475, 47321, 110024, 256791, 601991, 1415768, 3340847],
"properties":{},
"superclasses":["Lat"],
"subclasses":["DLat"]
},
{"id":"SDJoin", "name":"Join-semidistributive lattices",
"defn": "lattices that satisfy join-semidistributivity",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"bgtheory":"Lat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\vee y = x\\vee z\\implies x\\vee(y\\wedge z) = (x\\vee y)"],
"nmodels":[1, 1, 1, 2, 4, 9, 23, 65, 197, 636, 2171, 7756, 28822, 110805],
"properties":{},
"superclasses":["Lat"],
"subclasses":["SDLat"]
},
{"id":"SDMeet", "name":"Meet-semidistributive lattices",
"defn": "lattices that satisfy meet-semidistributivity",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"bgtheory":"Lat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\wedge y = x\\wedge z\\implies x\\wedge(y\\vee z) = (x\\wedge y)"],
"nmodels":[1, 1, 1, 2, 4, 9, 23, 65, 197, 636, 2171, 7756, 28822, 110805],
"properties":{},
"superclasses":["Lat"],
"subclasses":["SDLat"]
},
{"id":"SDLat", "name":"Semidistributive lattices",
"defn": "lattices that are join and meet-semidistributive",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"bgtheory":"Lat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\vee y = x\\vee z\\implies x\\vee(y\\wedge z) = (x\\vee y)", "x\\wedge y = x\\wedge z\\implies x\\wedge(y\\vee z) = (x\\wedge y)"],
"nmodels":[1, 1, 1, 2, 4, 9, 22, 60, 174, 534, 1720, 5767, 20013, 71546],
"properties":{},
"superclasses":["SDJoin", "SDMeet"],
"subclasses":["DLat"]
},
{"id":"DLat", "name":"Distributive lattices",
"defn": "lattices with meet distributing over join (or equivalently join distributing over meet)",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60]},
"bgtheory":"Lat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)"],
"nmodels":[1, 1, 1, 2, 3, 5, 8, 15, 26, 47, 82, 151, 269, 494, 891, 1639, 2978, 5483, 10006, 18428, 33749, 62162, 114083, 210189, 386292, 711811, 1309475, 2413144, 4442221, 8186962, 15077454, 27789108, 51193086, 94357143, 173859936, 320462062, 590555664, 1088548290, 2006193418, 3697997558, 6815841849, 12563729268, 23157428823, 42686759863, 78682454720, 145038561665, 267348052028, 492815778109, 908414736485],
"properties":{},
"superclasses":["MLat", "SDLat"],
"subclasses":["BDLat", "BrouwA", "DRL"]
},
{"id":"BDLat", "name":"Bounded distributive lattices",
"defn": "distributive lattices with a bottom and a top element",
"signature":{"\\vee":[2,"infixl",60], "0":[0], "\\wedge":[2,"infixl",60], "1":[1]},
"bgtheory":"DLat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)", "x\\vee 0 = x", "x\\wedge 1 = x"],
"nmodels":["DLat"],
"properties":{},
"superclasses":["BLat", "DLat"],
"subclasses":["HA"]
},
{"id":"DRL", "name":"Distributive residuated lattices",
"defn": "residuated lattices with meet distributing over join (or equivalently join distributing over meet)",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"RL",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)"],
"nmodels":[1, 1, 3, 16, 81],
"properties":{},
"superclasses":["RL", "DLat"],
"subclasses":["CDRL", "DIRL"]
},
{"id":"CDRL", "name":"Commutative distributive residuated lattices",
"defn": "distributive residuated lattices with a commutative monoid operation",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"RL",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)", "xy = yx"],
"nmodels":[1, 1, 3, 16, 70, 345],
"properties":{},
"superclasses":["CRL", "DRL"],
"subclasses":["CDIRL"]
},
{"id":"DIRL", "name":"Distributive integral residuated lattices",
"defn": "distributive residuated lattices with the monoid identity as top element",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"RL",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)", "x\\wedge 1 = x"],
"nmodels":[1, 1, 2, 9, 49, 359],
"properties":{},
"superclasses":["DRL", "IRL"],
"subclasses":["CDIRL"]
},
{"id":"CDIRL", "name":"Commutative distributive integral residuated lattices",
"defn": "commutative distributive residuated lattices with the monoid identity as top element",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"bgtheory":"RL",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "(xy)z = x(yz)", "x1 = x = 1x", "x = x\\wedge((xy \\vee z)/y)", "x = x\\wedge(y\\backslash(yx \\vee z))", "(x/y)y \\vee x = x", "y(y\\backslash x) \\vee x = x", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)", "xy = yx", "x\\wedge 1 = x"],
"nmodels":[1, 1, 2, 7, 26, 124, 645],
"properties":{},
"superclasses":["CDRL", "CIRL", "DIRL"],
"subclasses":["BrouwA", "BHoop"]
},
{"id":"BHoop", "name":"Basic Hoops",
"defn": "prelinear generalized basic algebras",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "\\cdot":[2,"infixomit",70], "1":[1], "\\backslash":[2,"infixr",50], "/":[2,"infixr",50]},
"axioms":[],
"nmodels":[1, 1],
"properties":{},
"superclasses":["CDIRL"],
"subclasses":[]
},
{"id":"BrouwA", "name":"Brouwerian algebras",
"defn": "relatively pseudo-complemented lattices with a top element",
"signature":{"\\vee":[2,"infixl",60], "\\wedge":[2,"infixl",60], "1":[1], "\\to":[2,"infixr",50]},
"bgtheory":"DLat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\wedge 1 = x", "x\\to x = 1", "x\\wedge(x\\to y) = x\\wedge y", "(x\\to y)\\wedge y = y", "x\\to(y\\wedge z) = (x\\to y)\\wedge(x\\to z)"],
"nmodels":["DLat"],
"properties":{},
"superclasses":["CDIRL", "DLat"],
"subclasses":["HA"]
},
{"id":"HA", "name":"Heyting algebras",
"defn": "relatively pseudocomplemented bounded distributive lattices",
"signature":{"\\vee":[2,"infixl",60], "0":[0], "\\wedge":[2,"infixl",60], "1":[1], "\\to":[2,"infixr",50]},
"bgtheory":"BDLat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\vee 0 = x", "x\\wedge 1 = x", "x\\to x = 1", "x\\wedge(x\\to y) = x\\wedge y", "(x\\to y)\\wedge y = y", "x\\to(y\\wedge z) = (x\\to y)\\wedge(x\\to z)"],
"nmodels":["DLat"],
"properties":{},
"superclasses":["BDLat", "BrouwA"],
"subclasses":["GAlg"]
},
{"id":"GAlg", "name":"G&ouml;del algebras",
"defn": "prelinear Heyting algebras, i.e. subdirectly irreducibles are linear",
"signature":{"\\vee":[2,"infixl",60], "0":[0], "\\wedge":[2,"infixl",60], "1":[1], "\\to":[2,"infixr",50]},
"bgtheory":"HA",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\vee 0 = x", "x\\wedge 1 = x", "x\\to x = 1", "x\\wedge(x\\to y) = x\\wedge y", "(x\\to y)\\wedge y = y", "x\\to(y\\wedge z) = (x\\to y)\\wedge(x\\to z)", "(x\\to y)\\vee(y\\to x) = 1"],
"nmodels":[1, 1, 1, 2, 2, 3, 3, 5, 6, 8, 8, 12],
"properties":{},
"superclasses":["HA"],
"subclasses":["BA"]
},
{"id":"BA", "name":"Boolean algebras",
"defn": "complemented distributive lattices",
"signature":{"\\vee":[2,"infixl",60], "0":[0], "\\wedge":[2,"infixl",60], "1":[1], "\\neg":[1,"prefix",65]},
"bgtheory":"DLat",
"axioms":["(x\\vee y)\\vee z = x\\vee (y\\vee z)", "x\\vee y = y\\vee x", "x\\vee x = x", "(x\\wedge y)\\wedge z = x\\wedge(y\\wedge z)", "x\\wedge y = y\\wedge x", "x\\wedge x = x", "x\\wedge(x\\vee y) = x = x\\vee(x\\wedge y)", "x\\wedge(y\\vee z) = (x\\wedge y)\\vee(x\\wedge z)", "x\\vee\\neg x = 1", "x\\wedge\\neg x = 0"],
"nmodels":"1 if $\\ \\exists k\\ n=2^k$ else 0",
"properties":{},
"superclasses":["GAlg", "MV"],
"subclasses":["Triv"]
},
{"id":"Triv", "name":"Trivial algebras",
"defn": "algebras with exactly one element",
"signature":{},
"axioms":["x=y"],
"nmodels":"1 if $n=1$ else 0",
"properties":{},
"superclasses":["BA", "BoolGrp", "Dio", "Fld", "USlat"],
"subclasses":[]
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
      if (!(sc[i] in idx)) alert(sc[i]+" unknown superclass");
      else if (ind <= idx[sc[i]]["indent"]) ind = idx[sc[i]]["indent"]+1;
    }
    cts[c]["indent"] = ind;
  }
  for (c in cts) {
    sc = cts[c].superclasses;
    for (i in sc) {
      if (idx[sc[i]].subclasses.indexOf(cts[c].id)==-1) alert(cts[c].id+" not a subclass of "+sc[i]); 
    }
    sc = cts[c].subclasses;
    for (i in sc) {
      if (!(sc[i] in idx)) alert(sc[i]+" unknown subclass");
      if (idx[sc[i]].superclasses.indexOf(cts[c].id)==-1) alert(cts[c].id+" not a superclass of "+sc[i]); 
    }
  }
  ms.innerHTML = "";
  for (c in cts) {
    len = cts[c].axioms.length;
    elt = document.createElement("li");
    elt.style.cssText = "margin-left: "+(2*cts[c]["indent"])+"em"
    st = "<b><a href=\"http://en.wikipedia.org/wiki/"+cts[c].name+"\">"+
       cts[c].name+"</a></b> (<b>"+cts[c].id+"</b>): "+cts[c].defn+" ("+
       (cts[c].superclasses.length!=0?"below <b>"+cts[c].superclasses.join(", ")+
       "</b>, ":"")+
       (cts[c].subclasses.length!=0?"above <b>"+cts[c].subclasses.join(", ")+
       "</b>":"")+")"+
       (document.getElementById("axioms").checked?(len!=0?"<br/>Axioms: ":"")+
       ("bgtheory" in cts[c]?"<b>"+cts[c].bgtheory+"</b> and $"+
       differenceList(cts[c].axioms,idx[cts[c].bgtheory].axioms).join("$, $"):
       (len!=0?"$":"")+cts[c].axioms.join("$, $"))+(len!=0?"$":""):"")+
       (document.getElementById("nmodels").checked?"<br/>Models of size n: "+
       (typeof(cts[c].nmodels)=="string"?cts[c].nmodels:cts[c].nmodels.join(", ")):"");
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
