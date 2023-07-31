To install Docker on Arch Linux, you can follow these steps:

1. Update Package Manager:
   ```
   sudo pacman -Syu
   ```

2. Install Docker:
   ```
   sudo pacman -S docker
   ```

3. Start and Enable Docker Service:
   ```
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

4. Add Your User to the Docker Group:
   ```
   sudo gpasswd -a your_username docker
   ```
   Note: Replace "your_username" with your actual username.

5. Log out and log back in or reboot your system for the group changes to take effect.

6. Verify the Docker Installation:
   ```
   docker --version
   docker info
   ```

   The above commands should display the Docker version and information.

Congratulations! Docker is now installed on your Arch Linux system. You can start using Docker to create and manage containers. Remember to prefix Docker commands with `sudo` if you're not running them as the root user or haven't added your user to the Docker group.