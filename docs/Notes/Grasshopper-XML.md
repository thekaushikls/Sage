# Grasshopper XML
*Created* : 11-07-2023 09:04
<br>*Tags* : 
---

## About
* How does Grasshopper stores its `.gh` / `.ghx` definition files?
* Can it be parsed / read from outside Grasshopper?
* Is it possible to understand the contents, structure, and possibly changes?

## JSON Structure by Key

  

1. Archive
   1. items
      1. item
         1. Major
         2. Minor
         3. Revision
   2. chunks
      1. chunk LIST
         1. [0]
            1. chunks
               1. chunk LIST
                  1. [0]
                     1. items
                        1. item LIST
                           1. [0]
                              1. Guid
                              2.
            2. items
               1. item
                  1. Major
                  2. Minor
                  3. Revision
         2. [1]
            1. items
  
## XML Structure

1. Root
   1. Definition
      1. DocumentHeader
      2. DefinitionProperties
      3. RCPLayout
      4. DefinitionObjects
         1. ObjectCount
         2. Object (by type)
            1. ComponentGuid
            2. Name
            3. Container
               1. Description
               2. InstanceGuid
               3. Name
               4. NickName
            4. Attributes
               1. Bounds
                  1. X
                  2. Y
                  3. W
                  4. H
               2. Pivot
                  1. X
                  2. Y
               3. ParameterData
                  1. InputCount
                  2. InputId
                  3. InputId
                  4. OutputCount
                  5. OutputId
                  6. InputParam
                     1. Description
                     2. InstanceGuid
                     3. Name
                     4. NickName
                     5. Optional
                     6. Source
                     7. SourceCount
         3. Object
         4. .
         5. .
         6. .
      5.
      
## References

---
## Read Also
