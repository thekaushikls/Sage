# Building Information Modelling
Created : 03-04-2023 16:41

> *Building, an Information Model* or *Building Information - Modelling*?

#BIM is successful when enforced by govenment(s). Singapore, UK, and now the US are good examples where BIM format is enforced.

> BIM is a process that begins with the creation of an intelligent 3D model.

*Two things to note*
1. BIM is a process
2. It only **begins** with model + data

BIM enables:
1. Document Management
2. Coordination
3. Simulation

## Advantages of BIM

* Allows Architects, Engineers, and Contractors to work on a coordinated model.
* Changes are synchronized between stakeholders, and teams.
* Delivery of as-built model.
* Adds planning time, and costing to get better understanding about the impact of changes.

## BIM Lifecycle Phases
1. Renovation / Demolition
2. Design
3. Build / Construction
4. Operation & Maintenance

> The cost and duration of #operation phase is much more than the others.

Building Operation phase contributes to around 80% of the effort invoved.

The other 20% might include:
1. Research & Studies
2. Preparation Phase
3. Programming
	   Defining the requirement(s), spatial programs, and needs.
4. Design Development
	   Visuals, Simulations & Analysis (Energy, Systainability, etc.)
5. Construction

### BIM as a process

All stakeholders have access to a central model / data, which is the single source of truth.
This is called #CommonDataEnvironment or the #BimPlatform
From here, different file formats, and 3D layers can be exported as and when required.
Visualizations can be considered as one viewing layer.
The #CDE is usually effective when #CloudBassed 

> If we have our own hosting space, and server setup, will data be safe?
> Who owns the Data?
> Can different teams own their data?
> How is Intellectual property rights handled?

> Why should everything be cloud-based?

> Can BIM be like #Git for Architects, with #SourceControl / #VersionControl is enabled across different teams?

> What does #GitFlow mean in this context?
> `main` branch will be the #SingleSourceOfTruth and each team can have their `branches` to work on.
> feature/Design
> feature/Structural
> feature/Costing
> feature/Electrical
> feature/Landscape
> can be some teams in a project.

> How does Git work?

>1. Design changes are `push`ed to `main`
>2. Structural team `pulls` from `main`, and makes necessary changes.
>3. Structural team `push`es to main

> Is there a #GitDiff for  3D models / BIM Model?

> There can even be automation where, every Friday, drawings are updated, documentation is updated.

Bim is a process that helps us in
1. Sharing information
2. Defining Execution Plan
3. Implementing the process
4. Common Information Environment

> Can there be a unified 3D language simialr to #UML? Is IFC one of those?

### 3 M's of BIM
1. Modelling - to make the Model
2. Model - to share the model
3. Manage - manage the process

### BIM Levels
1. **LEVEL 0 | 2D CAD**
  * This is just improvised manual drafting.
  * Copy-Paste, Undo-Redo, and Save-Load are the best improvedments made so far.
2. **LEVEL 1 | 2D / 3D**
  * Working in 3D, 2D drawings are now a #generative product of the model.
  * Only #CAD or PDF files are shared. No smart data is created / shared.
3. **LEVEL 2 | CDE **
   * Cloud / Realtime access to a synchronized model 
4. **Level 3 | Interoperability** 
   * Git-like workflow between multiple teams
   * #Interoperability between multiple software environments

#BuildingSmart Alliance is working on making Level 3 possible.

### Dimensions of BIM

1. 2D - Generated representation (drawings)
2. 3D - Model for visualization, and understanding
3. 4D - Time, phasing, and project planning
4. 5D - Impact on Cost
5. 6D - #Lifecycle factors such as #EnergyEfficiency, and #Sustainability
6. 7D - Operations, and User Manuals, Warranty on construction and quality.
> If a building is considered as a product, warranty, construction quality, product-life, etc. will need to be defined.

> **BIM Layers**
> You need an enabling structure which enables one to follow these principles, - a #BimFramework
> You need to implement / use this framework in projects to reap the benefits.

### #LOD Level of Development
Each stakeholder requires a different level of geometric development - level of detail of #GeometricElements.

LOD needs to be defined at the beginning of a project, so workflow can be streamlined, and planned.

***Example** Solar analysis does not need information about interiors.*
***Example:** Visualization might not require each and every anchor / bolt to be displayed.

1. LOD 100 - Preliminary design, block massing
2. LOD 200 - Schematic, basic structural
3. LOD 300 - Design development, details
4. LOD 350 - Construction Documents
5. LOD 400 - Construction
6. LOD 500 - As Built

***Example:** I just need a table in the room, to showcase the space. Manufacturing details, Material, etc. of the table is not required. So, I can use LOD 100 model here.*

### #IPD - Integrated Project Delivery
* A #DigitalTwin or a prototype of the building is created, where the number of variables are reduced, and most issues are identified and solved before actual construction.
* Coordination between Contractors, Sub-Contractors, and Fabricators in the digital prototype / design process is required.

### #RecordModelling
An accurate representation of physical conditions, environments, and assets oif a facility. It may contain,
1. Architectural elements
2. Structural elements
3. MEP elements

It is the combination of the entire BIM model, the overall view.
LODs are defined for this view as well, at the start of the project.

## Tags

#linkedinlearning #GitForAEC

## References
1. [LinkedinLearning: BIM Foundations by Fanny Angeles](https://www.linkedin.com/learning/bim-foundations-2?trk=share_android_course_learning&shareId=JMTnRgefSNuywkd9Z0WmGw%3D%3D )
2. [UdemyCourse: Autodesk Revit by Stephen Fagan](https://www.udemy.com/course/autodesk-revit-for-beginners-up-to-intermediate-level/learn/lecture/36990266#overview)
