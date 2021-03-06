---
date: "2020-12-14"
title: Fixing Commit Messages. Git Gud. Advanced-ish Git Part 2. 
---

# Intro

Sometimes you're in a rush, and you screw up while typing. Sometimes you're given a repo from a colleague or your company assigns you one and there are typos in the older commit messages, or you just cannot stand the structure and typos of the old commit messages (which is a situation I was in recently). This short tutorial will show you how to fix them. Take this repo for example:

![Example](./gitgud2example1.png)

There are two things in that picture I don't like. First of all, the original author committed changes under two different Git names and emails, making the commit messages on GitHub a little screwy. Second, the "Initial commit" message is misspelled. Finally, just putting "WIP" in a commit message is bad practice, and should be changed to what was actually done. 

# Rebase time!

In my [previous Git tutorial](https://chand1012.dev/git-gud1/), I mentioned the `git rebase` command. We will be doing this again, but with slightly different syntax and process. In the original example, I used the command in the following form: `git rebase -i da82519db9d38a142e09038edf9e7024846f1049`. This used the commit hash to go back to the commit I want to change. This would normally be acceptable, but I need to go *all* the way back to the beginning of the commit history. Fortunately, the repo in question only has nine commits total, so this won't be hard in this case, but for larger repos, this process could take a long time. 

```bash
git rebase --root -i
```

This will open up a file in the default editor for git that looks like so:

![Rebase Default](./gitgud2example2.png)

Replace the word `pick` with the letter `r` or the word `reword` at each commit you want to change, like so:

![Rebase Edited](./gitgud2example3.png)

After doing this, save and close the file. This will then open up another editor with the commit message you wish to change:

![Commit Message Example](./gitgud2example4.png)

Fix the message, then save and close the file. This process will repeat for each commit message. For the next commit message, the message was void of any changes, just saying "WIP".

![Lackluster Commit Message](./gitgud2example5.png)

For this one, I am going to consult the `git diff`. I could open up another terminal window and do this on the command line, but this repo is on GitHub, so I am going to consult the `diff` there.

![GitHub Diff](./gitgud2example6.png)

As shown in the figure above, the original author removed the file `VideoAndMetadataToYoutube.py` and changed the `Storage` object's initialization string, so that's what I'll put in the commit message.

![Fixed Commit Message](./gitgud2example7.png)

Save and close the file. This will conclude the rebase and fixing your commit messages. You should see terminal output that looks similar to this:

![Terminal Output](./gitgud2example8.png)

Finally, force push to the repo:

```bash
git push -f origin master
```

This will update your changes. And that's it! You have successfully updated your previous commit messages. If you liked this tutorial, consider reading my previous Git tutorial: [Git Gud. Advanced-ish Git Part 1. Squash!](https://chand1012.dev/git-gud1/)