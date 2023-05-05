# RAID
Created : 05-05-2023 10:02

1. RAID - Redundant Array of Independent Disks
2. RAID is a way to prevent data loss on a #Server or computer.
3. Data is copied onto multiple storage devices, so if ones fails, the server / system can still be running using data from other storage devices without shutting down.

## RAID 0

* Data is not copied completely, but separated among two hard disks.
* t provides speed, since there are two disk controllers.
* But, if one hard disk fails, the system fails.
* The probability of failure increases since data is not copied.

## RAID 1
* A full copy is stored in two disks.
* If one disk fails, data can be retrieved from the second disk.

## RAID 5
* #Raid5 requires at least 3 disks.
* Most commonly used since it is fast, as well as more secure than RAID 1.
* But data is not completely duplicated here.
* Data is #Striped and shared with multiple disks.
* #Parity (extra some data to rebuild the data in the event of a disk failure) is also stored equally on all these drives.
* The downside? An entire disk's worth of space is sued to store parity, less use-able space is available.
  Example: If we have 4 Hard Disks of 1TB each in a RAID 5 setup. 1TB will be used for parity, and 3 TB will be available for data storage.

## RAID 10
* Minimum of 4 disks are required.
* Raid 1 and Raid 0 are combined.
* If we have 4 Hard Disks of 1TB each, Disks A and B will be in #RAID1 setup, Disks C and D will be in #Raid1 setup. While both these groups will be in a #RAID0 setup.
* Raid 10 provides both the fault-tolerance of Raid 1 and the speed of Raid 0.
* Downside? only 50% of the data can be used for storage. The 50% is for backup because of the Raid 1 configuration.

## Tags



## References
1. [YouTube: What is RAID 0, 1, 5 & 10?](https://www.youtube.com/watch?v=U-OCdTeZLac)