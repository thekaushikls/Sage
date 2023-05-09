# Best Practices in Grasshopper
Created : 15-02-2022 16:50

* File description like Title, Author, Purpose of file, etc. can be provided in panels.
* Input components will be placed on Top-left corner.
* Sometimes it is better to provide a Panel Input than a slider, for better performance.
* I/O parameters are set to text display and formatted as **`{Name}.{Type}`**
* Everytime the input component is reused, it will be copied, and the Wire display set to **`Hidden`**
* This way, all inputs that can be modified, are always in a single place (Top-Left) and the main script is placed below (with Hidden-Wire references).
* Explicit input (via Panels / Sliders) are better than Implicit (Internalised into component / number parameter)
* Any specific order (of points / objects) can be illustrated with a Rhino-Sketch -> Scribble.
* Parameters can also be placed in appropriate positions near the sketch, to provide a better representation of the script.

## References
1. https://www.modelical.com/en/best-practices-in-grasshopper/