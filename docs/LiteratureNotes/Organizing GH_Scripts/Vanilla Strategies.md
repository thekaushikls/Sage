# Vanilla Strategies
Created : 15-02-2022 21:54

* Start the Script on the Top-Left. The **`CanvasBorder`** is sort of an origin on the canvas.
* Use the space **`Outside the Canvas`** to store reference material, notes, and annotations.
 Try to keep the flow of the script **`Left-to-Right`**, and/or **`Top-to-Bottom`**. Follow Input-Process-Output analogy.
*  **`Draw`** diagrams on the canvas, and/or import sketches from Rhino viewport.
* **`Scribble`** annotations / descriptions.
* Color coded **`Groups`** and/or **`Nested Groups`** with appropriate names.
* Always try to group **`Inputs`**, **`Outputs`**, and **`ToModify`** components.
* **`Panel`** can also be used for small notes.
* Sometimes using **`Panel`** is better than Number Sliders or Parameters, since it is more visual.
* Set up a grasshopper **`Template`** for casual / professional users or companies.
* Grasshopper already had **`File Information`** dialog box implemented for meta-data.
* **`Clusters / Hops / DataIO`** components can be used to split one large script into managable small ones. DataIO components create **`.ghdata`** files that automatically internalize data, meaning they act as cached files, and are much efficient.
* Clusters can encapsulate the logic, but still keep the **`PreviewOn`**, and act as a black box.
* Split script into steps, and **`Annotate Every Step`** with descriptions.
* Use **`JumpTo`** components to guide the user through the flow / steps of the script.
* **`ScriptComponents`**  greatly help reducing the component count on canvas.
* **`Entwine`, `Explode Tree`** components can be used to couple / decouple data streams.
* Move `Core Logic` into **`Clusters`**, and keep the main file clean.
* **`Wire`** display modes can be changed for easier clarity.
* Wires can be arranged to be `Straight`, have `least intersections`, and only `intersect at 90˚` for better clarity.
* **`Relay`** components can be used to help futher organise wires.
* **`Parameter`** components can be used like **Named Relays**, to manage Inputs/Outputs to groups.
* **`DataDam`** component can be used to reduce downstream burden.
* Use [[Elements of a City]] analogy to organise the grasshopper file.
	1. Components as Nodes
	2. Wires as Edges
	3. Clusters / Groups as blocks


## References
1. [[FleetingNotes/Organizing GH_Scripts/Organizing GH_Scripts]]
2. [[Best Practices in Grasshopper]]
3. [[3 Reasons Why Your Grasshopper Definitions Should Be Clean & Documented]]
4. [[Elements of a City]]