# DCEL-Implementation
*Created* : 16-02-2022 10:13
<br>*Tags* : #DataStructure #DCEL #Mesh #Geometry #Modeling #Graph #HalfEdge #SubDivision #PlanarGraph #HDS
---

## Quick Reference
!!! note
	For basics, see [Doubly-Connected-Edge-List](Doubly-Connected-Edge-List.md)

``` DCEL
DCEL
│  └── Vertex List
│  └── HalfEdge List
│  └── Face List
```

``` Vertex
Vertex
│  └── Parent DCEL
│  └── Index
│  └── Location
│  └── Incoming HalfEdge List
│  └── Outgoing HalfEdge List
```

``` HalfEdge
HalfEdge
│  └── Parent DCEL
│  └── Origin Vertex
│  └── Destination Vertex
│  └── Previous HalfEdge
│  └── Next HalfEdge
│  └── Twin HalfEdge
│  └── Incident Face
│  └── Index
```

``` Face
Face
│  └── Parent DCEL
│  └── Incident HalfEdge
│  └── Index
```

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
1. [Doubly-Connected-Edge-List](Doubly-Connected-Edge-List.md)
2. [Topoceros](Topoceros.md)
