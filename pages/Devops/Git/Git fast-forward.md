   - Fast-forward is a merging scenario where Git can directly move the branch pointer forward to incorporate the changes, without creating a new merge commit.
   - It occurs when the branch being merged into is ahead of the branch being merged.
   - Here's how a fast-forward merge works:
     1. Switch to the branch that you want to merge into (`git checkout <branch>`).
     2. Run the merge command (`git merge <source-branch>`), where `<source-branch>` is the branch you want to merge into the current branch.
     3. If the branch being merged into is directly ahead of the source branch, Git will perform a fast-forward merge by moving the branch pointer forward to match the source branch's latest commit.
