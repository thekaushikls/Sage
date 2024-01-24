---
tags:
  - Grasshopper
  - VersionControl
  - FileComparer
  - GitDiff
created: 29-09-2023 20:42
---
# VSON
---

## About


**LIST OF POSSIBLE COMPARISIONS**

When we want to compare two Grasshopper Documents, we essentially need to compare two Grasshopper Components (or Parameters) in these documents. Below is the list of such comparisons that might be possible.

Component Exists
Component GUID
Component Instance GUID
Component Name
Component NickName
Component Size
Component Message
Component Icon
Component Enabled / Disabled
Component Preview On / Off

Component Attributes
	Pivot
	Size
	
Component Input Parameters
	Parameter Count
		Parameter
			Parameter Exists
			Parameter GUID
			Parameter Instance GUID
			Parameter Name
			Parameter NickName
			Parameter Icon
			Parameter Principal
			Parameter Simplify
			Parameter Flatten
			Parameter Graft
			Sources
				Count
				Source Parameter GUID

Component Output Parameters
	Parameter Count
		Parameter
			Parameter Exists
			Parameter GUID
			Parameter Instance GUID
			Parameter Name
			Parameter NickName
			Parameter Icon
			Parameter Principal
			Parameter Simplify
			Parameter Flatten
			Parameter Graft
			Targets
				Count
				Target Parameter GUID

To complicate things further, each derived component contains many more attributes. For example: The Python Scripting component has a `Code` parameter, and other parameters that define the window location. The Slider Component has a `Slider` parameter with Minimum / Maximum values for the slider. Creating a unified comparer requires these, and many more special cases to be handled.

For the first phase,
1. ❌ Scripting  / ZUI Components are not supported
2. ❌ Persistent (Internalized) data is not supported
3. ⚠️ Floating Parameters will be unstable
4. ❌ Component Parameter States (Flatten / Graft / etc.) are not supported
5. ✅ Component Exists
6. ✅ Component Name, NickName, Location, Size, LockedState, PreviewState, Message, Instance
7. ✅ Input / Output Param Name, NickName, Sources / Targets
## References
1. NET Shell Extensions - Shell Preview Handlers on [codeproject.com](https://www.codeproject.com/Articles/533948/NET-Shell-Extensions-Shell-Preview-Handlers)

---
## Read Also
