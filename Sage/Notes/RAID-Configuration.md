---
draft: true
search:
  exclude: true
date: 2023-05-05 10:02
authors:
  - thekaushikls
tags:
  - Data
  - Security
  - Backup
  - Configuration
  - RAID
categories:
  - Computers
comments: false
---
<!-- more -->
# <kbd> RAID-Configuration </kbd>
## About
* RAID stands for *(Redundant Array of Independent Disks)*
* RAID is a storage(hardware) configuration methodology.
* It helps prevent data loss by introducing redundancy or copies.[^1]
* It is similar to saving an additional copy of a file - but on a bigger scale.

### Parity

### RAID Monitoring
1. Latency
2. Capacity & Utilization
3. Input/Output operations Per Second (IOPS)
## Configuration Types

### RAID 0 : Stripping
* Data is not copied completely, but separated among two hard disks.
* t provides speed, since there are two disk controllers.
* But, if one hard disk fails, the system fails.
* The probability of failure increases since data is not copied.

### RAID 1: Mirroring
* A full copy is stored in two disks.
* If one disk fails, data can be retrieved from the second disk.

### RAID 5: Striping w/ Parity
* RAID5 requires at least 3 disks.
* Most commonly used since it is fast, as well as more secure than RAID 1.
* But data is not completely duplicated here.
* Data is striped and shared with multiple disks.
* Parity (extra some data to rebuild the data in the event of a disk failure) is also stored equally on all these drives.
* The downside? An entire disk's worth of space is sued to store parity, less use-able space is available.
  Example: If we have 4 Hard Disks of 1TB each in a RAID 5 setup. 1TB will be used for parity, and 3 TB will be available for data storage.

### RAID 6: Striping w/ 2x Parity[^2]

### RAID 10: Mirroring w/ Striping
* Minimum of 4 disks are required.
* Raid 1 and Raid 0 are combined.
* If we have 4 Hard Disks of 1TB each, Disks A and B will be in RAID1 setup, Disks C and D will be in RAID1 setup. While both these groups will be in a RAID0 setup.
* Raid 10 provides both the fault-tolerance of Raid 1 and the speed of Raid 0.
* Downside? only 50% of the data can be used for storage. The 50% is for backup because of the Raid 1 configuration.

### RAID 01: Striping w/ Mirroring

---
## See Also
1. 

## References
[^1]: [What is RAID 0, 1, 5 & 10?](https://www.youtube.com/watch?v=U-OCdTeZLac), by PowerCert Animated Videos on YouTube.com (9 August 2015)
[^2]: [RAID Configurations](https://www.manageengine.com/network-monitoring/tech-topics/raid-configurations.html), on manageengine.com (7 June 2024)
