# Topologic Graph Machine learning
*Created* : 17-07-2023 16:19
<br>*Tags* : 
---

Topologic is based on OpenCascade BREP.

## What are Graphs?
Consits of VertexSet and Edge Set.
Vertex set cannot be empty.
Edge Set can be empty, or filled (with pair of vertices)
IFC is graph based. It has references between objects, which can be represented as graphs

#### Shortest Path
1. Calculated by Edge Length (Distance)
2. Based on Weighted Edge
3. Based on number of hops () Vertices in between) = Topological distance

#Centrality - some info given to vertex based on connectivity and valency / degree
#Betweenness - value that indicates how many times 'this' node is passed through when calculating centrality. (traverse from each node to every node)
#EmbeddingDataInGraphElements - every element holds a dictionary of values.
#CellComplex - Enclosed, made of cells, has separating faces (similar to half-edges).

#PrimaryGraph - representation of cellcomplex with just edges and nodes
#DualGraph - representation of space between the cellcomplex (Rooms)  are represented as vertices.
So this graph actually spans from centroid to centroid
#MinimumSpanningTree - minimum tree structure that visits all vertices exactly once ina cyclic manner.







## Questions 
1. Topologic uses Non-Manifold cell-complexes. How does the data structure look like?
2. Question about API design. What is the reason to make all the methods work like a static method? Why not implement like " vertex.SetDictionary(my_dictionary) "?

## About

## References
1. [Topologic]

---
## Read Also
