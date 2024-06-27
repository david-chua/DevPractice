## Research Questions

Now that you are all set up, it's time to learn a little more about the tools of the trade. Edit this file and answer the following questions. You are going to need to start familiarizing yourself with the [GitHub docs](https://docs.github.com/en). Docs (short for documentation) are the instructions on how to use a languge or program. A large part of your job as a developer will be learning how to read and work with documentation. Please reference the GitHub docs when answering the questions below. If you cannot find what you are looking for in the docs, you can always start to practice your Google skills!

1. What is Git?
- Git is a version control system that intelligently tracks changes in files.
2. What is the difference between Git and GitHub?
- Git is a version control system while Github is a Git repository hosting service.
3. Why do we create a branch?
- It allows us to work on different portions of the code without running into issues when a different developer is working on a similar issue.
4. What is the purpose of a Pull Request?
- It's a request to review and approve a code change done in a different branch.
5. What is the command you can use to switch between branches? For example you are working on FIRSTNAME-LASTNAME branch and you want to switch back to main.
- git checkout
6. Explain the difference between `git fetch`, `git merge` and `git pull`. What does each command do?
- git fetch retrieves the changes from the remote repository but does not automatically merge it
- git merge combines the 2 branch based on a common base commit.
- git pull fetches the changes from the remote repository and merges it.
7. What is a merge conflict?
- it's an event that occurs when Git is unable to automatically resolve differences between two commits. It can be two developers workin gon the same file lines at the same time, a deletion and edit of the same file. Difference in edited lines.
8. How do you resolve a merge conflict?
- work on the file and fix any issues where the merge conflict occurs, these conflicts are labeled by git when an issue occurs.
