# RAID
*Created* : 27-05-2023 09:32
<br>*Tags* : #Server #Data #Storage #Computer #Hardware #RAID0 #RAID1 #RAID5 #RAID10 #Parity #BinaryTree 
---

## Quick Reference

|                     |  **RAID 0**  | **RAID 1** | **RAID 5** | **RAID 10** |
|---------------------|:------------:|:----------:|:----------:|:-----------:|
| **Minimum Disk(s)** |       2      |      2     |      3     |      4      |
| **Mechanism**       | Partial Copy |   Copied   |   Striped  |    Copied   |
| **Speed Rank**      |       1      |      3     |      2     |      1      |
| **Fault Tolerance** |      No      |     Yes    |     Yes    |     Yes     |
| **Useable Storage** |      100%     |     50%    |     75%    |     50%     |

## About
* RAID stands for **Redundant Array of Independent Disks**. As the name suggests it has something to do with (storage) disks, and (backup) redundancy.
* RAID is a hardware configuration setup for a computer server that provides various levels of data backup.
* Data is copied into multiple storage devices, so if one fails, the system can switch to one of the copies, and continue operating without crashing / requiring to reboot.
* But having multiple complete-copies of the hard-disk comes at a high [cost-to-performance ratio](Cost%20Performance%20Index.md). RAID provides optimum configurations that one can choose from.
* In RAID systems, the tug-of-war is between having large storage spaces *(example: saving multiple copies of the entire disk(s))*, and maintaining high read-write speed.

## RAID 0

* Requires a minimum of 2 disks.
* Data is split and stored between the two disks.
* No fault tolerance. If one disk fails, entire system fails.
* Read/Write speed is high, since both disks can be accessed in parallel.
* 100% of the disk space is used for file storage.

!!! question 

	Does this increase change of data corruption? How are the disks synchronized while read / write operations?
	
	How does the data get split to avoid such problems?

## RAID 1

* Requires a minimum of 2 disks.
* Data is copied as a backup to the second disk.
* Fault tolerance is minimum. If one disk fails, data can be accessed from the secondary disk.
* Read/Write speed is nominal as only one disk is accessed at a time.
* Only 50% of disk space is used for file storage. Rest is for backup.

## RAID 5 *(Most widely used)*

* Requires a minimum of 3 disks.
* Data is Striped, and stored between the disks.
* Parity data (extra data that is used to rebuild the data in case of a failure) is also stored in the disks.
* Almost one entire disk's worth of space is used for parity.
* Nearly 75% of disk space is used for file storage. Rest for parity.

## RAID 10 (Binary Tree)

* Requires a minimum of 4 disks.
* Uses a combination of RAID 0 and RAID 1 configurations. (Refer example below).
* It utilizes the speed of RAID 0 along with the fault tolerance of RAID 1.
* 50% of disk space is used for storage, and rest for backup.

!!! example
	If we imagine disk setup as a binary tree, all leaves are setup in RAID 1 setup to enable fault tolerance via full copy.
	Branches are then configured in RAID 0 setup to maximize read / write speed.

!!! question 

	Does the `10` in RAID 10 refer to `2` in Binary, to refer a binary-tree-like arrangement?
	Then in the case of RAID 5 ( 5 => 101) should it actually be `RAID 101`?

## References
1. [YouTube: What is RAID 0, 1, 5 & 10?](https://www.youtube.com/watch?v=U-OCdTeZLac)
2. [RAID 1 vs RAID 5 by Priya Pedamkar](https://www.educba.com/raid-1-vs-raid-5/)
3. [RAID 1 vs. RAID 0: Which level is best for data protection? by Brien Posey](https://www.techtarget.com/searchdatabackup/tip/RAID-1-vs-RAID-0-Which-level-is-best-for-data-protection)

---
## Read Also
[Cost Performance Index](Cost%20Performance%20Index.md)