To check the previous version of a specific file in your Git repository, you can use the `git show` command followed by the commit hash or branch name and the path to the file. Here's the syntax:

```
git show <commit>:<file-path>
```

Replace `<commit>` with the commit hash or branch name that contains the desired version of the file, and `<file-path>` with the path to the file within the repository.

For example, to check the previous version of the `index.html` file in the current branch, you can use the following command:

```
git show HEAD~1:index.html
```

Here, `HEAD~1` refers to the previous commit relative to the current commit, and `index.html` is the file you want to view.

If you know the commit hash where the previous version of the file exists, you can use that instead of `HEAD~1`. For instance:

```
git show abc123:index.html
```

Replace `abc123` with the actual commit hash.

Running the `git show` command will display the content of the file as it existed in the specified commit or branch. You will see the changes made in that particular version of the file along with other commit information.

Note that `git show` only displays the content of a single file at a specific commit. If you want to compare multiple versions of a file or view more extensive history, you may consider using Git graphical tools or other commands like `git log` or `git diff`.