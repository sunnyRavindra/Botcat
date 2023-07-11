- Install [Asahi Linux]()https://asahilinux.org/
- Install below packages 
```
sudo pacman -S make git networkmanager xorg xorg-xinit libxinerama lbxrendr libxft fontconfig base-devel firefox alacritty neovim picom zsh xdotool upowwer sysstat bluez bluez-utils
```
- [[Install Yay]]
- Install [Obsidian](https://obsidian.md/)
```
yay -S obsidian
```
- Get [myArchRice](https://asahilinux.org/) from github and clone it in home directory
```
git clone https://github.com/sunnyRavindra/myArchRice.git ~/code/myArchRice
```
- Cd into myArchLinux/dwm 
```
sudo make clean install
```
- Cd into myArchLinux/st 
```
sudo make clean install
```
- Cd into myArchLinux/dmenu
```
sudo make clean install
```
- Install Pywall
```
yay -S pywal
```
- Copy nvim files from nvim to .config file.
```
https://github.com/sunnyRavindra/nvim.git ~/.config/nvim
```
- Install Github Cli
```
yay -S github-cli
```
- Change Shell
```
chsh -s /bin/zsh
```
- Copy alacritty.yml file from myArchRice repository to .config/allacritty/alacritty.yml
- Copy .Xresources in to ~ directory 
- Install Oh my zsh
```
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
```
- Copy .zshrc file from myArchRice folder
- Install Zsh AutoSugesstions 
```
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
```
- Source Zsh File 
```
Source ~/.zshrc
```
- Install Pywalfox
```
 yay -S python-pywalfox
```
- Install python 
```
sudo pacman -S python
sudo pacman -S python-pip
```
- Install Font awsome
