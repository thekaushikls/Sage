---
draft: false
search:
  exclude: false
date: 2024-04-19T08:39:21
authors:
  - thekaushikls
tags: 
categories:
  - Building Science
  - Simulations
  - Wind Analysis
comments: false
---
<!-- more -->
# <kbd> Lawson Wind Comfort Criteria </kbd>
## About

## Note?
When running a `Wind Comfort` simulation, and aim to categorize data points based on Lawson's criteria, each data point will have a `location` and `wind_speed` attribute. Additionally, it can also contain a `lawson_index` that denotes which category the current value falls into.

| Lawson index | Category | Wind Speed (m/s) | Error Probability (%) |      Activity      |
| :----------: | :------: | :--------------: | :-------------------: | :----------------: |
|      0       |    X     |       < 2.5      |          < 5          |       N / A        |
|      1       |    A     |       > 2.5      |          < 5          |  Frequent Sitting  |
|      2       |    B     |       > 4.0      |          < 5          | Ocassional Sitting |
|      3       |    C     |       > 6.0      |          < 5          |      Standing      |
|      4       |    D     |       > 8.0      |          < 5          |      Walking       |
|      5       |    E     |       > 8.0      |          > 5          |   Uncomfortable    |
|      6       |    S     |       > 15.0      |        > 0.022        |       Unsafe       |
 
 (modified) Lawson LDDC comfort criteria[^1] 

---
## See Also
1. 

## References
[^1]: [Lawson Wind Comfort Criteria: A Closer Look](https://www.simscale.com/blog/lawson-wind-comfort-criteria/), by [Arnaud Girin](https://www.linkedin.com/in/arnaudgirin/) on simscale.com (1st June 2023)
