---
date: "2020-06-16"
title: Git Gud. Advanced-ish Git Part 1. Squash!
---


# Intro

This article series will be short, simple articles about more advanced Git usage. This will range from squashing your many spelling errors down to one or two commits, to how to host your own Git server using nothing but a basic Linux server.

# *Squish!*

Say you're like me, and you tend to make a lot of spelling errors. I make so many spelling errors, in fact, that I installed a spell checker for my VSCode to make sure I don't use a misspelled variable many, many times in my code. This has caused me to make commit histories where I have many one or two lined changes, significantly increasing my commit count without increasing my code. 

For this example, I will be squashing three commits down to one. Here is a screenshot of the list of commits on [GitHub](https://github.com/chand1012/Discord-Tweet-Bot):

![Commits](./commits.png)

These will show as one commit to the user. First, clone and change into the directory:

```bash
git clone https://github.com/chand1012/Discord-Tweet-Bot.git
cd Discord-Tweet-Bot
```

After this, you will need to run the `git rebase` command, which allows us to squash as many commits as we want down to just one. GitHub will show us a list of commits that we squashed into the single commit. We can see this after the process is done. First, get the commit hash of the commit before the one you wish to squash back to. For this example, it was the last hash in the example:

```bash
git rebase -i da82519db9d38a142e09038edf9e7024846f1049
```

You will come to a file in `nano` that looks like this:

![Nano](./nano.png)

If you are squashing the previous commits the top commit must remain the same. For this example, we will squash the bottom two. Change the file so all of the first word of the line, `pick`, is changed to either `squash` or the letter `s`. This will squash the commits down to just one, retaining the commit messages as one long commit message. Here is what the file looked like for me:

![Squash](./squash.png)

Press `Ctrl-X` to save this file. You will them come to the file for the long commit message. I usually leave mine the same, but you can edit this file as you please. I leave mine the same, as it gives me a list of my (possible pretty useless) commit messages. Press `Ctrl-X` again when you are done. 

![Commits](./commits2.png)

After you finish that, you can push your new changes. To do this, you have to do a "force push". Otherwise, GitHub will see you have less commits and think you are on an older version of the repo. This can be achieved with the following:

```bash
git push -f 
```

Now the commit history looks like this:

![New History](./new_history.png)

You can also look at extended commit message, which is now a mash of all of the old commit messages, [here](https://github.com/chand1012/Discord-Tweet-Bot/commit/ad21aa628932576de85fea82465081b9e92ef734).

And that is a basic overview of how to squash commits with Git. Thank you for reading and I hope this helps you in the future!