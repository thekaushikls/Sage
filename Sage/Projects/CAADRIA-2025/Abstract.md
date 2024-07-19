---
draft: true
search:
  exclude: true
date: 2024-07-16 10:12
authors:
  - thekaushikls
tags:
  - Academia
  - Research
  - CAADRIA
categories:
  - Academia
comments: false
---
<!-- more -->
# <kbd> Abstract </kbd>

As information modeling and data-driven design approaches become more accessible to the Architecture, Engineering, Construction, and Operations (AECO) industry, the branch of Computational Design (CD) focusing on Systems Design and Automation (SDA) has become a considerable priority for many practices. One of the aims of an SDA team is to identify recurring scenarios, generalize problems, and establish standard approaches, allowing newer innovations to further development.

A common challenge is unifying top-down and bottom-up approaches to processing information. Often, Parametric Design (PD) and Generative Design (GD) approaches operate via the top-down approach, while Building Information Modeling (BIM) and Assembly Modeling (ASM) opt for the bottom-up approach. But, in a practical setting, BIM and ASM models often require propagating changes from the top, and PD and GD models require detailed information at the bottom. This necessitates a unified approach, allowing dynamic control from either direction at any given time.

Both approaches focus on the geometric elements or nodes. By shifting the focus towards the relationship (edge) between nodes, we may develop a framework to organize, store, query, and operate on a single information network.

To investigate the practicality, and application(s) of such a framework, this paper reviews existing publications on the topic and implements a proof-of-concept workflow to test various real-world use cases, report the findings, and propose further development trajectories.
   
*~~To investigate the practicality, and application(s) of such a framework, this paper outlines the development of a modified implementation of the Doubly Connected Edge List (DCEL) data structure as a software package. The package can act as a layer of abstraction over any data that needs to be represented as a network, while also allowing certain topological operations for querying and analysis.~~*

## Keywords
1. Computational Design
2. Systems Design and Automation
3. Graph Data Structure
4. Data Driven Design Framework,
5. Doubly Connected Edge List

## References
1. Asghari, M., Sadat, M. T., & Boguslawski, P. (2011). _An Overview on Boundary Representation Data Structures for 3D Models Representation_.
2. Boguslawski, P., & Gold, C. (2016). The Dual Half-Edge—A Topological Primal/Dual Data Structure and Construction Operators for Modelling and Manipulating Cell Complexes. _ISPRS International Journal of Geo-Information_, _5_(2), 19. [https://doi.org/10.3390/ijgi5020019](https://doi.org/10.3390/ijgi5020019)
3. De Berg, M., Cheong, O., Van Kreveld, M., & Overmars, M. (2008). _Computational Geometry: Algorithms and Applications_. Springer Berlin Heidelberg. [https://doi.org/10.1007/978-3-540-77974-2](https://doi.org/10.1007/978-3-540-77974-2)
4. Jabi, W., Aish, R., Lannon, S., Chatzivasileiadi, A., & Wardhana, N. M. (2018). _Topologic—A toolkit for spatial and topological modelling_. 449–458. [https://doi.org/10.52842/conf.ecaade.2018.2.449](https://doi.org/10.52842/conf.ecaade.2018.2.449)
5. Masuda, H., Shimada, K., Numao, M., & Kawabe, S. (1989). A Mathematical Theory and Applications of Non-Manifold Geometric Modeling. _International Symposium on Advanced Geometric Modeling for Engineering Applications, Berlin FRG_, 89–103.
