# Voxel-Modeling
*Created* : 16-05-2023 13:02
<br>*Tags* : #Voxel #Geometry #CAD #Modeling #Minecraft #Pixel #Atomic #CGI #Rendering #ProxyElements #Context #WhiteModel
---

## About

* Voxel modeling refers to the technique of using 3D pixels to represent geometry in 3D space.
* The popular game Minecraft is a great example of how a voxel geometries might look like.

## Voxel

* A `voxel` is a arbitrary sized cube (or any geometry) that is chosen to be used as the atomic element that group together and create a more complex geometric element.
* A `voxel` can be considered as the atomic building block of a bigger geometry in focus.
* Usually distances are measured in voxels and not in standard units (meters, millimeters, etc.)

### Summary 
A `voxel` has the following properties;
1. It is arbitrary, but usually a cube / point (as in point-cloud model)
2. All instances of the voxel are congruent. They cannot be modified.
3. A Voxel is atomic. It cannot be sub-divided into other parts.
4. They exist as relative objects only. Their volumetric information depends on the neighbors, and relationships they share.

### Relation to Pixel
| Voxel | Pixel |
| :---: | :---: |
| Atomic element in 3D space | Atomic element in 2D space |
| Distances are measured in voxels| Distances are measured in pixels |

## Advantage(s)

* They are extremely light-weight, maybe even comparable to point-clouds.
* This is probably because they no not require an absolute positioning system, and rely on relative positioning, to form clusters / groups, that in total represent 3D elements.

### Disadvantage(s)

* It is hard to represent 3D geometries using `voxel` models.

## Application

* `Voxel` models are useful for particle simulations, and medical imaging as they represent reality more accurately.
* In CGI, `voxel` models are used to add background / context elements that match the resolution of the final image / video, without compromising on performance.

## References
1. [What Are Voxels and How Are They Used in 3D Modeling?](https://www.makeuseof.com/what-are-voxels-3d-modeling/) by [Emma Garofalo](https://www.makeuseof.com/author/emma-garofalo/) on MakeUseOf

---
## Read Also
1. [Hybrid-Modeling](Hybrid-Modeling.md)
