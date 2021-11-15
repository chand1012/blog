---
date: "2021-11-14T20:00:00.00Z"
title: Driving a Car with a PS4 Controller
---

# The Why

About a year ago, my friend Ian bought a new car, along with a self-driving kit called a [CommaTwo](https://comma.ai/shop/products/two). This self driving kit uses a combination of your car, as well as an open source (as in free) program called OpenPilot. Here is OpenPilot's explanation as to what it is.

> OpenPilot is an open source driver assistance system. Currently, OpenPilot performs the functions of Adaptive Cruise Control (ACC), Automated Lane Centering (ALC), Forward Collision Warning (FCW) and Lane Departure Warning (LDW) for a growing variety of supported car makes, models and model years. In addition, while OpenPilot is engaged, a camera based Driver Monitoring (DM) feature alerts distracted and asleep drivers.

This device does not allow any car to be control by it, only those on the [official list](https://comma.ai/vehicles), including Ian's Corolla.

Here is Ian's explanation on how he got into OpenPilot and why he purchased the Comma.

> Number of years ago now I watched some video about [OpenPilot](https://github.com/commaai/openpilot). I don't recall of it was the launch video for the CommaTwo or if it was covering even earlier hardware. I did buy the comma device when I bought the car. It honestly played a relatively large role in determining which vehicle to buy. Larger than it maybe should have, but I really don't regret it, so whatever.

> Back in August, a few friends and I took a trip down to Alabama. We took my car and drove it in self driving mode the way down there. On the way back up, one friend pulled out a PS5 controller and put it in the hands of the driver at the time. We joked about driving the car with the controller and made some videos joking about it. I knew it was possible at the time, but never really acted on it. When Chandler showed interest though, I jumped at the opportunity to fuck around with my expensive toys.

# The How

The main repo that contains the code for OpenPilot contains a [tools directory](https://github.com/commaai/openpilot/tree/master/tools).
This is primarily for setting up your computer to test the software. However, also in this tools directory, there is a file called [joystickd.py](https://github.com/commaai/OpenPilot/blob/7ca76edf0512e3302c885e3cbfe9b2bfe0844f89/tools/joystick/joystickd.py).
This is a test file that one of the developers created to test the steering, throttle, and brake control of the Comma. All we had to do was put the Comma in "Joystick Testing Mode", run a program on the Comma that looks for messages from a connected network device, and then run the script on a laptop with a controller connect. Easy, right?

Well, that's where it all fell apart. I made the mistake of assuming that since that `joystickd.py` was a Python script, not a compiled program, I could just download the code and run it. Before you can run any of the scripts in the tools folder, you need to compile OpenPilot on your computer. I was going to just install the dependencies and run it on my laptop, but I run Arch Linux, which is not on the list of supported Operating Systems that can build and run OpenPilot. We spent about two hours just trying to get OpenPilot to run on my laptop via a Virtual Machine, while Ian simultaneously installed Ubuntu, one of the supported operating systems, on a crappy old laptop from 2012 that he had laying around, which in itself took about two hours to complete. After we threw out the idea of using my laptop to run the code, we decided to use Ian's 2012 HP Crapbook. Downloading all the dependencies, building the code, and getting the code to initially run, took about 30 minutes on its own. After this was running, we got in the car and tried it. In summary: Code runs on Ubuntu, we only have Arch Linux. Need to install Ubuntu. Takes Time. Lots of Time. Its installed! Lets try it.

Nothing happened. Ian then remembered that his device was running the release version of the self-driving code, the code that was the least likely to crash his car. We needed the super unstable development version of the self-driving code so that all of the developer tools would be enabled. After going inside and building the code, we went back out for a second try.

I tested out driving with the keyboard first. I gave it throttle and it worked with the keyboard, awesome! We then attached the controller to the computer and tried it again. For some reason, the left stick was the throttle and the steering was the left trigger. Knowing that we _can_ drive the car, we decided to continue testing at our designed testing site so we don't destroy his parents' yard or house.

We get to the site and start [re-configuring the script](https://github.com/chand1012/openpilot/blob/30cb959c7649627d1468b1df66d0dfc76003785a/tools/joystick/joystickds4.py). After changing the axis values so that the steering was the X axis on the left stick and so that the throttle was the Y axis on the right stick, we tried it one more time.

It worked! It was just as terrifying as it sounds. Imaging driving a Warthog in Halo, with the sticks flipped, from the first person. But its a real car. Imagine playing Gran Turismo from the first person, but you feel the car move, you feel the G-Force, you feel the turning. Because you are literally in the car that is driving.

We then did some tuning to make the experience a little easer. The torque on the steering motor was a bit limited so we tried to limit its acceleration so that the Comma didn't yell at us as much about the torque being exceeded. It didn't work. This is a safety feature that is needed to make sure you don't forget to grab the wheel when going around a tight corner with self-driving mode enabled, but was just getting annoying when we were just driving slowly around the parking lot, and was really annoying when the Comma would cut power to the steering motor completely due to exceeding the torque limit. These are safety features that we aren't supposed to change or remove, but could be remedied by increasing the torque limit of the motor slightly. All of our changes were futile and since we can't modify the torque limit without recompiling the whole project, we decided to save that for a second attempt in the future.

We then spent the better part of hour just trying to drive the car with the controller in different ways. Ian at one point got in the back seat and literally became a backseat driver.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/K2-p9NRU7Cs?start=22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
