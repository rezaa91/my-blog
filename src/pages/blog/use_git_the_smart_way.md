---
path: "/use git the smart way by following these simple steps"
date: "Aug 19"
title: "Use git the smart way by following these simple steps"
summary: "If you are a developer, the chances are you have come across git at some point on your journey. Most likely it is a common tool which you use often, but are you using it wisely? Follow these steps to be more proficient with git."
image: "../../images/code.jpeg"
---

If you are a developer, the chances are you have come across git at some point on your journey.
Most likely it is a common tool which you use often, but are you using it wisely? Any Joe Bloggs
can pick up the basics of git in a few hours and start using it straight away. However,
resources are sparse when it comes to using git efficiently. Once you have learnt the commands
and find out what they do, that’s it, you are on your own! But how should you be using git? When
should you commit? How should you structure your branches? What should you do when something
goes wrong? This post serves to answer some of these questions.

### Commit related parts of your code
Each commit should contain only one group of change, this can span over several files, but the
changes in these files should all be related. For example, say there is a syntax error in one of
your JavaScript files, you may fix this and commit this with a message such as “fixed syntax
error which resulted from blah blah blah”. Another example might be you have added a
user-editable setting to your application where one file displays the setting on the UI,
another file has the sql to add this setting to the database, and another file passes the value
of this setting to the UI. As these changes are related, you can commit these together.

What you should avoid is committing groups of unrelated changes. For example, fixing a bug and
adding a default setting in the same commit. A commit message for a commit such as this might
be “fixed bug and added theme setting”. If your commit messages contain the word “and”, review
what you are committing!

So why should you avoid committing groups of unrelated changes? Using the example above, what if
you fixed the bug successfully, but you created an unrelated bug adding the setting? Oh and btw,
this needs pushing and deploying live later today! The lead developer says to forget the new
setting for this release but to keep the bug fix in, what do you do? If you committed these two
changes separately, you could just remove the unwanted commit from history and everything will
be sorted. But now, you will have to dig through the code to sort it out and re-commit. Either
that or remove the commit and fix the bug again!

In short, group your commits!

### Take time with your commit messages
A commit message should contain a brief description of what changes you are committing to the
repository. It should take you a minute or two to come up with a well thought out headline and
body so you, and your team (if applicable), know exactly what that commit includes.

A good rule of thumb is to avoid using the -m flag. I find that this forces you to write a very
short, blunt message. Instead, use git commit as is, to open up your terminal editor and write
out a concise message. Your commit message should include a snappy title to outline what you
have done. Use the body of your commit message to outline any details if appropriate.


### Squash your commits
I learnt this lesson early on in my career; I was working on a feature which wasn’t quite ready
to be reviewed, I (stupidly) decided not to commit and push my current work up remotely. My shift
finished and I went home. The next morning, I returned to the office to find a corrupted git
repository and all my work lost! Since then, I always commit my work, whether it is finished or not,
generally with a commit message like “blah blah WIP” (where WIP stands for work in progress), and I
push the change remotely.
You can imagine when I am working on large bit of code, my commit messages read like “work in progress”,
“still working on it”, “WIP” – this completely violates the point I made above. So how do I resolve this?
I squash my commits when the implementation I am working on is ready to be reviewed/merged. This
basically means condensing your changes over multiple commits in to one commit. I then amend the commit
message to follow the points made above. Simple.

### Delete your branches
Once you are finished with your branch, delete it! There are few things in life worse than going to checkout
a branch you can’t remember the name of, to then view your current branches and being presented with a list
longer than Apples terms and conditions.

### Pull often
You should be pulling changes often, especially if you work in a team. Using git pull allows you download
content from a remote repository, which therefore allows you to obtain the changes your team have been working
on. Generally speaking, you should pull changes first thing in the morning, before you push, before you rebase,
and anytime you think about it really. Bear in mind that pulling changes on a branch that someone else is also
working on may cause a conflict, in this instance is much safer to use git fetch. Although this shouldn’t
really happen if you have a good git structure.