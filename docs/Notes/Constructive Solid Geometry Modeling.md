# Constructive Solid Geometry Modeling
*Created* : 16-05-2023 12:32
<br>*Tags* : #CSG #CAD #Geometry #Assembly #Boolean #Set #BinaryTree #Modeling
---

## About

* `CSG` is a solid modeling technique where consecutive Boolean operations between two primitive / composite geometries are used to create more complex geometries. 
* `CSG` objects can be represented by a binary tree, where the leaves represent primitive geometries, and nodes represent either the boolean operation or the result of the operation.

## Operations

General Set operations are possible on `CSG` objects, which include:
1. Boolean Union
2. Boolean Difference
3. Boolean Intersection

## Application

* Most CAD systems use an implementation of `CSG` Objects.
* `CSG` objects are useful when:
	1. **mathematical accuracy** is important, for manufacturing, representing tool cuts, etc.
	2. relatively **simple geometric assemblies are required**.

## References
1. [Wikipedia: Constructive Solid Geometry](https://en.wikipedia.org/wiki/Constructive_solid_geometry)

---
## Read Also
1. [Hybrid Modeling](Hybrid%20Modeling.md)
