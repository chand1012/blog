---
date: "2021-08-01"
title: Arch Beginner Advice
description: Advice for those who want to start Arch Linux but can't seem to get it working.
---

## Intro

This is not a guide on how to install Arch. If you want a guide, use the [official Arch Guide](https://wiki.archlinux.org/title/Installation_guide). I will say that the official Arch guide completely glosses over multiple things that I would argue are essential to the basic function of your Linux system, which is why I wrote this. 

This is a guide on how to fix those pesky problems while installing Arch and will help you both understand how Linux works under the hood and get your Arch installation working smoothly.

## Hardware

It is very important to know the hardware that you are installing Arch Linux to. If you are installing to a Virtual Machine just to try it out this is less important, but otherwise you have to make sure the correct drivers (as well as the programs to control said drivers) are installed while you have the installation media, as Arch assumes you know what you're doing and will not install the drivers and programs otherwise. This is something you'll have to research for your hardware.

## Programs

As previously stated **assume nothing that you need is installed**. This includes some *really* basic stuff, such as [`sudo`]() and a [DHCP Client]().