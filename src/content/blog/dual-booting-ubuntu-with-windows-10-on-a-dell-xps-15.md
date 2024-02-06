---
title: Dual booting Ubuntu with Windows 10 on a Dell XPS 15 (9560)
date: "2017-02-06"
description: "A tutorial on how to run both Linux and Windows on a Dell XPS."
tags:
  - linux
  - tooling
  - tutorial
  - windows
---

I just received a brand new Dell XPS in the mail, whoo! In order to have a slightly less painful experience developing native apps, I decided to dual boot Windows 10 and Ubuntu. Sounds pretty easy right? Wrong! There were a lot of hangups that nobody told me about, and I had to figure it all out by frantically googling while explosions were happening. This one is for all of you out there who want to avoid that headache.

Note, I am not smart enough to have figured any of this out on my own, and I make no promises that this will work perfectly on your machine. It's just what worked for my machine. All sources are linked.

## Preparing a bootable version of Linux

Before we begin, it's advisable to prepare a backup version of Windows, especially if you have any data on there that might be of value. Because I was using a brand new machine and I live on the edge (not the Microsoft Edge, geddit?), I chose to forgo this step.

You will need a clean USB with at least 4GB of space.
I first grabbed Ubuntu 16.04.01 from the official [Ubuntu Website](https://www.ubuntu.com/download/desktop). I then downloaded [Rufus](https://rufus.akeo.ie/) as recommended in their docs to format the USB. Ubuntu has prepared an [excellent guide](https://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) on how to do this, but basically you are selecting your USB stick and your freshly downloaded Ubuntu installation and writing it in ISO mode.

## Enabling AHCI Mode on your SSD

Since my machine came with Windows 10 preinstalled, I needed to adjust the SSD configuration as Ubuntu wouldn't recognize the hard drive in RAID mode.

Following [this discussion thread](https://www.tenforums.com/drivers-hardware/15006-attn-ssd-owners-enabling-ahci-mode-after-windows-10-installation.html), I ran the following steps:

1. Search for command prompt, right click and hit `Run as Administrator`
2. Type the following to force a safe mode boot `bcdedit /set {current} safeboot minimal`
3. Restart your machine, and hit F12 on the Dell screen to pull up boot options
4. Select `Bios Setup`
5. Expand `System Configuration` and select `SATA operation`
6. Switch from `RAID on` to `AHCI`
7. Save and exit to boot into Windows 10 Safe mode
8. Run command prompt as administrator again
9. Type `bcdedit /deletevalue {current} safeboot` to disable safe mode boot
10. Restart your computer again. Success!

## Creating space for Ubuntu

Alright, time to shrink down our windows partition to make space for Linux!

1. Search for `Disk Management` (or open Command Prompt and type `diskmgmt.msc`)
2. Identify the disk with your Windows installation. For me, it was the one that was 400GB+.
3. Right click and select `Shrink Volume`
4. Shrink it by your desired amount. I originally opted for 40GB (or 40,000MB), but I found that for what I was doing with Linux (React Native and Android Emulation), I needed more, so I eventually expanded it to 70GB
5. You should see the unallocated space show up!

## Installing Ubuntu

Alright, it's show time! Plug your bootable Ubuntu USB in, restart your computer once more, hit `F12` and choose to Install Ubuntu from your USB. The installation process is fairly simple, you can follow Ubuntu's [Official Guide](https://www.ubuntu.com/download/desktop/install-ubuntu-desktop). Because we are dual booting, I chose to install it alongside Windows boot manager. Now that we've unallocated some space for Ubuntu and switched to AHCI mode, it should recognize the unallocated space as an option and install it to that space. Whew! The hard part is over.

## Fixing the Touchpad

The first thing I noticed on my new Ubuntu install was that the trackpad didn't have palm detection turned on, and it was making typing a nightmare. To resolve it, I installed Libinput and configured it with the following steps:

1. Open Terminal, type `sudo apt-get install xserver-xorg-input-libinput`
2. Edit the config file by typing `gedit /usr/share/X11/xorg.conf.d/90-libinput.conf`(or vi if you prefer vim). It may be located in a different location depending on your Ubuntu installation.
3. Scroll down and modify the Touchpad input class like so:

```
Section "InputClass"
    Identifier "libinput touchpad catchall"
    MatchIsTouchpad "on"
    MatchDevicePath "/dev/input/event*"
    Driver "libinput"
    Option "Tapping" "True"
    Option "PalmDetection" "True"
    Option "TappingDragLock" "True"
EndSection
```

Phew! Now we can finally type without wanting to pull our own hair out.

## Fixing the Time Zone Issue

What? We're still not done? :( There's one more thing we need to fix before we log back into Windows again. There tends to be conflicts with how the time is stored when running Windows and Linux on the same machine. Luckily, it's an easy fix if you want to run Linux on local time as opposed to UTC. On our version of Ubuntu, simply open up the terminal and type `timedatectl set-local-rtc 1`. [The Ubuntu Website](https://help.ubuntu.com/community/UbuntuTime#Multiple_Boot_Systems_Time_Conflicts) offers alternative solutions if you prefer.

Now we're finally done. Happy developing!
