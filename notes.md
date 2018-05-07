Notes about redesigning the mathstructures pages

1. The data resides on GitHub.

2. JSON is used for data about categories, objects and morphisms.

3. A category is defined by extending other categories with additional operations, relations and axioms.
The syntax for axioms is "standard" unicode parsable mathematical notation for higher-order logic, based on a
signature for operation and relation symbols. Free variables in axioms are assumed to be universally quantified.

4. A category can have several equivalent definitions. Some categories simply redirect to other categories.
When a category extends (several) other categories, the unicode symbols in the signature can be renamed.

5. List of the main categories that are used as base categories for subcategories and extensions:

  * Alg(n1,n2,...)     category of algebras with operations of arity n1 ≥ n2 ≥ ...
  * Semigroups
  * Monoids
  * Groups
  * Semirings
  * Rings
  * Fields
  * Semilattices
  * Lattices
  * Bounded lattices
  * Distributive lattices
  * Bounded distributive lattices
  * Heyting algebras
  * Boolean algebras
  * Residuated lattices
  * FL-algebras
  * Partially ordered sets
  * Totally ordered sets
  * Vector spaces
  * Vector lattices
  * Algebras
  * Coalgebras
  * Partial algebras
  * Topological spaces
  * Frames
  * ...

6. Each base category has its own HTML page with direct links to all subcategories and extension categories.
These associated categories are defined in a single JSON file.

7. HTML files are generated from the JSON files about categories.

8. Category data includes list of properties with optional references. Properties that can be derives from 
other data are not included in the primary JSON files
