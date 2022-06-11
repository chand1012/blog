+++
title = "I tried Mac for a Week, You'll Never Believe What Happened..."
date = "2022-06-11T3:30:00-04:00"
author = ""
authorTwitter = "" #do not include @
cover = ""
tags = ["Mac", "Computer", "Productivity"]
keywords = ["Mac", "Computer", "Productivity"]
description = ""
showFullContent = false
readingTime = false
hideComments = false
draft = false
+++

Those of you who know me well would know that I am a massive fan of Linux. I love the versatility and customization potential, and I think developing on the platform that most of my applications are going to be run on (as I develop a lot of backend applications) makes the most sense. However, at my current company, I was the only person using Linux, and I was curious as to why all the other developers choose to use macOS over any other development platform. A few weeks ago, my friend Kyle offered to loan me his 2020 M1 Macbook Pro 13" for a few weeks to try it out. So I took the opportunity to see what all the fuss was about when it came to developing on a Mac.

## Set Up

The first thing I did was start looking into the best options for installing software, and everything that I saw pointed to Homebrew. Homebrew is a package manager, similar to Ubuntu's `apt` package manager, that allows you to quickly install programs from the command line. After installing Homebrew, I was able to get nearly all the software I needed from the command line. Firefox, Spotify, VSCode, and my entire developer toolchain was available through Homebrew. 

There were a handful of applications that were not available through Homebrew, such as my VPN software, however it was still a breeze to install them. Installing new programs on macOS is usually as simple as dragging the application in question into the Applications folder, and if it isn't there are usually Windows-like installers for the application.

## General Usability

Basic usability is amazing. Gesture control on the trackpad is perfect, it has the best laptop keyboard I've even used, the entire OS feels snappy and responsive regardless of the amount of programs that are open and running, and *omg that battery life*. 

However, once the initial impression of the new OS wore off, I started encountering a few issues.

The first was the window management. While I like the way macOS handles a full screen application, effectively putting it in its own desktop, having two applications side-by-side on the same screen was less intuitive. There was no form of window snapping like there is on Windows or most Linux distros! So if I wanted to make two windows use half the screen each, I had to manually move them into position and size, which is quite annoying. My solution to this was [Tiles](https://www.sempliva.com/tiles/), a free application that brings Microsoft Windows-like window management to macOS. It runs quietly in the background and doesn't noticeably affect battery life, so I think its a good enough solution for now.

The other issue was with Spotlight. Spotlight search is macOS's way of searching your system for applications and files, and you bring it up using `Command + Space` keybind. While initially I was quite impressed with it, as it was much faster and more responsive than its Windows counterpart, it had its bugs. It could search both online and my computer, and open apps. That's it.

You may say "Isn't that the whole point?" and you'd be right - until I tried Raycast.

[Raycast](https://www.raycast.com/) is Spotlight but **better**. It allows me to search the internet and my computer, as well as open apps, but I can do *so much more*. I can search my calendar for upcoming events, I can translate languages on the fly, it even has a built in calculator I can access with only a keyboard shortcut! So I overrode my Spotlight keybind to open Raycast.

There was one more OS-level issue I had - window switching. On Linux and Windows, all I had to do was press `Alt+Tab` until I got to the window I care about. On macOS, the default behavior is switching between *applications*, not windows. If you're the type of person who only has one window of each application at a time, this is just fine, but I frequently have multiple browser and code editor windows open across multiple monitors, so I *quickly* got annoyed with the default `Command+Tab` behavior. I was recommended [AltTab](https://alt-tab-macos.netlify.app/), an [open source](https://github.com/lwouis/alt-tab-macos) application that replicates the same window switching behavior as Windows. I rebound the keys to use `Command+Tab` in place of `Option+Tab` , and forgot that I had the problem in the first place.

Since I spent most of my life using Windows, I set up my Linux machines to have Windows-style shortcuts. When I switched to Mac, however, I had to relearn all the shortcuts I've been used to. This wasn't a *huge* deal, but I've gotten to the point now where I can use the Mac just fine, but then accidentally use macOS shortcuts when I'm doing stuff on my Windows PC! Everyone I've talked to who uses either Windows and macOS or Linux and macOS mentioned that once you use both enough you'll automatically switch in your head when you're working on either OS. 

## Hardware

Ok, let me admit something. While I mentioned that I was using a 13" M1 Macbook Pro, I'm no longer using it. My company purchased me a 2021 16" Macbook Pro. 

I've been used to my XPS 13 for the longest time, so when I opened the Pro up for the first time, I was slightly taken aback by the *beautiful* 16" display. It looks crisp no matter how close I stick my face into the screen, and scaling of text and images is perfect. Color reproduction is also amazing. The speakers are the best I've ever heard on a laptop, delivering a sound good enough to make me forget that this is coming from a laptop, rather than my bluetooth earbuds.

The build quality puts nearly every other laptop to shame - save for Dell's XPS line and Razer's laptops. The laptop just feel **solid**. Deck flex is non-existent, and the trackpad feedback is perfect, along with being the most accurate trackpad I've ever used. I'll still take a traditional mouse over it when I'm at my desk, but I don't miss my MX Master as much when I'm out of the office. 

The M1 Pro has genuinely impressed me. The fact that I can run software as intense as full-on CAD software and not even notice a slowdown, or edit 4K video without frame drops, and compile software in a few seconds, all without getting super hot or even kicking the fan on, amazes me. Until I used the M1 chips I was of the opinion "raw compute power over all else" - but that opinion very quickly changed. Ok cool, the 2022 XPS 13 Plus can beat my M1 Pro at native compilation, but can you do that all day while still having enough battery to watch a few YouTube videos before bed? If I need raw computer I have a Core i9 and RTX GPU in my PC at home.

The IO on the MB Pro 16" is what I would call *adequate*. All modern ultrabooks are following in Apple's footsteps of less ports is better thanks to USB-C, and while I get why they're doing it, you couldn't have included a *single USB-A port*? I know Dell doesn't do it either but I complained about it then too, I mean this thing has a full sized HDMI port, a USB-A port would've fit no problem, and you'd still have room for everything else! Other than the lack of USB-A, the inclusion of 3 Thunderbolt 4 compatible ports, a headphone jack, an SDXC Reader, and Apple's MagSafe 3 charging port, is plenty for the average user, and honestly even for me its enough for day-to-day use, its just mildly annoying that I have to dig out dongles now for my collection of USB flash drives. 

## Developer Experience

This is the main reason I wanted to try the Mac at all. And I get it now. Applications compile quickly and quietly, VSCode and all major editors have native versions now, though with how well this emulates x86 applications its not like you'd probably notice much of performance drop anyways. My entire toolchain, which currently consists of Go, Python, and NodeJS, all have native builds that run beautifully and quickly install via Homebrew. Since macOS is a Unix-based system, I felt right at home with all the Unix commands, and it even uses my favorite shell, Zsh, by default! 

My biggest complain about developing on Mac is related to Docker. Docker was not designed to run on macOS or Windows, so an alternative system to run Docker containers on systems, called Docker for Desktop, had to be developed. This system uses virtual machines that are running Linux, along with a bunch of abstraction, to make it *seem* like you're running Docker containers natively on your system. Because of this, Docker tends to have slightly degraded performance, and the build times can be a little long. However, for ARM64 containers, its not any slower than it would've been on Windows. However, I'm not working with ARM64 containers. All the applications I've been building using Docker **have** to run on x86 machines, so the containers have to be emulated. That's where the problem is. Docker's x86 emulation, even using experimental emulation and IO systems, is still *painfully slow* when compared to what I've been used to, which is native x86 on Linux. Now, there isn't a solution to this. I have to either suck it up, or switch back to Linux on x86. **Spoiler alert**: The latter is not gonna happen any time soon.

## Conclusion

I'm a Mac user now. Some people are going to be confused as to why my developer experience section is so short, but that's because I haven't really had anything to complain about. Apple's "*It just works!*" reputation has proven itself true for my use case. Now, will I also be buying an iPad and trading in my beloved Google Pixel 5 for an iPhone? Probably not anytime soon, unless Apple actually released their rumored USB-C iPhone this year, which currently is speculated *not* to happen. 

Currently, I'm also working on an article where I break down getting your new Macbooks set up for working as a developer, check back soon for that!
