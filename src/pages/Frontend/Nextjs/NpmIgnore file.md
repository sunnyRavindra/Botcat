There is a commonly used file named `.npmignore`, which serves a similar purpose to `.gitignore`. The `.npmignore` file tells npm which files and directories should be excluded when your package is published to the npm registry.

Here's how you can create and use a `.npmignore` file:

1. Create the file: In the root directory of your npm package, create a file named `.npmignore`.

2. List files and directories to ignore: Inside the `.npmignore` file, list the files and directories that you want to exclude from being included in the published npm package. Each item should be on a separate line.

   For example:
   ```
   # Ignore all files in the "docs" directory
   docs/

   # Ignore specific files
   private-file.txt
   sensitive-data.json
   ```

3. Rules and Patterns: The rules for `.npmignore` are similar to those of `.gitignore`. You can use wildcards, negation patterns, and comments. Here are some examples:

   - `*`: Ignore all files and directories.
   - `node_modules/`: Ignore the entire "node_modules" directory.
   - `!important-file.js`: Do not ignore a specific file even if it matches previous patterns.

4. Verify and publish: Before publishing your package to npm, verify the contents of the `.npmignore` file to ensure it's excluding the intended files. When you run `npm publish`, npm will use the `.npmignore` file to determine which files should not be included in the published package.

It's essential to include the necessary files and exclude irrelevant ones to keep your published package clean and lightweight. This is especially crucial if you have large files, test data, or build artifacts that are not required for the functioning of your package.

Please note that npm and its features may have evolved beyond my knowledge cutoff date. It's always a good idea to consult the official npm documentation or other reliable sources for the latest information on this topic.