# Obsidian UX
Created : 05-03-2022 15:40

* In most text editor applications, if the content exactly matches the page / screen height, the scrollbar is disabled.
* Obsidian's scroll bar makes sure, that the page can be scrolled until the new line is at the center of the screen.
* This makes it easier to type, and one can look at what they're typing, in screen-center irrespective of how big / small their app window is.
* I like how the scroll bar is configured.

# Hosting a Wiki site for free

## Setup: Obsidian
1. Turn off `WikiLinks`, and use `Relative Links`
2. WikiLinks are not detected on GitHub / mkdocs. Relative links are universal.
3. Root directory should be called `docs`

## Setup: GitHub
1. CI action to build mkdocs
2. pages build

## Setup: mkdocs-material
1. config mkdocs theme

### For clickable Hashtags
1. enable sharing search query
2. create a link in this format
```markdown
[`#TagName`](./?q=TagName)
```
[`#Obsidian`](./?q=Obsidian)

1. Can create a script to replace links using python
	1. Read the file,
	2. check and identify tag using regex
	3. create new tag / link using above format.
		1. write to file
	4.  Run this in the cloud so obsidian tags are still usable.

## References#
1. [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)