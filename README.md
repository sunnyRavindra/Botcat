# Cloud-DevOps-Large-Enterprise-Practical-Guide 

- [Introduction](#Introduction)
- [Docker](#Docker)
  - [Docker-Basics](#Docker-Basics)
  - [Docker-Architecture](#Docker-Architecture)
  - [Docker-Demon](#Docker-Demon)
  - [Docker-Client ](#Docker-Client )
  - [Docker-Desktop](#Docker-Desktop)
  - [Docker-Image](#Docker-Image)
  - [Docker-Container](#Docker-Container)
  - [Build-Container-Image](#Build-Container-Image)
  - [Build-Container-Image-Example](#Build-Container-Image-Example)
  - [Start-Container-Image ](#Start-Container-Image )
  - [Updating-Docker-Container](#Updating-Docker-Container)
  - [Docker-Image-Sharing](#Docker-Image-Sharing)
  - [Docker-Registry](#Docker-Registry)
  - [Docker-Volumes](#Docker-Volumes)
  - [Docker-Bind-Mounts](#Docker-Bind-Mounts)
  - [Differences-Between-Bind-Mount-and-Volumes](#Differences-Between-Bind-Mount-and-Volumes)
  - [Container-Networks](#Container-Networks)
  - [Relationship-between-Docker-Desktop-and-Docker-Engine](#Relationship-between-Docker-Desktop-and-Docker-Engine)
  - [DNS](#DNS)
  - [Single-Docker-Example ](#Single-Docker-Example )
  - [Multiple-Docker-Example ](#Multiple-Docker-Example )
  - [Docker-Commands](#Docker-Commands)
  - [DNS-Round-Robin](#DNS-Round-Robin)
  - [Env-Variables](#Env-Variables)
  - [Arguments](#Arguments)
- [Markdown](#Markdown)
- [Emacs](#Emacs)
- [Elisp](#Elisp)
- [Learning-Inprogress](#Learning-Inprogress)
  - [Todo](#Todo)
- [Vim-Cheat-Sheet](#Vim-Cheat-Sheet)
  - [Navigation](#Navigation)
  - [Editing](#Editing)
  - [Search-and-Replace](#Search-and-Replace)
  - [Saving-and-Quitting](#Saving-and-Quitting)
  - [Other-Useful-Commands](#Other-Useful-Commands)
- [Masters-Program ](#Masters-Program )
  - [Finland ](#Finland )
  - [Netherlands ](#Netherlands )
  - [Germany ](#Germany )
  - [Canada](#Canada)
  - [USA ](#USA )
  - [Norway](#Norway)
  - [Denmark](#Denmark)
  - [Newzeland](#Newzeland)
  - [Australia ](#Australia )
- [Create-Github-hosted-React-Frontend](#Create-Github-hosted-React-Frontend)
  - [Next-js-frontend](#Next-js-frontend)
  - [Moving-to-Next-js ](#Moving-to-Next-js )
- [Docker-Compose](#Docker-Compose)
  - [Compose-Important-Points](#Compose-Important-Points)
  - [Compose-File-Structure](#Compose-File-Structure)
  - [Compose-Basic-Commands](#Compose-Basic-Commands)
  - [Compose-Advanced-Commands](#Compose-Advanced-Commands)
  - [Compose-Environment-Variables](#Compose-Environment-Variables)
  - [Compose-Volumes](#Compose-Volumes)
  - [Compose-Networking](#Compose-Networking)
  - [Compose-Extending-Services](#Compose-Extending-Services)
## Introduction
Welcome to the Cloud Architect Large Enterprise Practical Guide! This comprehensive guide is designed to provide Cloud Architects working in large enterprise environments with a practical approach to learning. It covers a range of topics, including DevOps practices, software development methodologies, and cloud infrastructure design.

## Docker

### Docker-Basics
1. Containers package code and its dependencies for reliable and fast execution.
2. Docker containers are lightweight and standalone.
3. They include everything necessary to run an application: code, runtime, tools, libraries, and settings.
4. Container images become containers during runtime.
5. Docker containers rely on Docker Engine to become containers.
6. Containers work consistently across different infrastructures.
7. Containers isolate software from the environment.
8. Containers ensure uniform functionality across different stages like development and staging.
#### Reference
- Documents -> https://www.docker.com
- Getting Started -> https://docs.docker.com/get-started/
- Download -> https://docs.docker.com/get-docker/

### Docker-Architecture
1. Docker uses a client-server architecture.
2. The Docker client interacts with the Docker daemon.
3. The Docker daemon performs tasks such as building, running, and distributing Docker containers.
4. The Docker client and daemon can be on the same system or connected remotely.
5. Communication between the Docker client and daemon occurs through a REST API.
6. The communication can take place over UNIX sockets or a network interface.
7. Docker Compose is another client that allows working with applications consisting of multiple containers.
8. Docker Compose helps manage the configuration and deployment of multi-container applications.
#### Reference
- Docker Architecture -> https://docs.docker.com/get-started/overview/

### Docker-Demon
1. The Docker daemon, also known as dockerd, is a core component of Docker.
2. It serves as the main process running on a Docker host, responsible for managing Docker objects.
3. The Docker daemon listens for Docker API requests, allowing clients to interact with Docker.
3. It manages various Docker objects, including images, containers, networks, and volumes.
4. The Docker daemon handles tasks such as creating, starting, stopping, and deleting Docker containers.
5. It is responsible for managing the lifecycle of Docker services and coordinating their operations.
6. The Docker daemon can communicate with other daemons, enabling the management of Docker services across multiple hosts.
7. Docker clients, such as the Docker command-line interface (CLI) and Docker Compose, interact with the Docker daemon to execute commands and manage Docker resources.

### Docker-Client 
1. It is the primary tool used to execute commands and manage Docker resources.
2. Users interact with the Docker client to perform actions such as running containers using the docker run command.
3. The Docker client sends commands to the Docker daemon (dockerd) for execution.
4. It utilizes the Docker API to communicate with the Docker daemon.
5. The Docker client can communicate with multiple Docker daemons if necessary.
6. It provides a command-line interface (CLI) for executing Docker commands and managing Docker objects.
7. The Docker client plays a crucial role in orchestrating Docker operations and managing the Docker environment.

### Docker-Desktop
1. Docker Desktop is an application designed for Mac, Windows, and Linux environments.
2. It provides an easy installation process to set up Docker on your machine.
3. Docker Desktop enables the building and sharing of containerized applications and microservices.
4. It includes essential components such as the Docker daemon (dockerd) and the Docker client (docker).
5. Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper are also included in Docker Desktop.
6. Docker Desktop offers a user-friendly interface and environment for managing Docker resources.
7. It simplifies the development and deployment of containerized applications on local machines.
8. Docker Desktop is a comprehensive toolset that integrates multiple Docker-related functionalities.
9. For more detailed information about Docker Desktop, it is recommended to refer to the official Docker Desktop documentation.
#### Reference
- Docker Desktop -> https://docs.docker.com/get-started/overview/

### Docker-Image
1. An image in Docker is a read-only template containing instructions for creating a Docker container.
2. Images are often based on other images, allowing for customization and additional layers.
3. For example, an image can be based on the Ubuntu image and include the Apache web server, application, and necessary configurations.
4. Images can be created by individuals or obtained from registries where they are published by others.
5. To build a custom image, a Dockerfile is used, which defines the steps to create and run the image.
6. Each instruction in a Dockerfile creates a layer in the image, allowing for incremental and efficient updates.
7. When changes are made to the Dockerfile and the image is rebuilt, only the affected layers are rebuilt, making images lightweight and fast.
8. Docker images are designed to be smaller and more efficient compared to other virtualization technologies.
9. Images serve as a basis for creating and running containers, providing a consistent environment for applications.

### Docker-Container
1. Containers are runtime instances created from Docker images.
2. They provide a lightweight and isolated environment for running applications.
3. Containers are created using the instructions specified in the Dockerfile and the layers from the corresponding Docker image.
4. Each container has its own filesystem, processes, and network interface, which are isolated from the host system and other containers.
5. Containers allow for consistent application execution across different computing environments.
6. They provide portability and reproducibility, ensuring that applications run reliably regardless of the underlying infrastructure.
7. Containers are scalable and can be easily deployed and managed in orchestration platforms like Kubernetes.
8. They offer resource efficiency by sharing the host system's kernel, reducing overhead compared to traditional virtualization.
9. Containers are ideal for deploying microservices-based architectures and enabling containerized application development.
10. Docker provides tools and APIs to manage and orchestrate containers, making it easy to deploy, scale, and monitor containerized applications.

### Build-Container-Image
1. Create a Dockerfile: Start by creating a text file called "Dockerfile" (with no file extension) in the root directory of your project.
2. Choose a base image: Specify the base image you want to use for your application. This can be an official image from Docker Hub or a custom image.
3. Define dependencies and configurations: Install any dependencies or packages required by your application. Configure environment variables, working directory, ports, and other necessary settings.
4. Copy application files: Copy your application code and files into the image using the `COPY` instruction.
5. Execute commands: Use the `RUN` instruction to execute any commands needed during the image build process, such as installing dependencies, compiling code, or running scripts.
6. Expose ports (optional): If your application requires specific ports to be accessible, use the `EXPOSE` instruction to specify them.
7. Define the default command: Use the `CMD` instruction to define the command that should be run when a container based on the image is started.
8. Build the image: Open a terminal or command prompt, navigate to the directory containing the Dockerfile, and run the `docker build` command, specifying a tag for the image. For example:
```
docker build -t myimage:latest .
```
9. Wait for the build process: Docker will execute the instructions in the Dockerfile and build the image. This may take some time, depending on the size of the image and the complexity of the instructions.
10. Verify the image: After the build process completes successfully, you can verify the newly created image by running `docker images` and checking for the image with the specified tag.

### Build-Container-Image-Example
```
# Use an official Python runtime as the base image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the working directory
COPY . .

# Expose a port (optional)
EXPOSE 8000

# Define the command to run the application
CMD ["python", "app.py"]
```
1. above example uses the official Python 3.9 slim-buster image as the base.
2. Sets the working directory inside the container to /app.
3. Copies the requirements.txt file from the host to the working directory in the container.
4. Installs the dependencies listed in requirements.txt using pip.
5. Copies the entire application code from the host to the working directory in the container.
6. Optionally exposes port 8000 to allow incoming connections (adjust the port number as needed).
7. Sets the command to run the application using the CMD instruction, which in this case runs the app.py script with Python.

### Start-Container-Image 
1. Use the `docker run` command to start a container based on the image. Specify any desired options or configurations and provide the image name and tag. For example:
```
docker run -p 8000:8000 myimage:latest
```
In this example, `-p 8000:8000` maps port 8000 on the host to port 8000 in the container. Adjust the port mapping as needed for your application.
2. Wait for Docker to download the necessary layers and start the container. You should see the container ID or name printed in the terminal, indicating that the container is running.
3. Access your application: If your application is a web server listening on port 8000, you can open a web browser and navigate to `http://localhost:8000` to access it. Adjust the URL and port number based on your application's configuration.
5. To stop the container, press `Ctrl + C` in the terminal where it is running. The container will be stopped and removed.
    
### Updating-Docker-Container
1. Make the necessary changes to your application source code.
2. Open a terminal or command prompt.
3. Build a new Docker image with the updated source code using the same Dockerfile and a new tag. Navigate to the directory containing the Dockerfile and run the `docker build` command again. For example:
```
docker build -t myimage:latest .
```
Make sure to specify a different tag (e.g., `myimage:updated`) to differentiate it from the previous image.
4. Wait for the new image to build. Docker will only rebuild the layers that have changed, making the process faster.
5. Once the new image is built, stop and remove the existing container. Run the following command to list all running containers:
```
docker ps
```
Identify the container ID or name corresponding to the running container based on the previous image.
Then, stop and remove the container using the `docker stop` and `docker rm` commands, respectively. For example:
```
docker stop container_id_or_name
docker rm container_id_or_name
```
6. Run a new container using the updated image. Use the `docker run` command as mentioned earlier, specifying the updated image name and any desired options or configurations. For example:
```
docker run -p 8000:8000 myimage:updated
```
7. Wait for Docker to download the necessary layers and start the new container.
8. Access your application to verify that the changes have taken effect. Use the appropriate URL and port number as configured in your application.

### Docker-Image-Sharing
1. Ensure that your containerized application is running and working correctly on your local machine. Verify that it functions as expected and that any necessary dependencies or configurations are in place.
2. Commit the running container to a new Docker image. Open a new terminal or command prompt and use the `docker commit` command to create an image based on the running container. Specify the container ID or name and provide a name and tag for the new image. For example:
```
docker commit container_id_or_name myimage:shared
```
Replace `container_id_or_name` with the actual ID or name of the running container, and choose a name and tag for the new image (e.g., `myimage:shared`).
3. Tag the image with a version or any additional information if desired. This step is optional but can be helpful for tracking different versions of the shared image. For example:
```
docker tag myimage:shared myimage:v1.0
```
4. Log in to a Docker registry (such as Docker Hub) if you haven't already. This step is necessary if you want to push the image to a registry that requires authentication. Use the `docker login` command and provide your credentials as prompted.
5. Push the image to the Docker registry. Use the `docker push` command and specify the image name and tag to push it to the registry. For example:
```
docker push myimage:shared
```
6. Provide the necessary information to others who wish to use your shared image. Share the image name and tag, along with any relevant instructions or documentation, so that others can pull and run the containerized application.
7. Others can now pull and run the shared image on their own machines using the `docker pull` and `docker run` commands, as described earlier. They should be able to use the image you shared to run the containerized application locally.

### Docker-Registry
1. A Docker registry is a storage system that stores Docker images.
2. Docker Hub is a popular public registry available for general use.
3. Docker is configured to search for images on Docker Hub by default.
4. Users can also set up their own private registry.
5. The docker pull or docker run commands retrieve required images from the configured registry.
6. The docker push command allows users to upload their own images to the configured registry.
7. Docker registries enable efficient storage and distribution of Docker images.
8. They provide a centralized location for sharing and accessing container images.
9. Docker Hub is a widely used public registry for discovering and sharing Docker images.
10. Private registries offer additional control and privacy for organizations and individuals.
11. A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.
12. When you use the docker pull or docker run commands, the required images are pulled from your configured registry. When you use the docker push command, your image is pushed to your configured registry.
13. Set up a Docker registry: You have the option to use Docker Hub (a public registry) or set up your own private registry. If you choose to set up a private registry, you can use tools like Docker Registry or third-party solutions.
14. Log in to the Docker registry: If you are using Docker Hub or a private registry that requires authentication, log in to the registry using the `docker login` command. Provide your registry credentials (username and password) as prompted.
15. Tag your Docker image: Before pushing the image to the registry, it's recommended to tag it with the appropriate registry URL and repository name. Use the `docker tag` command to create a new tag for the image. For example:
```
docker tag myimage:latest myregistry/myrepository:latest
```
Replace `myimage:latest` with the name and tag of the image you want to share. Adjust `myregistry` and `myrepository` with the appropriate registry URL and repository name.
16. Push the Docker image to the registry: Use the `docker push` command to push the tagged image to the registry. For example:
```
docker push myregistry/myrepository:latest
```
Docker will upload the image and its layers to the registry. This may take some time depending on the size of the image and your network connection.
17. Verify the image on the registry: You can check the Docker registry (either Docker Hub or your private registry) to ensure that the image has been successfully pushed and is available for others to pull.
- Docker Registry -> https://docs.docker.com/get-started/overview/

### Docker-Volumes
1. Docker volumes are managed by Docker and are independent of the host file system.
2. Volumes are designed to persist data even if the container is stopped or deleted.
3. Volumes can be created and managed using Docker commands or Docker Compose files.
4. They provide an easy way to share data between containers.
5. Docker volumes can be named, making it convenient to reference them in multiple containers.
6. Volumes can be created with specific drivers to support network storage, cloud providers, or other specialized storage systems.
7. The data inside a volume can be accessed by multiple containers simultaneously.
8. Volumes have their own location on the host system, typically in the Docker directory.
```
docker run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysqlvolume:/var/lib/mysql mysql 
```

### Docker-Bind-Mounts
1. Bind mounts are linked to a specific directory or file on the host system.
2. With bind mounts, you can directly reference files or directories on the host during container runtime.
3. Bind mounts do not have a separate life cycle from the host system; they are tightly coupled.
4. Changes made in the bind mount are immediately visible on the host and vice versa.
5. Bind mounts provide a way to share files or directories between the host and containers.
6. They are useful for development workflows, where code changes can be immediately reflected inside the container.
8. Multiple containers can bind to the same host directory or file, allowing easy data sharing.
7. Bind mounts can be specified using absolute paths or relative paths to the container's file system.

### Differences-Between-Bind-Mount-and-Volumes
1. Persistence: Docker volumes persist data even if the container is removed, while bind mounts are tightly coupled to the host system and do not persist data separately.
2. Lifecycle: Docker volumes have a separate lifecycle managed by Docker, whereas bind mounts are directly linked to the host system and have no separate lifecycle.
3. Portability: Docker volumes are portable and can be easily moved between different Docker hosts. Bind mounts are specific to the host system where the container is running.
4. Ease of use: Docker volumes provide a higher level of abstraction and ease of use, especially when managing data across multiple containers. Bind mounts are simpler to set up and are useful for immediate file or directory sharing.
5. Integration: Docker volumes can integrate with different storage drivers and systems, such as network storage or cloud providers. Bind mounts are limited to the host's file system.
Certainly! Here are the point-wise details and differentiation for Docker container networks:

### Container-Networks
1. Default Network: When Docker is installed, it automatically creates a default network called "bridge." This network allows containers to communicate with each other using IP addresses.
2. Container Network Drivers: Docker supports multiple container network drivers that offer different networking capabilities, such as bridge, host, overlay, macvlan, and more. Each driver provides specific features and functionalities for container networking.
3. Bridge Network: The bridge network driver is the default and most commonly used driver. It creates an isolated network on the host and assigns IP addresses to containers connected to the bridge. Containers within the same bridge network can communicate with each other using container names as DNS aliases.
4. Host Network: The host network driver allows a container to use the host's networking stack directly, sharing the same network interface. It gives the container access to all host interfaces, bypassing Docker's network isolation.
5. Overlay Network: The overlay network driver enables containers to communicate across multiple Docker hosts or nodes in a swarm. It uses VXLAN (Virtual Extensible LAN) encapsulation to create a distributed network overlay that spans multiple hosts.
6. Macvlan Network: The macvlan network driver assigns a unique MAC address to each container, allowing them to appear as individual devices on the physical network. Containers in a macvlan network can communicate with other devices on the same physical network, including other containers.
7. Network Scopes: Docker provides different network scopes for containers, such as global, swarm, and local. Global scope allows containers to communicate across multiple Docker daemons. Swarm scope restricts communication to containers within the same swarm. Local scope confines communication to containers within the same host.
8. User-defined Networks: Docker allows users to create their own custom networks with specific configurations using the "docker network create" command. Custom networks provide better control over container connectivity and allow containers to be isolated in separate networks.
9. Network Security: Docker networks can be secured using features like network segmentation, access control lists (ACLs), and firewall rules. This helps control traffic flow between containers and enhances network security.
10. Third-party Networking Solutions: Docker integrates with third-party networking solutions, such as Calico, Weave, and Flannel, which provide advanced networking features like network policies, service discovery, and load balancing.

### Relationship-between-Docker-Desktop-and-Docker-Engine
1. Docker Desktop includes Docker Engine as its core component. It installs and manages Docker Engine behind the scenes, providing a user-friendly interface to work with Docker containers.
2. Docker Desktop abstracts away some of the complexities of working directly with Docker Engine, making it easier for developers to get started with Docker.
3. Docker Desktop also includes additional tools and features specifically tailored for developers, such as the ability to configure container resources, networking, and storage options through its graphical interface.
4. Docker Desktop is essentially a pre-packaged solution that bundles Docker Engine with a user-friendly interface and additional developer-centric features.

### DNS
1. The docker containers talks to each other on the basis of DNS name(Docker container name) because the IP address from the container may be removed and can be dynamic at times(only apples to the new Virtual network)
2. So the default Bridge network does not have the same DNS functionality in it.(so you will have to add it manually by --link)

### Single-Docker-Example 
1. Spin up Nginx Server
#### Reference
- Cloud-DevOps-Large-Enterprise-Practical-Guide/Docker

### Multiple-Docker-Example 
1. Spin up Nginx Server
2. Spin up mysql server
3. Spin up httpd Server 
#### Reference
- Cloud-DevOps-Large-Enterprise-Practical-Guide/Docker

### Docker-Commands
1. docker ->returns all the docker commands that can be used and referred to.
2. docker container run --publish 80:80 --detach --name mynewcontainer --network mynetwork nginx -> spins up a container spiting out a container ID
3. docker container stop (container name)-> stops the running container on the machine
4. docker container logs mynewcontainer
5. docker container top mynewcontainer
6. docker container rm (name of the containers separated by space)
7. ps aux (returns all the process running on the mac system)
8. docker container inspect mynewcontainer
9. docker container stats
10. docker container run -it --name enakonda nginx bash
11. docker container start -ai enakonda(This command keeps the docker container running until you have been exited from the bash shell)
12. docker container exec -it enakonda bash(This command keeps the docker container running)
docker container port enakonda
13. docker container inspect --format '{{ .NetworkSettings.IPAddress}}' enakonda.
14. docker container run -d --name enakonda --network-alias search elasticsearch:2
15. docker network ls
16. docker network inspect bridge
17. docker network create myNetwork
18. docker network connect network container
19. docker network disconnect network container
20. Images are just the binaries and the Kernal is provided by the OS itself
21. docker image history
22. docker image tag oldimage new/imagename
23. docker image push
24. docker login
25. docker logout
#### Reference
- Cloud-DevOps-Large-Enterprise-Practical-Guide/Docker

### DNS-Round-Robin
1. 

### Env-Variables
```
ENV KEY VALUE
```
```
--e KEY=SomeOtherValue
```

### Arguments
```
ARG DEFAULT_PORT=80
```
```
--build-arg DEFAULT_PORT=8080
```
## Markdown
1. GitHub Markdown is a lightweight markup language used to format and style text on GitHub.
2. It is based on the original Markdown syntax but includes some additional features and extensions.
3. GitHub Markdown is commonly used in README files, documentation, and issue comments on GitHub.
4. It supports basic formatting options like headings, lists, emphasis (bold and italic), and links.
5. GitHub Markdown allows for the inclusion of images, code blocks, and tables.
6. It supports syntax highlighting for different programming languages in code blocks.
7. GitHub Markdown supports task lists, which are useful for tracking progress in issues or pull requests.
8. It allows for the creation of links to specific lines or sections within a file.
9. GitHub Markdown supports emoji shortcuts for adding emoticons to your text.
10. It also supports the use of HTML tags for advanced formatting when necessary.
#### Reference
    Documents -> https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github

## Emacs
1. Doom Emacs is a highly optimized and preconfigured Emacs distribution.
2. It aims to provide a faster and more efficient Emacs experience out of the box.
3. Doom Emacs is built on top of the Emacs text editor, extending its functionality and providing a streamlined workflow.
4. It includes a curated set of popular packages and plugins, carefully chosen for their usefulness and performance.
5. Doom Emacs utilizes a modular configuration system, allowing users to easily customize and extend their editor.
6. It supports various programming languages and provides language-specific configurations and features.
7. Doom Emacs emphasizes a modal editing style, inspired by Vim, which can enhance productivity and speed.
8. It offers a comprehensive set of keybindings and shortcuts to navigate, edit, and manage files efficiently.
9. Doom Emacs provides an integrated package manager, making it easy to install and update packages from various sources.
10. It has a strong and active community, with regular updates, documentation, and support available.
#### Reference
    Documents -> https://github.com/doomemacs/doomemacs

## Elisp
1. Elisp (Emacs Lisp) is the programming language used for extending and customizing the Emacs text editor.
2. It is a dialect of Lisp, a family of programming languages known for its powerful and expressive syntax.
3. Elisp is a dynamically typed language, meaning variables do not have fixed types and can change at runtime.
4. It provides a rich set of built-in functions and macros for manipulating text, buffers, and files.
5. Elisp supports functional programming paradigms, including higher-order functions, closures, and recursion.
6. It has excellent integration with Emacs, allowing for seamless access to editor features and extensibility.
7. Elisp provides extensive support for interactive development, with a REPL (Read-Eval-Print Loop) for evaluating expressions in real-time.
8. It supports advanced features like dynamic scoping, macros for code generation, and the ability to redefine built-in functions.
9. Elisp has a robust and active community that contributes packages, libraries, and documentation for extending Emacs.
10. Emacs Lisp is not limited to Emacs itself; it can also be used for scripting, automation, and general-purpose programming outside of the editor.
#### Reference
    Tutorials -> 
        - https://www.youtube.com/watch?v=ymSq4wHrqyU
        - https://learnxinyminutes.com/docs/elisp/
 
## Learning-Inprogress
   
### Todo
1. Docker Mastery with Kubernetes+Swarm 
   - chapter 70/99 -> All Videos before this chapter is useless
2. Docker and Kubernetes
   - Chapter 123/170  -> All Videos before this chapter is useless 
3. Revisit 
   - https://www.docker.com/products/telepresence-for-docker/ 
4. Pending Docker dockes (No need of going through the docker guide not much to learn from there)
   - https://docs.docker.com/config/daemon/start/
5. Terraform Training start.
   - https://docs.docker.com/config/daemon/start/
6. Start Algorithms and practice some of it
7. Nginx tutorials 
8. Mongod tutorials 
9. Prostgres SQL


   
## Vim-Cheat-Sheet
### Navigation
h: Move left
j: Move down
k: Move up
l: Move right
0: Move to the beginning of the line
$: Move to the end of the line
gg:Move to the beginning of the file
G: Move to the end of the file
Ctrl + f: Move forward one page
Ctrl + b: Move backward one page

### Editing
i: Enter insert mode at the cursor
I: Enter insert mode at the beginning of the line
a: Enter insert mode after the cursor
A: Enter insert mode at the end of the line
o: Insert a new line below the current line
O: Insert a new line above the current line
x: Delete the character under the cursor
dd: Delete the current line
yy: Yank (copy) the current line
p: Paste the previously yanked or deleted text
u: Undo the last change
Ctrl + r: Redo the last change

### Search-and-Replace
/pattern: Search forward for "pattern"
?pattern: Search backward for "pattern"
n: Jump to the next occurrence of the search pattern
N: Jump to the previous occurrence of the search pattern
:%s/old/new/g: Replace all occurrences of "old" with "new" in the entire file
:%s/old/new/gc: Replace all occurrences of "old" with "new" in the entire file with confirmation

### Saving-and-Quitting
:w: Save the file
:q: Quit (close) the file
:q!: Quit without saving (force quit)
:wq or :x: Save and quit

### Other-Useful-Commands
:set nu: Show line numbers
:set nonu: Hide line numbers
:set syntax=language: Enable syntax highlighting for a specific programming language
:help keyword: Open Vim's built-in help for a specific keyword

## Masters-Program 

### Finland 
### Netherlands 
### Germany 
### Canada
### USA 
### Norway
### Denmark
### Newzeland
### Australia 
## Create-Github-hosted-React-Frontend
1. Install node and npm inside devContainer by adding below propery to the devcontainer.json.
```
"features": {
		"ghcr.io/devcontainers/features/node:1": {},
		"ghcr.io/devcontainers-contrib/features/npm-package:1": {}
	}
```
2. Create Svelte app 
```
npm create svelte@latest ca-svelte-frontend --y
>Skeleton project
>Use Typescript
>Select All
cd ca-svelte-frontend
npm install
npm run dev
```
3. Deploy to `https://github.com/metonym/sveltekit-gh-pages`.
2. Add homepage property to package.json `"homepage": "https://{username}.github.io/{repo-name}"`.
3. Add a predeploy property and a deploy property to the scripts object in package.json .
```
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "build": "react-scripts build",
        "start": "react-scripts start",
```
1. run command  `npm run deploy -- -m "Deploy React app to GitHub Pages"`
```
    Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.
```
1. Navigate to the GitHub repository settings page> Code and automation> Pages
2. update Source: Deploy from a branch, Branch: gh-pages, Folder: / (root).
Reference - > `https://github.com/gitname/react-gh-pages#readme`.
Mysite - > `https://sunnyravindra.github.io/Cloud-Architect-Large-Enterprise-Practical-Guild/`

### Next-js-frontend
1.  Components. - > `ReactApp/scr/components/MyFirstComponent/MyFirstComponent`
2.  Make sure to use Uppercase letters while  importing Components
3.  JSX can have only one root element use <Fragments > or <></>instead of div.
4.  Create below folder structure.
```
├── scss
│   ├── main.scss
│   └── _variables.scss
```
reference -> `ReactApp/scr/scss`
5.  Create first react component 
```
const MyFirstComponent = () => {
    return (
        <div>
            <div>MyFirstComponent</div>
            <div>MySecondComponent</div>
        </div>
        
    );
}
export default MyFirstComponent;
```
6.  call the MyFirstComponent in App.js
```
import React, { Fragment } from 'react';
import MyFirstComponent from './components/MyFirstComponent/MyFirstComponent';
import './scss/main.scss';
const App = () => {
  return (
    <Fragment>
      <MyFirstComponent></MyFirstComponent>
      <MyFirstComponent></MyFirstComponent>
    </Fragment>
  );
}
export default App;
```
7.  Add Props
```
const MyFirstComponent = (props) => {
    return (
        <div>
            <div>{props.Component1}</div>
            <div>{props.Component2}</div>
        </div>
        
    );
}
export default MyFirstComponent;
```
8.  Call component with props in App.js
```
const App = () => {
  return (
    <Fragment>
      <MyFirstComponent Component1='firstComponent1' Component2='SecondComponent2'></MyFirstComponent>
      <MyFirstComponent Component1='firstComponent2' Component2='SecondComponent2'></MyFirstComponent>
    </Fragment>
  );
}
```
9. Add Saas component file to the component folder.
```
 MyFirstComponent
│       ├── MyFirstComponent.js
│       └── MyFirstComponent.scss
```
Reference -> 
10. Props Childeren Still To Understand.
11. UseState
```
const [component,setcomponent] = useState(props.Component1);

const changeTitle = ()=> {
    setcomponent('new componnent');
};
```
12. Use Next js instead on react 
```

```
12. Styles with Modlues and tailwindcss.
`npm install tailwindcss`
13. Debugging, break points and React devtools.
14. React Form , form submission ,clearing the inputs , two way binding, Lifting state up
15. Signle State Vs Mutiple states(53 and 54)
16. Rendering lists with Key property.
17. Turnery expressions for conditional content 
18. Portal
19. Refs -> good for reading values
20. useEffect hook

### Moving-to-Next-js 
1. Create next.js project and select default values 
`npm create-next-app `
2. 
class myFirstClass{
    constructor(){
        this.constructor = 'constructor';
    }
    myFirstArrowFunction = (message, constructor) => {
        var myfirstVar = '4';
    const myfirstConst = '5';
        console.log(message + myfirstVar + myfirstConst)
    }
    //Spread
    const myFirstArray = [1,2,3,4,5];
    const myFirstSpreadArray = [...myFirstArray];
    console.log(myFirstSpreadArray)
    //Rest
    myFirstRestFunction = (...args) => {
        console.log(args)
    }
    //Array Destructuring 
    [a,b, ,c]= myFirstArray;
    console.log(a);
    console.log(b);
    console.log(c);
    //Object Destructuring 
    {c,d} = {name='sunny',age='cloud'}
    console.log(c);
    console.log(d);
    //objects are coped as reference -> practical pending
    //Map ->practical pending
}


## Docker-Compose

### Compose-Important-Points
1. Definition of Multi-Container Applications: Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to describe the services, networks, and volumes needed for your application in a declarative YAML file.

2. Compose File: Docker Compose uses a YAML file called `docker-compose.yml` to define the configuration of your application. It includes services, networks, volumes, environment variables, and other options necessary to run your application.

3. Service: A service is a containerized component of your application. Each service is defined within the `services` section of the Compose file and can be built from a Dockerfile or use a pre-built image from a registry.

4. Networking: Docker Compose automatically creates a default network for your application, allowing services to communicate with each other using their service names as DNS names. You can also define custom networks for better isolation and control over your application's communication.

5. Volumes: Volumes in Docker Compose allow you to persist and share data between containers or between a container and the host machine. Volumes can be defined in the `volumes` section of the Compose file.

6. Environment Variables: Docker Compose allows you to set environment variables for your services using the `environment` key. This is useful for passing configuration values or connecting services together.

7. Container Orchestration: With Docker Compose, you can easily orchestrate the deployment, scaling, and management of multiple containers that make up your application. You can start, stop, and restart services as a group using simple commands.

8. Commands: Docker Compose provides commands for managing your application, such as `up` to create and start containers, `down` to stop and remove containers, `logs` to view container logs, and more. These commands streamline the management of your multi-container application.

9. Extensibility: Docker Compose supports extensions through the use of community-contributed tools called Compose plugins. These plugins provide additional functionalities like load balancing, monitoring, and service discovery.

10. Compatibility: Docker Compose is compatible with both Docker Swarm mode and standalone Docker hosts, allowing you to deploy your applications on different Docker environments seamlessly.

#### Reference
```
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - 80:80
    volumes:
      - ./html:/usr/share/nginx/html
```

### Compose-File-Structure
```yaml
version: '3'  # Compose file version
services:
  service_name:  # Name of the service
    image: image_name:tag  # Docker image and tag
    ports:  # Port mapping
      - host_port:container_port
    volumes:  # Volume mapping
      - host_path:container_path
    environment:  # Environment variables
      - KEY=VALUE
    networks:  # Networks to connect
      - network_name
```

### Compose-Basic-Commands
- `docker-compose up`: Create and start containers based on the Compose file.
- `docker-compose down`: Stop and remove containers, networks, and volumes.
- `docker-compose start`: Start existing containers.
- `docker-compose stop`: Stop running containers.
- `docker-compose restart`: Restart containers.
- `docker-compose pause`: Pause containers.
- `docker-compose unpause`: Unpause containers.
- `docker-compose ps`: List containers managed by the Compose file.
- `docker-compose logs`: View logs of containers.
- `docker-compose exec service_name command`: Execute a command in a running container.
- `docker-compose build`: Build or rebuild services.

### Compose-Advanced-Commands
- `docker-compose up -d`: Start containers in detached mode.
- `docker-compose up --scale service_name=N`: Scale a service to N instances.
- `docker-compose down --volumes`: Remove containers, networks, and volumes (including named volumes).
- `docker-compose logs -f`: Follow the logs of containers in real-time.
- `docker-compose exec -d service_name command`: Execute a command in a running container in detached mode.
- `docker-compose config`: Validate and view the Compose file.

### Compose-Environment-Variables
- Environment variables can be defined under the `environment` key within a service.
- Variables can be set individually or loaded from an external `.env` file using `env_file` configuration.

### Compose-Volumes
- Volumes can be defined under the `volumes` key within a service.
- Volumes allow data persistence and sharing between containers or between containers and the host.
- Volumes can be specified as named volumes, host paths, or anonymous volumes.

### Compose-Networking
- By default, Compose creates a default network for the application.
- Services within the same Compose file can communicate using service names as DNS names.
- Custom networks can be defined using the `networks` key.

### Compose-Extending-Services
- Compose allows extending services by defining a new service that inherits properties from a base service.
- Inheritance is achieved by using the `extends` key within a service definition.
