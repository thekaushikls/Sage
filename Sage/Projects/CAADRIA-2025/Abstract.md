---
draft: false
search:
  exclude: false
date: 2024-07-16 10:12
authors:
  - thekaushikls
  - ishwarya
tags:
  - Computational-Design
  - Systems-Design
  - Graph-Theory
  - Applied-Research
  - Automation
categories:
  - Academia
  - CAADRIA
  - Research
comments: false
---
<!-- more -->
# <kbd> Abstract </kbd>

## **Applying Graph Theory:** *A Study on Unifying Top-Down and Bottom-Up Approaches in Architectural Design*

As information modeling and data-driven design approaches become more accessible to the Architecture, Engineering, Construction, and Operations (AECO) industry, the branch of Computational Design (CD) <mark>focusing on Systems Design and Automation (SDA) has become a considerable priority</mark> for many practices. One of the aims of an SDA team is to identify recurring scenarios, generalize problems, and establish standard approaches, allowing newer innovations to further development.

A common <mark>challenge in SDA is choosing between top-down and bottom-up approaches to processing information.</mark> Often, Parametric Design (PD) and Generative Design (GD) approaches operate via the top-down approach, while Building Information Modeling (BIM) and Assembly Modeling (ASM) opt for the bottom-up approach. But, in a practical setting, BIM and ASM models often require propagating changes from the top, and PD and GD models require detailed information at the bottom. This <mark>necessitates a unified approach, allowing dynamic control</mark> from either direction at any given time.

Both approaches focus on the geometric elements or nodes. By shifting the focus towards the relationship (edge) between nodes, we may develop a <mark>framework to organize, store, query, and operate on a unified data structure, where information may be represented by a graph data structure.</mark>

To investigate the viability, and practical application(s) of such frameworks, this paper <mark>reviews existing publications</mark> on the topic and <mark>implements a proof-of-concept</mark> workflow to test various real-world use cases, <mark>report the findings</mark>, and propose further development trajectories.

**Keywords:** Computational Design, Systems Design, Graph Theory, Applied Research, Design Methodology

## See Also
1. [Call for Papers](index.md)

## References
1. Asghari, M., Sadat, M. T., & Boguslawski, P. (2011). _An Overview on Boundary Representation Data Structures for 3D Models Representation_.
2. Boguslawski, P., & Gold, C. (2016). The Dual Half-Edge—A Topological Primal/Dual Data Structure and Construction Operators for Modelling and Manipulating Cell Complexes. _ISPRS International Journal of Geo-Information_, _5_(2), 19. [https://doi.org/10.3390/ijgi5020019](https://doi.org/10.3390/ijgi5020019)
3. De Berg, M., Cheong, O., Van Kreveld, M., & Overmars, M. (2008). _Computational Geometry: Algorithms and Applications_. Springer Berlin Heidelberg. [https://doi.org/10.1007/978-3-540-77974-2](https://doi.org/10.1007/978-3-540-77974-2)
4. Jabi, W., Aish, R., Lannon, S., Chatzivasileiadi, A., & Wardhana, N. M. (2018). _Topologic—A toolkit for spatial and topological modelling_. 449–458. [https://doi.org/10.52842/conf.ecaade.2018.2.449](https://doi.org/10.52842/conf.ecaade.2018.2.449)
5. Masuda, H., Shimada, K., Numao, M., & Kawabe, S. (1989). A Mathematical Theory and Applications of Non-Manifold Geometric Modeling. _International Symposium on Advanced Geometric Modeling for Engineering Applications, Berlin FRG_, 89–103.
