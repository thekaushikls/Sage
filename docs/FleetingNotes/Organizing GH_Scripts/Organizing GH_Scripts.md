# [[Summary|Organizing GH_Scripts]]
Created : 15-02-2022 11:37

* Need for a style guideline like PEP8 in Python.
* To make files readable for users at any skill-level.
* There is no style guide that exists right now.
* Annotating is very rare for grasshopper scripts.
* Complex / Spaghetti code de-motivates users to use / modify the file.
* It makes it unclear as to, what can be changed, and what cannot.
* Some changes cause downstream burden that might take up a lot of time.
* Too many rules, may make it hard for a casual user. Which might lead to users not following the guidelines.
* Rules are not about being strict, it is about being consistent, and easy to follow for everyone.
* Scripting components can reduce the component count.
* Just completing a script is not the end of a project. It needs to cleaned up, and simplified for other person to understand (easily), and if possible learn from it. *Create It -> Refine It*
* Use Worksessions and Maintain file paths (Split into multiple files)
* It is easier to comment 100 lines in a scripting component than to create 100 comments on the grasshopper canvas. UML Diagrams are better suited to represent the flow.
* Any file over 100 components is too big - David Rutten

## Suggested Ideas
* Scribbles / Import Rhino sketch as Scribbles
* Panels, Named Groups & color coordinating.
* Named nested groups with scribbles.
* Template with vertical lines (to divide parts of the process)
* Move core logic to separate file, and use Hops / GhPlayer to provide simpler Interface.
* Data I/O components to split into multiple scripts. **`.ghdata`** files are persistent, so they reduce downstream burden.
* * Clusters / ScriptComponents with preview on. Clusters are also splitting files discreetly.
* Entwine and Explore Tree to break process into steps.
* Data Dam to Enable / Disable downstream process.
* CustomComponent: Group Enable / Disable script.
* Hidden wires and relays for cleaning up.
* Template with professional information can be used for companies.
* Use Wire Injector plugin.
* Use Plugins:
	1. Telepathy
	2. Sunglasses
	3. Bifocals
	4. SnappingGecko
	5. Autograph
* Use smaller monitor.

## SOLID / KISS Principles
* Single responsibility Black Box, one for each function/purpose.
* Divide definition into 'blackbox'es. User doesn't need to how it works. (encapsulation)
* Meaningful names, and description to explain 'What' it is, and 'What it does'.
* Open-Close principle: Closed for modification, Open for Extension.
* Meaningful error messages (guard against stupid input)
* Provide UML diagram / documentation.
* Move proven tools into a plugin.
* Try to reduce external dependencies.
* Using .ghx (XML) format can help with source control.

## References
1. https://discourse.mcneel.com/t/commenting-in-grasshopper/137346
2. https://discourse.mcneel.com/t/how-to-manage-a-big-definition-any-tips/134746
3. https://discourse.mcneel.com/t/grasshopper-best-practices/86120
4. https://discourse.mcneel.com/t/whats-your-largest-grasshopper-script-the-hall-of-shame/60594
5. https://discourse.mcneel.com/t/vertical-slides/50937/18
6. https://aws1.discourse-cdn.com/mcneel/uploads/default/original/4X/d/0/b/d0b941e1b02a1971a095167f63db3066f48dfe6c.jpeg
7. https://www.food4rhino.com/en/app/telepathy
8. https://www.food4rhino.com/en/app/sunglasses
9. https://www.food4rhino.com/en/app/bifocals
10. https://www.food4rhino.com/en/app/snappinggecko
11. https://www.food4rhino.com/en/app/autograph
12. https://github.com/garciadelcastillo/gh-sharp/blob/master/GUIDELINES.md