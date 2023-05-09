# Half-Edge Data Structure - Theory
Created : 05-03-2022 14:52

* One of the problems in computer geometry, is storage of complex 3d models in a simple-to-understand format.
* A straight forward way to store these would be to store each individual element as a seperate object.
* Example: If I want to store a 3x3 hexagonal grid, I would store 6 hexagons, and their relative positions. Each hexagons would store either the vertices (or line segments) that it contains.
* This maybe easy to understand for a human, but it comes at a cost. The edges / vertices shared by two or more hexagons, are stored in each hexagon. This not only creates the storage space, but also makes the structure prone to errors.
* Imagine making any manipulation to the grid, all three (or more) copies need to be updated.
* The Half Edge Data structure solves this problem by considering the entire geometry as a single topology map.
* This map can be traversed (walked) in different routes, to find different hexagons.
* All elements are stored only once. But, each inner element is built based on the memory reference to the originally stored element.
* So, if two hexagons share a common edge. There is only one edge stored in memory, but referenced in two places (one in each hexagon).
* To take things up further, the edges are slpit into a pair Half Edges, each representing one side of the edge. (Left Hexagon and Right Hexagon)
* These Half Edges are constructed in a way, that it knows to which element / face it belongs to, who is the next half-edge, who was the previous half-edge, and references to the vertices as origin and destination.
* Closed shapes inside the map, containing a collection of continous half-edges are called faces. Faces are also purely reference objects, built from half-edges. So, it is safe to say, each hexagon in our example, is a face containing 6 unique half-edges each.
* Since the half-edges know their previous / next members, they also called Double Connected lists. Hence the alias **Doubly Connected Edge List** for **Half-Edge Data Structures (HDS)**.
* This structure might feel complex at first, but seems easy to understand / implement with a fair amount of tries.
* Everytime any part is updated, only the references are updated. So, the rate of file size increase is lower than the other method.
* But, the amount of looping, and updating the references might be a caveat depending on the exact implementation. Parallel processing / multi-threading might help. 

## References
1. [DCEL Topology](DCEL%20Topology.md)
2. [Half-Edge Data Structure](Half-Edge%20Data%20Structure.md)