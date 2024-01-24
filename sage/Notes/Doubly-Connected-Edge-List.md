# Doubly-Connected-Edge-List
*Created* : 16-02-2022 10:13
<br>*Tags* : #DataStructure #DCEL #Mesh #Geometry #Modeling #Graph #HalfEdge #SubDivision #PlanarGraph #HDS
---

!!! note
	For implementation details, see [DCEL-Implementation](DCEL-Implementation.md)

## About

* Also known as Half-Edge Data Structure HDS, or Planar Graph.
* The Doubly Connected Edge List or DCEL is a type of graph data structure that represents 2D geometry.
* A DCEL can represent most geometries using considerably less memory.
* It provides a balanced solution between complication and sophistication of handling large mesh-like geometry data.

## Basic Structure

### Vertex
* Vertex belongs as a reference in the Half-Edge. But can also exist as individual object directly on the DCEL.
* Represents a point / location in 2D or 3D space.
* Corners, Edge Intersections, etc. are represented by Vertices.

!!! question 
	Can a vertex be considered as a Half-Edge that starts and ends at the same place? *(A zero length Half-Edge)*

### Half-Edge
* Half-Edge belongs directly in the DCEL.
* Represents a connection between 2 vertices, typically a Line Segment.
* Also forms a part of the boundary of a Face that it belongs to.

### Face
* Face belongs as a reference in the Half-Edges.
* Represents any region surrounded by edges, typically a surface.
* There is one default face - Outer Face in a DCEL that may / may not consist the outer boundary.

## Adaptation

Various implementations of DCEL exist, and for various purposes. There are ones that allow overlapping (but not intersecting) half-edges, and even to represent 3-dimensional geometry.

!!! info "Traversal"
	Since a DCEL is a type of Graph Data Structure, all its members can be traversed by querying the right half-edge.

!!! tip "Implementation"
	DCEL is a low-level implementation layer. User control is provided by wrapper classes.

### Advantage over BREP
* Unlike a BREP, they do not allow intersection / overlapping edges. They implement sub-division automatically.

### Advantages over Mesh
* Unlike a mesh, DCEL stores information using half-edges. These half-edges are then queried to obtain information about vertices, and faces.

## References
1. [Designing and implementing a general purpose halfedge data structure](https://graphics.stanford.edu/courses/cs268-16-fall/Notes/halfedge.pdf) by Hervé Brönnimann
2. [CGAL 5.5.2 - Halfedge Data Structures]([https://doc.cgal.org/latest/HalfedgeDS/index.html](https://doc.cgal.org/latest/HalfedgeDS/index.html))
3. [Processing Basics and Geometric Predicates](https://w3.cs.jmu.edu/bowersjc/page/courses/spring17/cs480/labs/processing1/) by John C. Bowers
4. [Half-Edge Data Structure](https://w3.cs.jmu.edu/bowersjc/page/courses/spring17/cs480/labs/dcel/) by John C.Bowers
5. [DoublyConnectedEdgeList by Gimly](https://github.com/Gimly/DoublyConnectedEdgeList) on GitHub
6. [2IMA15 by t1jsh111](https://github.com/t1jsh111/2IMA15) on GitHub
7. [2.2 Doubly Connected Edge List | Computational Geometry | Line Segment Intersection](https://www.youtube.com/watch?v=iyU6UVrg__o)  by [Bharath Chandra Thakkallapally](https://www.youtube.com/@nani9849158308) on YouTube
8. [04 01 Doubly connected edge list](https://www.youtube.com/watch?v=enb13mZ7Pq4&list=PLtTatrCwXHzEqzJMaTUFgqoCNllgwk4DH) by [peyman afshani](https://www.youtube.com/@peymanafshani9304) on YouTube

---
## Read Also
1. [Boundary-Representation-Modeling](../../Notes/Boundary-Representation-Modeling.md)
2. [DCEL-Implementation](DCEL-Implementation.md)
3. [Topoceros](Topoceros.md)
