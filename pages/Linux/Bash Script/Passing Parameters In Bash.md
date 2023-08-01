In Bash scripts, you can pass parameters to the script when executing it from the command line. These parameters are accessed within the script using special variables. The most common variables used for parameter passing are `$1`, `$2`, `$3`, and so on, which represent the first, second, third, and subsequent parameters, respectively. Here's an example:

```bash
#!/bin/bash

echo "First parameter: $1"
echo "Second parameter: $2"
echo "Third parameter: $3"
```

In this script, the values of the first, second, and third parameters are accessed using the variables `$1`, `$2`, and `$3`, respectively. You can access up to 9 parameters using these variables. To access parameters beyond the ninth, you can use curly braces like `${10}`, `${11}`, and so on.

Save this script with a `.sh` extension (e.g., `param_script.sh`). To pass parameters to the script, execute the following command:

```bash
bash param_script.sh value1 value2 value3
```

Replace `value1`, `value2`, `value3`, and so on with the actual values you want to pass as parameters. The script will display the values of the parameters in the terminal.

If you want to access all the passed parameters as a list, you can use the `"$@"` variable. For example:

```bash
#!/bin/bash

echo "All parameters: $@"
```

When running the script with parameters, like `bash param_script.sh value1 value2 value3`, the script will display all the passed parameters as a list: "value1 value2 value3".