---
draft: true
search:
  exclude: true
date: 2024-02-07 16:42
authors:
  - thekaushikls
tags:
  - Resilience
  - Earthquake
  - Disaster
  - Impact
  - Built-Structure
  - Architecture
  - Engineering
  - Building-Science
categories:
  - Disaster
comments: false
---
<!-- more -->
# <kbd> Earthquake-Impact-on-Structures </kbd>
## About
> Impact on Load bearing structures, Facades, in specific.

An [earthquake](Earthquake.md) is the shaking of the ground. Buildings, and Structures that rest on the ground experience motion / vibration(s).[^1]

Even though the base of the building moves with the ground, the roof has a tendency to stay in it's original position due to inertia. [^2] But since the roof and base are connected (via columns, beams, etc.) the vibration is transferred upwards, but with a slight delay - causing the upper floors to sway.

The total force $F$ is directly proportional to mass $m$, the heavier the top, the higher the inertia, and hence larger the sway.

 The lower floors experience more vibration, while the upper floors experience more sway. This behavior of structures during an earthquake can be compared to an inverted pendulum.[^3]

## Deformation
> (w.i.p)

## Design for Seismic Resiliency
Attempting to create structures that are completely earthquake-proof, while possible, will be too robust, and too expensive. The engineering intention is to create buildings that are earthquake resistant.

Earthquake resistant design is about ensuring that the damage to buildings during earthquakes is of an acceptable variety, with zero human loss, and also occur at the right places, and within acceptable ranges.[^4]

| Frequency  | Severity  | Main / Load bearing members             | Other secondary members |
|------------|-----------|-----------------------------------------|-------------------------|
| Frequent   | Minor     | No Damage                               | Repairable Damage       |
| Occasional | Moderate  | Repairable Damage                       | Replaceable Damage      |
| Rare       | Severe    | Irreplaceable (but **cannot** collapse) | Replaceable Damage      |

In [Load Bearing Structures](Load-Bearing-Structures.md), ...

In [RCC Structures](Reinforced-Cement-Concrete-Structures.md), the inertial forces are developed highest on the floor-slabs (since most of the building mass is present on floor levels). These forces travel down through the columns to the foundations, and dispersed to the ground. 

!!! success "Resilience Strategy"
	1. Columns, and Walls at the lower storeys experience higher earthquake induced forces, and are usually designed to be stronger.
	2. In load bearing structures, create a disconnect between foundation, and the structure above ground.[^5]

---
## See Also
1. [Hazards](Hazards.md)

## References
[^1]: [What are the Seismic Effects on Structures](https://www.iitk.ac.in/nicee/EQTips/EQTip05.pdf), by [C.V.R. Murty](https://civil.iitm.ac.in/faculty/cvrm/) on IITK-BMTPC Earthquake Tips (August 2022)
[^2]: Newton's First Law of Motion
[^3]: [The behavior of inverted pendulum structures during earthquakes](https://authors.library.caltech.edu/records/g6s7g-esg84), by George W. Housner on authors.library.caltech.edu (February 1963)
[^4]: [Earthquake-resistant structures: How sage is your home?](https://www.dnaindia.com/analysis/standpoint-earthquake-resistant-structures-how-safe-is-your-home-2082169), by [Yogini Deshpande](https://www.linkedin.com/in/yoginideshpande/?originalSubdomain=in) on dnaindia.com (30 April 2015)
[^5]: Base Isolation Method
