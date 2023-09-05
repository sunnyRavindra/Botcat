To check all the Git commits in a repository, you can use the `git log` command. It provides a detailed history of commits, showing information such as commit hashes, authors, dates, and commit messages. Here are some commonly used options with `git log`:

1. Display All Commits:
   ```
   git log
   ```

   This command displays the commit history starting from the latest commit.

2. Limit the Number of Commits:
   ```
   git log -n <number>
   ```

   Replace `<number>` with the desired count of commits to display. For example, `git log -n 10` shows the last 10 commits.

3. Show Author Information:
   ```
   git log --author=<author>
   ```

   Replace `<author>` with the name or email address of a specific author to filter the commit history.

4. Filter by Time Range:
   ```
   git log --since=<date>
   git log --until=<date>
   ```

   Use `--since` to view commits since a particular date, and `--until` to view commits until a specific date. Replace `<date>` with a date in various formats such as `YYYY-MM-DD` or relative values like `2 weeks ago`.

5. Show Commit Details:
   ```
   git log --stat
   ```

   This option includes additional information such as file statistics, displaying the number of insertions and deletions in each commit.

6. View a Compact Commit Summary:
   ```
   git log --oneline
   ```

   This option provides a compact summary of each commit on a single line, showing only the commit hash and the commit message.

These are just a few examples of how you can customize the `git log` command to suit your needs. You can combine multiple options and explore other flags and formatting options to further refine the output according to your requirements.