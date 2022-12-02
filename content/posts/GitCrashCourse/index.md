+++
title = "Git Beginner Crash Course"
date = "2022-12-02T16:09:08-05:00"
author = ""
authorTwitter = "" #do not include @
cover = ""
tags = ["git", "cli", "programming", "beginner"]
keywords = ["git", "cli", "programming", "beginner"]
description = "How to use Git & GitHub in 4 easy steps."
showFullContent = false
readingTime = false
hideComments = false
+++

![Cover Image](./image.png)

Cloning a git repo is one of the first steps to getting started with a new project or working on an existing project. It allows you to download a copy of an existing repository from a remote server and start making modifications. In this article, we'll go over how to clone a git repo, create a new branch, commit to the new branch, and then push the branch to the remote server. For this example we will use [GitHub](https://github.com/) as the remote server.

# Cloning the Repo

To begin, open your terminal and navigate to the directory where you want to clone the git repo. Then, run the following command, replacing “[repo name]” with the name of the repository you want to clone. An example of a repo name is `chand1012/blog` .

```bash
git clone https://github.com/[repo name].git
```

This will download the entire repository to your local machine.

# Creating a New Branch

Next, you'll want to create a new branch to work on. A branch can be thought of as a slightly different version of the source code that has the same starting history. The ultimate goal is to eventually merge the new branch back into the primary branch, usually called “main” or “master”. To do this, run the following command from within the repository's directory:

```bash
git checkout -b [branch name]
```

Replace “[branch name]” with the name you'd like to give your new branch.

# Adding & Committing Files

Now, you can start making changes to the repository and committing them to the new branch. To do this, first make your changes, then run the following command:

```bash
git add -A
```

Once the files have been added, you can commit the changes with the following command:

```bash
git commit -m "[message]"
```

Replace “[message]” with a brief description of your changes.

# Pushing the Branch

Finally, you can push the new branch to the remote server with the following command:

```bash
git push -u origin [branch name]
```

Replace “[branch name]” with the name of your new branch.

And that's it! You've successfully cloned a git repo, created a new branch, committed to the new branch, and pushed the branch to the remote server.
