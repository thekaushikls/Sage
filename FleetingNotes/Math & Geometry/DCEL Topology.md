# DCEL Topology
Created : 16-02-2022 10:13

* DCEL is a data structure logic for planar complex shapes. It handles sub-divisions in a geometric surface.
* The surface is divided into Points / Vertices, Edges, and Faces.
* **Planar graphs** do not have intersecting / overlapping edges. (Ex: Triangulated mesh)
* **Complexity** is the sum of the (number of faces, number of vertices, and number of edges)
* Face and it's edges are **Incident**. So are Edges and their respective vertices.
* Two copies of edges are stored: One for each direction.
* Each face can be constructed by moving clockwise through the edges.
* This results in all the faces (including the outer / entire) being clockwise.
* The outer face is made up of counter-clockwise edges because it is outside.
* Every edge is a pointer to the face it surrounds. 
* Can find one face from another using the common edge.
* Can find all edges at a vertex.
* So, even if an edge seems to be shared by two faces, since we have two copies, since the directions are different, they are different objects.
* Each edge also points to its twin (edge in oposite direction)
* Edges around a face are in a linked-list, to understand the previous, and next objects.
* Each face points to only one edge. Since a face can have unspecified number of edges, it becomes unfeasible to store/point to all edges. Since edges can be traversed (previous/next), the entire face can be identified from just s single edge.
* Each edge is a combination of two half-edges, in opposite directions called twins.
* when transversing, the face the edge represents is always on it's left (clockwise).
* Consider convention: Inside -> Clockwise, Outside -> Counter-clockwise.

`Edge(startPoint, endPoint, *twinEdge, *prevEdge, *nextEdge, *refFace*)`

* Polygon direction can be found using the **`SIGNED AREA`**  of triangle.
	* if Area < 0 -> Clockwise / Right-Hand-Turn
	* If Area > 0 -> Anti-Clockwise / Left-Hand-Turn
	* If Area is 0 -> Points are collinear.
* Direction of any polygon can be found by looping through **`PREVIOUS, CURRENT, NEXT`** 

* DCEL structure stores three kinds of objects,
	1. Vertices
	2. Faces
	3. Half-Edges

* Half-Edge stores five references,
	1. Reference to Origin Vertex
	*(`destination of he1 = he1.twin.origin`)* or
	*(`destination of he1 = he1.next.origin`)*
	1. Reference to Origin Face
	2. Reference to Prev / Next Half-Edges
	3. Reference to it's Twin Half-Edge
	4. Reference to Twin Face

* Each Face stores,
	1. Reference to any one Half-Edges. Every other edge(along with the origin_vertex) can be found from this one edge)

## References
1. https://www.youtube.com/watch?v=enb13mZ7Pq4&list=PLtTatrCwXHzEqzJMaTUFgqoCNllgwk4DH
2. https://www.youtube.com/watch?v=iyU6UVrg__o
3. https://github.com/t1jsh111/2IMA15
4. https://github.com/Gimly/DoublyConnectedEdgeList
5. https://w3.cs.jmu.edu/bowersjc/page/courses/spring17/cs480/labs/processing1/
6. https://w3.cs.jmu.edu/bowersjc/page/courses/spring17/cs480/labs/dcel/