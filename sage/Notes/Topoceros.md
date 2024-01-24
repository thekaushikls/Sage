# Topoceros
*Created* : 05-05-2023 11:17
<br>*Tags* : #Grasshopper #Plugin #Topology #OpenSource #MIT #Project #BREP #Graph #DataStructure #dotNET #Rhino
---
## Introduction

I have been working a bit on Data Structures in the Rhino / Grasshopper and .NET environment. One of the interesting ideas I came across was to utilize the topology of a `Brep` to perform traversal operations since the structure of a `Brep` somewhat resembles a graph of interlinked sub-elements.

In theory, one can start at any sub-element (Vertex / Edge / Face) and find it's neighboring sub-element(s). Repeat this enough times (the right way), and we have our goal sub-element reached. This could be used to understand the topology of complex geometries, perform checks based on neighboring element(s), or even filter and extract geometric information. As a part of exploring this idea and learning more, I wanted to try using with the `Brep` object from RhinoCommon. 
	
!!! tip "Trivia"
	The name 'Topoceros' is a combination of 'Topology' and 'Rhinoceros' - representing the topological extensions to Rhinoceros(software).

## Get Topoceros
See also [Usage](#usage)

1. ✅ Stable release on [food4Rhino.com](https://www.food4rhino.com/en/app/topoceros) or Package Manager
2. ⭕ Build from [GitHub Repo](https://github.com/thekaushikls/Topoceros/releases/latest)

!!! tip "Package Manager"
	Paste this command on your Rhino command to access Topoceros instantly
	```
	_-PackageManager Search Topoceros
	```
<figure markdown>
  ![Topoceros Package Manager](https://raw.githubusercontent.com/thekaushikls/Topoceros/main/Assets/Topoceros_PackageManager.png)
  <figcaption><a href="https://github.com/thekaushikls/Topoceros" target="_blank">Topoceros</a> can be installed directly from the <a href="https://developer.rhino3d.com/guides/yak/what-is-yak/" target="_blank">Yak Package Manager</a></figcaption>
</figure>

## Scope

The aim involves being able to traverse between Vertex, Edge, and Face interchangeably. Which means, any of these three types of objects need to access their topologically-adjacent members - which could also be either a Vertex, or an Edge, or a Face.

<figure markdown>
  ![Topoceros Edge Walk](https://raw.githubusercontent.com/thekaushikls/Topoceros/main/Assets/Topoceros_EdgeWalk_Compressed.gif)
  <figcaption><a href="https://github.com/thekaushikls/Topoceros" target="_blank">Topoceros</a> Edge Walk</figcaption>
</figure>

The following table shows what is already implemented in RhinoCommon

| Sub-Element | AdjacentVertices | AdjacentEdges | AdjacentFaces |
| :--- | :---: | :---: | :---: |
| `BrepVertex` | ❌ | ❌ | ❌ |
| `BrepEdge` | ⚠️ | ❌ | ✅ |
| `BrepFace` | ❌ | ✅ | ✅ |

❌ - Not Implemented
✅ - Implemented 
⚠️ - Partially Implemented

Before these additional methods are implemented, it is preferable to define what the terms - Adjacent Vertices / Edges / Faces, mean for each Sub-Element type.

### Adjacent Vertices

1. for a **VERTEX** - refers to all the vertices that immediately surround the current vertex, and have an edge connected to them.
2. for an **EDGE** - refers to the pair of Start and End vertices of the current edge.
3. for a **FACE** - refers to all the vertices that surround the current face.

### Adjacent Edges
	
1. for a **VERTEX** - refers to all the edges that start or end from the current vertex.
2. for an **EDGE** - refers to the collection of `AdjacentEdges` of both Start and End vertices of the current edge.
3. for a **FACE** - refers to all the edges that make up the boundary of the current face.

### Adjacent Faces

1. for a **VERTEX** - refers to all the faces that have one or more edges adjacent to the current vertex.
2. for an **EDGE** - refers to all the faces that is bounded by the current edge.
3. for a **FACE** - refers to all faces that surround the current face.

## Implementation Strategies

**TL;DR**

* Components need to look and behave similar to the native components.
* Components need to support casting from / to native data types when required.
* Data needs to Serializable, so it can be retained in the file(s).

### 0. Building the MVP

<figure markdown>
  ![Python MVP](https://raw.githubusercontent.com/thekaushikls/Topoceros/main/Assets/Topoceros_PythonMVP.png)
  <figcaption>Testing the Python MVP</figcaption>
</figure>

To test the idea, I created a simplified version using the `GhPython` scripting components. While it is not feature rich, it works! It is possible to perform graph traversal like operations on a `Brep` . A more sophisticated version would be worth the time.

But first, here is what I learnt from building the MVP.

### 1. Extending RhinoCommon

The straightforward way to implement the above missing methods would be to add `Extension Methods` directly for the existing classes. However, life is not that simple, and there are a few challenges yet to be addressed.

<figure markdown>
  ![Type casting in native component](https://raw.githubusercontent.com/thekaushikls/Topoceros/main/Assets/Topoceros_CastingProblem.png)
  <figcaption>Type casting in native component</figcaption>
</figure>

It is to be noted that the `BrepVertex`, `BrepEdge`, and `BrepFace` classes inherit from Point, Curve, and Surface classes respectively. When one of these objects are output from a `GH_Component` object, it is automatically casted to the base classes resulting in loss of information about its topology.

### 2. Wrapping them instead!

Writing wrapper classes although a long route, currently seems like the best approach that balances between easy implementation, and avoiding complexity. As a bonus, custom Interfaces can be implemented to identify the wrapped objects when we create Grasshopper Components.

| RhinoCommon | Wrapper |
| :---: | :---: |
| BrepVertex | [Topoceros.Vertex](https://github.com/thekaushikls/Topoceros/blob/main/Topoceros/Geometry/Vertex.cs) |
| BrepEdge | [Topoceros.Edge](https://github.com/thekaushikls/Topoceros/blob/main/Topoceros/Geometry/Edge.cs) |
| BrepFace | [Topoceros.Face](https://github.com/thekaushikls/Topoceros/blob/main/Topoceros/Geometry/Face.cs) |

### 3. UX Considerations

Although it is exciting to work on implementing custom component UI , or viewport graphics, this project aims to make the user-experience as seamless as possible. 

Also, since the components only expose the already available methods, it is preferable not to create a new plugin tab, and instead be added to the relevant existing tabs - `Surface` tab in this case.

<figure markdown>
  ![Topoceros provides near-native experience](https://raw.githubusercontent.com/thekaushikls/Topoceros/main/Assets/Topoceros_UxUiConsiderations.png)
  <figcaption><a href="https://github.com/thekaushikls/Topoceros" target="_blank">Topoceros</a> provides near-native experience</figcaption>
</figure>

As an additional touch *(or the exception to the above ideology)* - it would be wiser to implement a custom `ToString()` method that explicitly shows that the output is not a native Grasshopper object. This is to inform the user that additional features are available, but also additional steps are required to extract the native geometry from these objects.



## Usage

<figure markdown>
  ![Topoceros Components](https://raw.githubusercontent.com/thekaushikls/Topoceros/main/Assets/Topoceros_Components.png)
  <figcaption><a href="https://github.com/thekaushikls/Topoceros" target="_blank">Topoceros</a> components can be found under the <b>Surface Tab</b></figcaption>
</figure>

## Example
### 1. Space Syntax & Planning

<figure markdown>
  ![Topoceros Space Syntax](https://raw.githubusercontent.com/thekaushikls/Topoceros/main/Assets/Topoceros_Sample_SpaceSyntax_Compressed.gif)
  <figcaption><a href="https://github.com/thekaushikls/Topoceros" target="_blank">Topoceros</a> Space Syntax</figcaption>
</figure>

??? note "Pending / Thoughts	"
	1. Understanding how spaces are arranged, and how they are connected.
	2. Can it be used as a criteria to test fitness of plan?

## References
1. [RhinoCommon: Brep class](https://developer.rhino3d.com/api/rhinocommon/rhino.geometry.brep)

---
## Read Also
1. [Boundary-Representation-Modeling](../../Notes/Boundary-Representation-Modeling.md)
2. [Doubly-Connected-Edge-List](Doubly-Connected-Edge-List.md)
3. [DCEL-Implementation](DCEL-Implementation.md)
