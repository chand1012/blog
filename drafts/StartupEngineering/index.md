---
date: "2022-04-12"
title: Startup Engineering
draft: true
---

Let me start by telling you a few relevant words about myself. I am a mostly self-taught software engineer currently in the process of finishing up my Bachelors in CS by the end of this year (2022). I have a tendency to take projects and tasks that are definitely more than I can chew, with the hopes of learning from the experience regardless of if my outcome is successful. I have a difficult time telling when I am an expert at something vs when I am a relative novice, however I am willing to point out mistakes and correct them to learn.

The last bit is especially relevant. Today I was called by my boss, sort-of-not-really out of the blue. We were discussing some of my engineering decisions with a colleague, and I made a few _major_ errors in the design of my code. Now, I am not one to get upset when people critique my code, especially if their concerns will help me make the code better and improve my skills as a developer. That doesn't mean I don't think

> "Holy crap they're right, why did I do that?"

This was the thought going through my head when reading the article a colleague sent me on best practices for the language we were using. The language we are using is similar to C++ in the sense that you can separate the declaration and implementation of the functions on a class or file. Object Oriented best practice would dictate that you should _definitely_ declare and implement your functions in separate files, either using an abstract class or some other functionality of the language. In this case, I was omitting an interface, which defined functionality that could be called by other systems in our stack. So if I knew this was best practice, why did I omit the interface?

## Self Taught Engineering

I am primarily a self taught developer. I learned how code and computers worked mostly by just, doing. When I learned something new conceptually, like an algorithm, I liked implementing it myself to fully understand it. And when I do implement whatever I'm trying to replicate, I liked to keep it simple, as simple as possible. Not simple in the least amount of characters, but simple in the sense that I could read the raw code and understand what's going on quickly, regardless of the comments I left for myself (or lack thereof). And when I say "implement", I don't _just_ mean code. Flowcharts, or even just taking notes, tends to help me learn how a script, algorithm, or even a massive codebase, works.

That being said, because I was primarily self taught by doing my own personal projects, I didn't want to take time to actual map out functionality or think about the little details. I was laser focused on the big picture of what my project does. This means that as long as the code completed the task I set for it, I didn't really care how it looked. If it got the job done, and I could understand how it worked, it was good enough. Generally I try to make my code as simple as possible, while still accomplishing the task at hand.

This method of simple engineering is also partially influenced by my work experience. While I have roughly 10 years of coding as a whole, I only _actually_ have 3 years of true industry experience, 2 of which have been mostly startup projects. This means that for a majority of my work experience, I have had to play the role of the "scrappy" developer, getting the features out quickly, while leaving code quality up to the linters.

That doesn't mean that all my code is functional spaghetti. Two of my colleagues I've worked with in the past were sticklers for code quality. Both have acted as mentors to me in the early years of my career, and have affected my style of code in different ways. However one attribute that rubbed off on me from both of them is regardless of _how_ your code gets the job done, it should still be good _quality_ code. It should conform to the style rules put in place by your company, it should not cause the linters or style checkers to throw lots of red flags, and you should be able to explain how it works in a brief manner.

## My Mistakes

My first mistake wasn't that the code I was writing was bad quality, or even that it wasn't up to best practice. My error was forgetting about the current state of the project.

Let me explain. The first job I worked for was at a company that specialized in industrial machinery. The software and firmware I helped develop were behind firewalls, and didn't store any information that would be considered dangerous. Since all the code was compiled, we didn't worry about security, and we weren't held to a high code standard since we were technically interns, so if it compiled and did was it was supposed to, no one cared.

At one of my previous jobs, security wasn't really at the forefront of our mind. The worst information that we could accidentally leak was their email addresses, and even that wasn't really that big of a deal. We didn't even store passwords since we used Single Sign On for all our authentication via a third party.

Finally, we get to my current job. We are in the finance and infrastructure sector. The software and products we are developing will be used at the infrastructure level for financial institutions and other businesses to host data and currency that's vital to their survival.

While I was on the phone with my boss, it hit me

> "My code will be responsible for handling **millions of dollars** in transactions."

My code, which I was developing with a "scrappy zero budget startup" mindset, will be responsible for the financial well being of potentially hundreds of clients, all of which have employees with families.

One key phrase I just mentioned was "zero budget". This is also no longer the case. We are on the verge of closing out our seed funding, which while I am not allowed to say how much, is a hell of a lot more money than none.

Its not just me developing this code. Its the team. And the current team of five is just the beginning, With our funding we are going to be able to hire more developers in the future that will help us further develop our product.

My second mistake was a lack asking questions. When I look at reference implementations for an algorithm, or I look at examples of how to do things, I shouldn't look at blocks of code and just think "well, this isn't explicitly needed, so lets cut it out to decrease complexity". What I _should_ do it take a step back and think _why_? Why did they use an abstract function? Was it just for best practice? Or was there something more? Why did they use this sorting algorithm when binary sort would've been just as fast and use less code?

So after taking a step back and getting off the phone, I went and corrected my mistakes.

# What does this all mean?

When I write code, especially when I am refactoring existing code, I need to sit back and think about why the developers made the decisions that they did, especially if the code I am working on is established working code. I also need to get out of my "startup bootstrapping" mindset and develop code as if I was at a real company, by making my code the highest quality and highest security code I've ever developed.

Do I consider myself a senior level developer? Maybe, depending on the company I'm working for. But this is not a company that I'm a senior developer at. This is code that is going to be

<!-- To be continued.-->
<!-- Talk more about how I need to read between the code more.
Add a good conclusion.
Clean up the intro.
Proofread. -->
