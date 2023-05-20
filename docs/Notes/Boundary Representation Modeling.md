# Boundary Representation Modeling
*Created* : 16-05-2023 12:42
<br>*Tags* : #BREP #Geometry #CAD #Mathematics #CAM #Modeling
---

## About

* `BREP` is a technique to represent complex 3D geometry by defining the boundaries between solid and void (outside / non-solid) geometries.
* They are not built from atomic sub objects such as vertices, curves, etc. instead by mathematical relationships between its surfaces.
* Complex objects are created by combining more surface relationships.

### Advantages

1. Mathematically precise geometry can be created.
2. Does not loose resolution when magnified. (Since the relationship is defined by formulae)
3. Complex, often doubly-curved surfaces and geometries can be created, and modified with ease.

### Disadvantages

1. Store a lot of data, and are storage heavy.
2. Visualization of `BREP` objects are resource consuming. They need to be converted to Meshes or other types for display.
3. Truly organic geometry is hard to create, because it is hard to identify the precise mathematical formulae. 

## Application

* `BREP` modeling is useful to represent 3D geometry with high accuracy.
* CAD / CAM systems that allow complex modeling typically use `BREP` objects.

# References
1. [Spatial.com](https://blog.spatial.com/the-main-benefits-and-disadvantages-of-brep-modeling)

---
## Read Also
1. [Hybrid Modeling](Hybrid%20Modeling.md)
