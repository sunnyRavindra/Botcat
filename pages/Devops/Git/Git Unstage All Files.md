To unstage all the staged files in Git, you can use the following command:

```bash
git reset
```

Running `git reset` without any additional arguments will unstage all the files that were previously staged, effectively removing them from the staging area.

Make sure to run this command at the root directory of your Git repository. After executing `git reset`, the files will be removed from the staging area, but their modifications will still be retained in your working directory.