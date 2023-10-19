---
tags:
  - Grasshopper
  - Plugin
  - Review
  - CSharp
  - Rhino
created: 19-10-2023 14:39
---
# Grasshopper-Plugin-Review-Gatekeeper
---

## About
### Comparision with the native `DataDam` Component
|        Test Action       |  Expected Outcome  |  DataDam  |  Gatekeeper  |
|:------------------------|:------------------:|:---------:|:------------:|
| On open file             |      Stop Data     |     ❌     |       ✅      |
| On Recompute Solution    |      Stop Data     |     ❌     |       ✅      |
| On Cut/Copy-Paste        |      Stop Data     |     ❌     |       ✅      |
| On Undo/Redo             |      Stop Data     |     ❌     |       ✅      |
| On first connection      |      Stop Data     |     ❌     |       ✅      |
| On ExpireSolution        |      Stop Data     |     ✅     |       ✅      |
| On Enable/Disable        |      Stop Data     |     ❌     |       ✅      |
| On button clicked        |     Allow Data     |     ✅     |       ⚠️      |
| On trigger(`Pass`) input |     Allow Data     |     ⚠️     |       ✅      |
| Button on Component      |       Feature      |     ✅     |       ❌      |
| Trigger Input            |       Feature      |     ❌     |       ✅      |
| Internalise data         |       Feature      |     ❌     |       ✅      |
| Publish to RCP           |       Feature      |     ❌     |       ✅      |
| Multiple input support   |       Feature      |     ✅     |       ❌      |

## References
1. Gatekeeper source code on [GitHub](https://github.com/Attemainio/Grasshopper-Components/blob/main/Gatekeeper.cs)
2. Announcement post on [LinkedIn](https://www.linkedin.com/posts/atteharrikari_rhino-rhino3d-grasshopper-activity-7120302488678805504-UE6J?utm_source=share&utm_medium=member_desktop) by [Atte-Mainio Harrikari](https://www.linkedin.com/in/atteharrikari/)
3. ["WISH: Data dam with trigger input"](https://discourse.mcneel.com/t/wish-data-dam-with-trigger-input/120926) discussion on Rhino Forum
4. ["Recompute only when changed"](https://discourse.mcneel.com/t/recompute-only-when-changed/124747/6) discussion on Rhino Forum
5. ["Damned Data Dam"](https://discourse.mcneel.com/t/damned-data-dam/123174) discussion on Rhino Forum
6. ["How to trigger updates down only selected outputs of component"](https://discourse.mcneel.com/t/how-to-trigger-updates-down-only-selected-outputs-of-component/68441) discussion on Rhino Forum
---
## Read Also
1. [Topoceros](Topoceros.md) plugin