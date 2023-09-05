To pass parameters to a custom command defined in your `.zshrc` file, you can modify the function to accept arguments and then call it with the desired parameters. Here's an example:

```shell
# .zshrc

# Define your custom function
func() {
    echo "First parameter: $1"
    echo "Second parameter: $2"
    echo "Third parameter: $3"
}
```

In this example, the `func` function is defined with three parameters. Inside the function, you can access these parameters using the `$1`, `$2`, and `$3` variables.

To call this function with parameters, you can do so in your terminal:

```shell
func value1 value2 value3
```

Replace `value1`, `value2`, and `value3` with the actual values you want to pass as parameters.

When you run the custom command `func` with the provided parameters, it will execute the function and display the values of the parameters in the terminal.

Remember to reload your `.zshrc` file in the terminal after making changes to it so that the modifications take effect:

```shell
source ~/.zshrc
```