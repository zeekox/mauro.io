---
layout: post
title:  "You need a Backup"
---

You need a Backup and everyone does. Some reasons for it that I find important and wisdom gathered from colleagues.

1. I you use a NAS (with or without RAID) or some other system using proprietary software, be sure to be able to mount your disks without it.

2. Don't use backup software creating copies you can only read with THAT software. Create your own full copies, readable from any computer (after properly mounting it).

3. Be sure to be able to read your disks without your NAS. So mount it on an other computer before copying your whole life on it.

4. A good NAS with RAID 1 is great but not fire proof. Copy your files to an external drive that you store at an other location (for example at work).

5. Don't overwrite a single backup copy, if it is corrupt you lost all backups. Use backup rotation, to store for example the last five copies or more. With this kind of solution you can also go back in time if your overwrite some files or need a previous version of some piece of data.

6. Use hard-links to save space if you can. Storing full copies of your data is space consuming, creating hard-links for files that did not change since last backup save a lot of disk-space.

7. You will not forget automated backups, run automatic backups regularly so you don't need to think about it. But make sure you are informed when backup fails.

My Setup
--------

I wanted redundancy and find external hard drive good but you can still easily fall down, in addition I wanted an automated solution and if you need to plug your hard drive first I don't call it automatic.

The [Synology DS214+](http://www.synology.com/en-global/products/overview/DS214+) is my choice, it's a little bit overkill and a less expensive 2-bay NAS would do it, but this one looks great!

I configured it in RAID-1 because and don't want to rely on Synology Hybrid Raid technology so that I can mount the disks in another computer (see point 4 above).

Then I configured my NAS to be allow SSH connections, and [uploaded my public key](http://smbjorklund.no/ssh-login-without-password-using-os-x) so that the connection does not require a password.

Finally a wrote a [rsync based script](https://gist.github.com/zeekox/9311369) to perform the rotating backups over SSH (the script would also work to store the backups locally). And programmed it to run periodically using CRON.

As I don't wanted my NAS to run all day for nothing I configured it to started only a couple of ours some days of the week and configured the CRON entry to match those days. I also investigated a solution where I would start the NAS with Wake On Lan and stop it after the backup is performed. 

