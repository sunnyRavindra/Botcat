If you are calling a script inside your custom function in the `.zshrc` file and not seeing the output in the terminal, it could be because the script is running in a subshell. By default, a subshell does not inherit the I/O streams of the parent shell.

To ensure that the output of the script is displayed in the terminal, you can use the `source` command (or its `.` alias) to run the script within the same shell environment. This allows the script to inherit the I/O streams of the parent shell.

Here's an example of how you can modify your custom function to source the script:

```shell
# .zshrc

# Define your custom function
func() {
    echo "Calling script..."
    source /path/to/your/script.sh
    echo "Script execution complete."
}
```

In this example, the `source` command is used to execute the script within the same shell environment. Replace `/path/to/your/script.sh` with the actual path to your script.

When you call the custom command `func`, it will execute the script and display its output in the terminal. The additional echo statements before and after sourcing the script are included for debugging purposes, to help identify if the script execution is reached or completed.

Remember to reload your `.zshrc` file in the terminal after making changes:

```shell
source ~/.zshrc
```

Now, when you execute your custom command `func`, you should see the output of the script within the terminal.