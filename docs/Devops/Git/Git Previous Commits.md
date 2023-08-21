To check how your Git directory looked like and what files were present in previous commits, you can use the `git log` command in combination with the `--name-only` option. Here's how you can do it:

1. Open your command line or terminal.

2. Navigate to the root directory of your Git repository.

3. Run the following command:

   ```
   git log --name-only
   ```

   This command will display a log of all the previous commits in your repository, along with the list of files changed in each commit.

   The output will include commit information, such as the commit hash, author, date, and commit message, followed by the list of files changed in that commit.

   If you only want to see the file names without the commit information, you can use the `--name-only` option:

   ```
   git log --name-only --pretty=format:
   ```

   The `--pretty=format:` option ensures that only the file names are displayed.

   Additionally, you can use other options with `git log` to customize the output further. For example, you can limit the log to a specific branch, author, or time range using the respective options (`--branches`, `--author`, `--since`, etc.).

By running `git log` with the `--name-only` option, you can get an overview of the files changed in each commit and understand how your Git directory looked like in the previous commits.