   - Merge is a Git operation that combines the changes from different branches into one branch, creating a new commit that represents the merge result.
   - It's commonly used when you want to integrate changes from one branch into another branch.
   - Here's how you can perform a merge:
     1. Switch to the branch where you want to merge the changes (`git checkout <branch>`).
     2. Run the merge command (`git merge <source-branch>`), where `<source-branch>` is the branch from which you want to merge the changes.
     3. Git will attempt to automatically merge the changes. If there are any conflicts, you'll need to manually resolve them.
     4. After resolving conflicts (if any), commit the merge changes (`git commit`) with an appropriate commit message.
