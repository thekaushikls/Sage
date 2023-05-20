# Topoceros
Created : 05-05-2023 11:17

## Why?

I have been working a bit on **Data Structures** in the Rhino / Grasshopper space. One interesting find was that a `Brep` somewhat resembles a graph of interconnected sub-elements that can be traversed.

In theory, you can start at any sub-element of the Brep (Vertex / Edge / Face) and find a relationship (or path) to any other sub-element in the same Brep.

As a part of my learning process, I wanted to try playing around with this, to see if this can be used anywhere in the building industry. But then out-of-the-box Grasshopper provided no access to these methods. So, I ended up creating a small extension toolset that exposes the said features as grasshopper components.

## How?
The way a Brep is constructed shows that each `BrepVertex` already knows the `AdjacentEdges`, each `BrepEdge` already knows `AdjacentFaces`, and each `BrepFace` already knows its `AdjacentFaces`. A combination of these can allow us to find any neighboring element to a given element. Repeat this enough times, and you're already traversing towards your goal.

The only hiccup was, when sub-element is output from the component, Grasshopper automatically converts it to geometric elements, and information is lost.

`BrepVertex`  gets converted into `Point3d`
`BrepEdge` gets converted into `Curve`
`BrepFace` gets converted into `Surface`

My first task was to write a wrapper class, that essentially holds the said element (like a wrapper), to prevent automatic conversions. Then, I had to implement standard Grasshopper component protocols, to make it work seamlessly with other components.

## What?
A Grasshopper plugin that exposes topology of `Rhino.Geometry.Brep` objects.

## Tags
#Grasshopper3d #Plugin #Topology #BREP #Graph #DataStructure

## References
1. 