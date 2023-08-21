To install `yay` on Arch Linux, you can follow these steps:

1. Clone the `yay` repository:
   ```
   git clone https://aur.archlinux.org/yay.git
   ```

2. Enter the `yay` directory:
   ```
   cd yay
   ```

3. Build and install `yay` using `makepkg`:
   ```
   makepkg -si
   ```

   This command will compile the package and install it using `pacman`.

4. Once the installation is complete, you can start using `yay` to install packages from the AUR. For example, to install Obsidian, you can run:
   ```
   yay -S obsidian
   ```

   `yay` will handle the retrieval, build, and installation process for the package you specify.

That's it! You have successfully installed `yay` on your Arch Linux system. You can now use it as an AUR helper to install packages from the AUR.

Remember to keep your system updated regularly using the package manager (`pacman -Syu`) and `yay` (`yay -Syu`).