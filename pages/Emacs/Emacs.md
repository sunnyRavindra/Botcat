To install the changes you made to your Doom Emacs configuration, you need to recompile and refresh your configuration. Follow these steps:

1. Save your changes to the `init.el` or `config.el` file in your Doom Emacs configuration directory.

2. Open a terminal and navigate to your Doom Emacs configuration directory. By default, it is located at `~/.doom.d/`.

3. Run the following command to recompile your configuration:

   ```shell
   doom sync
   ```

   This command will update the compiled `init.elc` file, which contains the bytecode for your configuration.

4. After the compilation is complete, you can restart Doom Emacs. You can do this by closing and reopening Emacs or by using the following command within Emacs:

   ```
   M-x restart-emacs RET
   ```

   After restarting, your changes should take effect, and any new plugins or modifications you made to existing plugins will be installed and activated.

Note: The specific commands and keybindings mentioned here assume that you have Doom Emacs installed and configured properly. Make sure you have followed the installation instructions for Doom Emacs and have your `init.el` or `config.el` file set up correctly.