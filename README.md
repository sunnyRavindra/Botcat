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
- [Markdown](#Markdown)
- [Emacs](#Emacs)
- [Elisp](#Elisp)
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
18. Share the Docker image information: Provide others with the necessary details to pull and use the shared image. This includes the registry URL, repository name, and tag. They can use the `docker pull` command to retrieve the image from the registry and `docker run` to run the containerized application locally.
#### Reference
   - Docker Registry -> https://docs.docker.com/get-started/overview/
   
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
 
MIT License

Copyright (c) 2023 Sunny Ravindra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# Cloud-Architect-Large-Enterprise-Practical-Guild

* [Introduction](#Introduction)
* [Docker](#Docker)
   * [Docker-Basics](#Docker-Basics)
   * [Docker-Architecture](#Docker-Architecture)
   * [Docker-Demon](#Docker-Demon)
   * [Docker-Client](#Docker-Client)
   * [Docker-Desktop](#Docker-Desktop)
   * [Docker-Image](#Docker-Image)
   * [Docker-Container](#Docker-Container)
   * [Build-Container-Image](#Build-Container-Image)
   * [Start-Container-Image](#Start-Container-Image)
   * [Updating-Docker-Container](#Updating-Docker-Container)
   * [Docker-Registry](#Docker-Registry)
   * [Docker-Image-Sharing](#Docker-Image-Sharing)
* [Markdown](#Markdown)
* [Emacs](#Emacs)

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
#### Reference
   - Docker Registry -> https://docs.docker.com/get-started/overview/

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

### Docker-Registry
1. Set up a Docker registry: You have the option to use Docker Hub (a public registry) or set up your own private registry. If you choose to set up a private registry, you can use tools like Docker Registry or third-party solutions.
2. Log in to the Docker registry: If you are using Docker Hub or a private registry that requires authentication, log in to the registry using the `docker login` command. Provide your registry credentials (username and password) as prompted.
3. Tag your Docker image: Before pushing the image to the registry, it's recommended to tag it with the appropriate registry URL and repository name. Use the `docker tag` command to create a new tag for the image. For example:
   ```
   docker tag myimage:latest myregistry/myrepository:latest
   ```
   Replace `myimage:latest` with the name and tag of the image you want to share. Adjust `myregistry` and `myrepository` with the appropriate registry URL and repository name.
4. Push the Docker image to the registry: Use the `docker push` command to push the tagged image to the registry. For example:
   ```
   docker push myregistry/myrepository:latest
   ```
   Docker will upload the image and its layers to the registry. This may take some time depending on the size of the image and your network connection.
5. Verify the image on the registry: You can check the Docker registry (either Docker Hub or your private registry) to ensure that the image has been successfully pushed and is available for others to pull.
6. Share the Docker image information: Provide others with the necessary details to pull and use the shared image. This includes the registry URL, repository name, and tag. They can use the `docker pull` command to retrieve the image from the registry and `docker run` to run the containerized application locally.
#### Reference
   - Docker Registry -> https://docs.docker.com/get-started/overview/

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
    
## Docker Important points
1. Every time you run an new container from an image, it generates a unique container ID (Which is very lengthy)
2. Docker first checks for the image in the local drive and then if not found it looks for it on the docker hub and pulls it down.
3. When Container is created it does not copy that image but created a layer of that image and runs the container.
4. when Container is created a default virtual network is also created for the respective container to run on.
5. when the containers are spunk up the process running inside the container as not under a vm or hiding from OS, they are indeed in the process of the system its just that they are running behind a virtual network.
6. Bind Mounting
7. Persistent Volumes

# Docker Commands
1. docker version -> Returns the information of server and the client (If we are getting both the client and server response values then we can say that the Docker is working properly)
2. docker info -> Returns more information about the system off docker like how much containers are running(Basically properties command for docker)
3. docker ->returns all the docker commands that can be used and referred to.
4. docker container run --publish 80:80 --detach --name mynewcontainer --network mynetwork nginx -> spins up a container spiting out a container ID
5. docker container ls -> list the containers that we have running right now
6. docker container ls -a
7. docker container stop (container name)-> stops the running container on the machine
8. docker container logs mynewcontainer
9. docker container top mynewcontainer
10. docker container rm (name of the containers separated by space)
11. ps aux (returns all the process running on the mac system)
12. docker container inspect mynewcontainer
13. docker container stats
14. docker container run -it --name enakonda nginx bash
15. [ ] dicker container start -ai enakonda(This command keeps the docker container running until you have been exited from the bash shell)
16. docker container exec -it enakonda bash(This command keeps the docker container running)
docker container port enakonda
17. docker container inspect --format '{{ .NetworkSettings.IPAddress}}' enakonda.
18. docker container run -d --name enakonda --network-alias search elasticsearch:2
19.
# Docker Network
1. docker network ls
2. docker network inspect bridge
3. docker network create myNetwork
4. docker network connect network container
5. docker network disconnect network container


# DNS
1. The docker containers talks to each other on the basis of DNS name(Docker container name) because the IP address from the container may be removed and can be dynamic at times(only apples to the new Virtual network)
2. So the default Bridge network does not have the same DNS functionality in it.(so you will have to add it manually by --link)

# Images
1. Images are just the binaries and the Kernal is provided by the OS itself
2. docker image history
3. docker image tag oldimage new/imagename
4. docker image push
5. docker login
6. docker logout

# Docker compose

** DevContainers
1. Install DevContainers CLI
2. Install vscode and Docker over the internet , and make sure both of them are up and running.
3. install the "Remote Development" and "Dev Containers" extension for VS Code
4. Open the folder in VScode where you want to create Dev container
*** Imp Links
- [[https://containers.dev/]]
- https://github.com/devcontainers/cli
. Create `.devcontainer/devcontainer.json` file inside the folder.
 ```
    {
        "name": "UbuntuDevContainer",
        "image": "mcr.microsoft.com/devcontainers/base:jammy"
    }
```
5. cmd/ctrl + Shift + p -> reopen in Container 
Reference - >  `Cloud-Architect-Large-Enterprise-Practical-Guild/DevContainerFiles`
Official Tutorial - > `https://code.visualstudio.com/docs/devcontainers/containers`

### Create Github hosted React Frontend
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
        "start": "react-scripts start",
        "build": "react-scripts build",
```
1. run command  `npm run deploy -- -m "Deploy React app to GitHub Pages"`
```
    Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.
```
1. Navigate to the GitHub repository settings page> Code and automation> Pages
2. update Source: Deploy from a branch, Branch: gh-pages, Folder: / (root).
Reference - > `https://github.com/gitname/react-gh-pages#readme`.
Mysite - > `https://sunnyravindra.github.io/Cloud-Architect-Large-Enterprise-Practical-Guild/`

### Next js frontend
1. 
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

### Moving to Next js 
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

#### Application Containerization  
1. Install docker.
```
Onlocal: 
    curl -fsSL https://test.docker.com -o test-docker.sh
    sudo sh test-docker.sh
    docker -v
OnDevcontainer: add below lines to devcontainer.json
    "features": {
            "ghcr.io/devcontainers/features/docker-in-docker:2": {}
        }
```
2. Rebuild. 
3. Create DockerFile named "Dockerfile" inside the project folder.
```
    From alpine:latest
    #WORKDIR /app
    #COPY . .
```
4. Create Image using `docker build -t ca-frontend:v1 .`
5. Start Docker container with the build Image `Docker Container run -it ca-frontend:v1 sh `
6. To get out of the shell `ctrl+D`
Reference - > `Cloud-Architect-Large-Enterprise-Practical-Guild/Docker/Dockerfile`
Official Tutorial - > `https://docs.docker.com/get-started/overview/`


dfjhsgfsjghkdsfufTODO - https://www.docker.com/products/telepresence-for-docker/


#!/bin/sh
set -e
# Docker CE for Linux installation script
#
# See https://docs.docker.com/engine/install/ for the installation steps.
#
# This script is meant for quick & easy install via:
#   $ curl -fsSL https://get.docker.com -o get-docker.sh
#   $ sh get-docker.sh
#
# For test builds (ie. release candidates):
#   $ curl -fsSL https://test.docker.com -o test-docker.sh
#   $ sh test-docker.sh
#
# NOTE: Make sure to verify the contents of the script
#       you downloaded matches the contents of install.sh
#       located at https://github.com/docker/docker-install
#       before executing.
#
# Git commit from https://github.com/docker/docker-install when
# the script was uploaded (Should only be modified by upload job):
SCRIPT_COMMIT_SHA="98a5ca00c407c75cfb740d6398726db551db0f38"

# strip "v" prefix if present
VERSION="${VERSION#v}"

# The channel to install from:
#   * nightly
#   * test
#   * stable
#   * edge (deprecated)
DEFAULT_CHANNEL_VALUE="test"
if [ -z "$CHANNEL" ]; then
	CHANNEL=$DEFAULT_CHANNEL_VALUE
fi

DEFAULT_DOWNLOAD_URL="https://download.docker.com"
if [ -z "$DOWNLOAD_URL" ]; then
	DOWNLOAD_URL=$DEFAULT_DOWNLOAD_URL
fi

DEFAULT_REPO_FILE="docker-ce.repo"
if [ -z "$REPO_FILE" ]; then
	REPO_FILE="$DEFAULT_REPO_FILE"
fi

mirror=''
DRY_RUN=${DRY_RUN:-}
while [ $# -gt 0 ]; do
	case "$1" in
		--mirror)
			mirror="$2"
			shift
			;;
		--dry-run)
			DRY_RUN=1
			;;
		--*)
			echo "Illegal option $1"
			;;
	esac
	shift $(( $# > 0 ? 1 : 0 ))
done

case "$mirror" in
	Aliyun)
		DOWNLOAD_URL="https://mirrors.aliyun.com/docker-ce"
		;;
	AzureChinaCloud)
		DOWNLOAD_URL="https://mirror.azure.cn/docker-ce"
		;;
esac

command_exists() {
	command -v "$@" > /dev/null 2>&1
}

# version_gte checks if the version specified in $VERSION is at least
# the given CalVer (YY.MM) version. returns 0 (success) if $VERSION is either
# unset (=latest) or newer or equal than the specified version. Returns 1 (fail)
# otherwise.
#
# examples:
#
# VERSION=20.10
# version_gte 20.10 // 0 (success)
# version_gte 19.03 // 0 (success)
# version_gte 21.10 // 1 (fail)
version_gte() {
	if [ -z "$VERSION" ]; then
			return 0
	fi
	eval calver_compare "$VERSION" "$1"
}

# calver_compare compares two CalVer (YY.MM) version strings. returns 0 (success)
# if version A is newer or equal than version B, or 1 (fail) otherwise. Patch
# releases and pre-release (-alpha/-beta) are not taken into account
#
# examples:
#
# calver_compare 20.10 19.03 // 0 (success)
# calver_compare 20.10 20.10 // 0 (success)
# calver_compare 19.03 20.10 // 1 (fail)
calver_compare() (
	set +x

	yy_a="$(echo "$1" | cut -d'.' -f1)"
	yy_b="$(echo "$2" | cut -d'.' -f1)"
	if [ "$yy_a" -lt "$yy_b" ]; then
		return 1
	fi
	if [ "$yy_a" -gt "$yy_b" ]; then
		return 0
	fi
	mm_a="$(echo "$1" | cut -d'.' -f2)"
	mm_b="$(echo "$2" | cut -d'.' -f2)"
	if [ "${mm_a#0}" -lt "${mm_b#0}" ]; then
		return 1
	fi

	return 0
)

is_dry_run() {
	if [ -z "$DRY_RUN" ]; then
		return 1
	else
		return 0
	fi
}

is_wsl() {
	case "$(uname -r)" in
	*microsoft* ) true ;; # WSL 2
	*Microsoft* ) true ;; # WSL 1
	* ) false;;
	esac
}

is_darwin() {
	case "$(uname -s)" in
	*darwin* ) true ;;
	*Darwin* ) true ;;
	* ) false;;
	esac
}

deprecation_notice() {
	distro=$1
	distro_version=$2
	echo
	printf "\033[91;1mDEPRECATION WARNING\033[0m\n"
	printf "    This Linux distribution (\033[1m%s %s\033[0m) reached end-of-life and is no longer supported by this script.\n" "$distro" "$distro_version"
	echo   "    No updates or security fixes will be released for this distribution, and users are recommended"
	echo   "    to upgrade to a currently maintained version of $distro."
	echo
	printf   "Press \033[1mCtrl+C\033[0m now to abort this script, or wait for the installation to continue."
	echo
	sleep 10
}

get_distribution() {
	lsb_dist=""
	# Every system that we officially support has /etc/os-release
	if [ -r /etc/os-release ]; then
		lsb_dist="$(. /etc/os-release && echo "$ID")"
	fi
	# Returning an empty string here should be alright since the
	# case statements don't act unless you provide an actual value
	echo "$lsb_dist"
}

echo_docker_as_nonroot() {
	if is_dry_run; then
		return
	fi
	if command_exists docker && [ -e /var/run/docker.sock ]; then
		(
			set -x
			$sh_c 'docker version'
		) || true
	fi

	# intentionally mixed spaces and tabs here -- tabs are stripped by "<<-EOF", spaces are kept in the output
	echo
	echo "================================================================================"
	echo
	if version_gte "20.10"; then
		echo "To run Docker as a non-privileged user, consider setting up the"
		echo "Docker daemon in rootless mode for your user:"
		echo
		echo "    dockerd-rootless-setuptool.sh install"
		echo
		echo "Visit https://docs.docker.com/go/rootless/ to learn about rootless mode."
		echo
	fi
	echo
	echo "To run the Docker daemon as a fully privileged service, but granting non-root"
	echo "users access, refer to https://docs.docker.com/go/daemon-access/"
	echo
	echo "WARNING: Access to the remote API on a privileged Docker daemon is equivalent"
	echo "         to root access on the host. Refer to the 'Docker daemon attack surface'"
	echo "         documentation for details: https://docs.docker.com/go/attack-surface/"
	echo
	echo "================================================================================"
	echo
}

# Check if this is a forked Linux distro
check_forked() {

	# Check for lsb_release command existence, it usually exists in forked distros
	if command_exists lsb_release; then
		# Check if the `-u` option is supported
		set +e
		lsb_release -a -u > /dev/null 2>&1
		lsb_release_exit_code=$?
		set -e

		# Check if the command has exited successfully, it means we're in a forked distro
		if [ "$lsb_release_exit_code" = "0" ]; then
			# Print info about current distro
			cat <<-EOF
			You're using '$lsb_dist' version '$dist_version'.
			EOF

			# Get the upstream release info
			lsb_dist=$(lsb_release -a -u 2>&1 | tr '[:upper:]' '[:lower:]' | grep -E 'id' | cut -d ':' -f 2 | tr -d '[:space:]')
			dist_version=$(lsb_release -a -u 2>&1 | tr '[:upper:]' '[:lower:]' | grep -E 'codename' | cut -d ':' -f 2 | tr -d '[:space:]')

			# Print info about upstream distro
			cat <<-EOF
			Upstream release is '$lsb_dist' version '$dist_version'.
			EOF
		else
			if [ -r /etc/debian_version ] && [ "$lsb_dist" != "ubuntu" ] && [ "$lsb_dist" != "raspbian" ]; then
				if [ "$lsb_dist" = "osmc" ]; then
					# OSMC runs Raspbian
					lsb_dist=raspbian
				else
					# We're Debian and don't even know it!
					lsb_dist=debian
				fi
				dist_version="$(sed 's/\/.*//' /etc/debian_version | sed 's/\..*//')"
				case "$dist_version" in
					12)
						dist_version="bookworm"
					;;
					11)
						dist_version="bullseye"
					;;
					10)
						dist_version="buster"
					;;
					9)
						dist_version="stretch"
					;;
					8)
						dist_version="jessie"
					;;
				esac
			fi
		fi
	fi
}

do_install() {
	echo "# Executing docker install script, commit: $SCRIPT_COMMIT_SHA"

	if command_exists docker; then
		cat >&2 <<-'EOF'
			Warning: the "docker" command appears to already exist on this system.

			If you already have Docker installed, this script can cause trouble, which is
			why we're displaying this warning and provide the opportunity to cancel the
			installation.

			If you installed the current Docker package using this script and are using it
			again to update Docker, you can safely ignore this message.

			You may press Ctrl+C now to abort this script.
		EOF
		( set -x; sleep 20 )
	fi

	user="$(id -un 2>/dev/null || true)"

	sh_c='sh -c'
	if [ "$user" != 'root' ]; then
		if command_exists sudo; then
			sh_c='sudo -E sh -c'
		elif command_exists su; then
			sh_c='su -c'
		else
			cat >&2 <<-'EOF'
			Error: this installer needs the ability to run commands as root.
			We are unable to find either "sudo" or "su" available to make this happen.
			EOF
			exit 1
		fi
	fi

	if is_dry_run; then
		sh_c="echo"
	fi

	# perform some very rudimentary platform detection
	lsb_dist=$( get_distribution )
	lsb_dist="$(echo "$lsb_dist" | tr '[:upper:]' '[:lower:]')"

	if is_wsl; then
		echo
		echo "WSL DETECTED: We recommend using Docker Desktop for Windows."
		echo "Please get Docker Desktop from https://www.docker.com/products/docker-desktop"
		echo
		cat >&2 <<-'EOF'

			You may press Ctrl+C now to abort this script.
		EOF
		( set -x; sleep 20 )
	fi

	case "$lsb_dist" in

		ubuntu)
			if command_exists lsb_release; then
				dist_version="$(lsb_release --codename | cut -f2)"
			fi
			if [ -z "$dist_version" ] && [ -r /etc/lsb-release ]; then
				dist_version="$(. /etc/lsb-release && echo "$DISTRIB_CODENAME")"
			fi
		;;

		debian|raspbian)
			dist_version="$(sed 's/\/.*//' /etc/debian_version | sed 's/\..*//')"
			case "$dist_version" in
				12)
					dist_version="bookworm"
				;;
				11)
					dist_version="bullseye"
				;;
				10)
					dist_version="buster"
				;;
				9)
					dist_version="stretch"
				;;
				8)
					dist_version="jessie"
				;;
			esac
		;;

		centos|rhel|sles)
			if [ -z "$dist_version" ] && [ -r /etc/os-release ]; then
				dist_version="$(. /etc/os-release && echo "$VERSION_ID")"
			fi
		;;

		*)
			if command_exists lsb_release; then
				dist_version="$(lsb_release --release | cut -f2)"
			fi
			if [ -z "$dist_version" ] && [ -r /etc/os-release ]; then
				dist_version="$(. /etc/os-release && echo "$VERSION_ID")"
			fi
		;;

	esac

	# Check if this is a forked Linux distro
	check_forked

	# Print deprecation warnings for distro versions that recently reached EOL,
	# but may still be commonly used (especially LTS versions).
	case "$lsb_dist.$dist_version" in
		debian.stretch|debian.jessie)
			deprecation_notice "$lsb_dist" "$dist_version"
			;;
		raspbian.stretch|raspbian.jessie)
			deprecation_notice "$lsb_dist" "$dist_version"
			;;
		ubuntu.xenial|ubuntu.trusty)
			deprecation_notice "$lsb_dist" "$dist_version"
			;;
		fedora.*)
			if [ "$dist_version" -lt 36 ]; then
				deprecation_notice "$lsb_dist" "$dist_version"
			fi
			;;
	esac

	# Run setup for each distro accordingly
	case "$lsb_dist" in
		ubuntu|debian|raspbian)
			pre_reqs="apt-transport-https ca-certificates curl"
			if ! command -v gpg > /dev/null; then
				pre_reqs="$pre_reqs gnupg"
			fi
			apt_repo="deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] $DOWNLOAD_URL/linux/$lsb_dist $dist_version $CHANNEL"
			(
				if ! is_dry_run; then
					set -x
				fi
				$sh_c 'apt-get update -qq >/dev/null'
				$sh_c "DEBIAN_FRONTEND=noninteractive apt-get install -y -qq $pre_reqs >/dev/null"
				$sh_c 'mkdir -p /etc/apt/keyrings && chmod -R 0755 /etc/apt/keyrings'
				$sh_c "curl -fsSL \"$DOWNLOAD_URL/linux/$lsb_dist/gpg\" | gpg --dearmor --yes -o /etc/apt/keyrings/docker.gpg"
				$sh_c "chmod a+r /etc/apt/keyrings/docker.gpg"
				$sh_c "echo \"$apt_repo\" > /etc/apt/sources.list.d/docker.list"
				$sh_c 'apt-get update -qq >/dev/null'
			)
			pkg_version=""
			if [ -n "$VERSION" ]; then
				if is_dry_run; then
					echo "# WARNING: VERSION pinning is not supported in DRY_RUN"
				else
					# Will work for incomplete versions IE (17.12), but may not actually grab the "latest" if in the test channel
					pkg_pattern="$(echo "$VERSION" | sed "s/-ce-/~ce~.*/g" | sed "s/-/.*/g")"
					search_command="apt-cache madison 'docker-ce' | grep '$pkg_pattern' | head -1 | awk '{\$1=\$1};1' | cut -d' ' -f 3"
					pkg_version="$($sh_c "$search_command")"
					echo "INFO: Searching repository for VERSION '$VERSION'"
					echo "INFO: $search_command"
					if [ -z "$pkg_version" ]; then
						echo
						echo "ERROR: '$VERSION' not found amongst apt-cache madison results"
						echo
						exit 1
					fi
					if version_gte "18.09"; then
							search_command="apt-cache madison 'docker-ce-cli' | grep '$pkg_pattern' | head -1 | awk '{\$1=\$1};1' | cut -d' ' -f 3"
							echo "INFO: $search_command"
							cli_pkg_version="=$($sh_c "$search_command")"
					fi
					pkg_version="=$pkg_version"
				fi
			fi
			(
				pkgs="docker-ce${pkg_version%=}"
				if version_gte "18.09"; then
						# older versions didn't ship the cli and containerd as separate packages
						pkgs="$pkgs docker-ce-cli${cli_pkg_version%=} containerd.io"
				fi
				if version_gte "20.10"; then
						pkgs="$pkgs docker-compose-plugin docker-ce-rootless-extras$pkg_version"
				fi
				if version_gte "23.0"; then
						pkgs="$pkgs docker-buildx-plugin"
				fi
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "DEBIAN_FRONTEND=noninteractive apt-get install -y -qq $pkgs >/dev/null"
			)
			echo_docker_as_nonroot
			exit 0
			;;
		centos|fedora|rhel)
			if [ "$(uname -m)" != "s390x" ] && [ "$lsb_dist" = "rhel" ]; then
				echo "Packages for RHEL are currently only available for s390x."
				exit 1
			fi
			if [ "$lsb_dist" = "fedora" ]; then
				pkg_manager="dnf"
				config_manager="dnf config-manager"
				enable_channel_flag="--set-enabled"
				disable_channel_flag="--set-disabled"
				pre_reqs="dnf-plugins-core"
				pkg_suffix="fc$dist_version"
			else
				pkg_manager="yum"
				config_manager="yum-config-manager"
				enable_channel_flag="--enable"
				disable_channel_flag="--disable"
				pre_reqs="yum-utils"
				pkg_suffix="el"
			fi
			repo_file_url="$DOWNLOAD_URL/linux/$lsb_dist/$REPO_FILE"
			(
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "$pkg_manager install -y -q $pre_reqs"
				$sh_c "$config_manager --add-repo $repo_file_url"

				if [ "$CHANNEL" != "stable" ]; then
					$sh_c "$config_manager $disable_channel_flag docker-ce-*"
					$sh_c "$config_manager $enable_channel_flag docker-ce-$CHANNEL"
				fi
				$sh_c "$pkg_manager makecache"
			)
			pkg_version=""
			if [ -n "$VERSION" ]; then
				if is_dry_run; then
					echo "# WARNING: VERSION pinning is not supported in DRY_RUN"
				else
					pkg_pattern="$(echo "$VERSION" | sed "s/-ce-/\\\\.ce.*/g" | sed "s/-/.*/g").*$pkg_suffix"
					search_command="$pkg_manager list --showduplicates 'docker-ce' | grep '$pkg_pattern' | tail -1 | awk '{print \$2}'"
					pkg_version="$($sh_c "$search_command")"
					echo "INFO: Searching repository for VERSION '$VERSION'"
					echo "INFO: $search_command"
					if [ -z "$pkg_version" ]; then
						echo
						echo "ERROR: '$VERSION' not found amongst $pkg_manager list results"
						echo
						exit 1
					fi
					if version_gte "18.09"; then
						# older versions don't support a cli package
						search_command="$pkg_manager list --showduplicates 'docker-ce-cli' | grep '$pkg_pattern' | tail -1 | awk '{print \$2}'"
						cli_pkg_version="$($sh_c "$search_command" | cut -d':' -f 2)"
					fi
					# Cut out the epoch and prefix with a '-'
					pkg_version="-$(echo "$pkg_version" | cut -d':' -f 2)"
				fi
			fi
			(
				pkgs="docker-ce$pkg_version"
				if version_gte "18.09"; then
					# older versions didn't ship the cli and containerd as separate packages
					if [ -n "$cli_pkg_version" ]; then
						pkgs="$pkgs docker-ce-cli-$cli_pkg_version containerd.io"
					else
						pkgs="$pkgs docker-ce-cli containerd.io"
					fi
				fi
				if version_gte "20.10"; then
					pkgs="$pkgs docker-compose-plugin docker-ce-rootless-extras$pkg_version"
				fi
				if version_gte "23.0"; then
						pkgs="$pkgs docker-buildx-plugin"
				fi
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "$pkg_manager install -y -q $pkgs"
			)
			echo_docker_as_nonroot
			exit 0
			;;
		sles)
			if [ "$(uname -m)" != "s390x" ]; then
				echo "Packages for SLES are currently only available for s390x"
				exit 1
			fi
			if [ "$dist_version" = "15.3" ]; then
				sles_version="SLE_15_SP3"
			else
				sles_minor_version="${dist_version##*.}"
				sles_version="15.$sles_minor_version"
			fi
			opensuse_repo="https://download.opensuse.org/repositories/security:SELinux/$sles_version/security:SELinux.repo"
			repo_file_url="$DOWNLOAD_URL/linux/$lsb_dist/$REPO_FILE"
			pre_reqs="ca-certificates curl libseccomp2 awk"
			(
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "zypper install -y $pre_reqs"
				$sh_c "zypper addrepo $repo_file_url"
				if ! is_dry_run; then
						cat >&2 <<-'EOF'
						WARNING!!
						openSUSE repository (https://download.opensuse.org/repositories/security:SELinux) will be enabled now.
						Do you wish to continue?
						You may press Ctrl+C now to abort this script.
						EOF
						( set -x; sleep 30 )
				fi
				$sh_c "zypper addrepo $opensuse_repo"
				$sh_c "zypper --gpg-auto-import-keys refresh"
				$sh_c "zypper lr -d"
			)
			pkg_version=""
			if [ -n "$VERSION" ]; then
				if is_dry_run; then
					echo "# WARNING: VERSION pinning is not supported in DRY_RUN"
				else
					pkg_pattern="$(echo "$VERSION" | sed "s/-ce-/\\\\.ce.*/g" | sed "s/-/.*/g")"
					search_command="zypper search -s --match-exact 'docker-ce' | grep '$pkg_pattern' | tail -1 | awk '{print \$6}'"
					pkg_version="$($sh_c "$search_command")"
					echo "INFO: Searching repository for VERSION '$VERSION'"
					echo "INFO: $search_command"
					if [ -z "$pkg_version" ]; then
						echo
						echo "ERROR: '$VERSION' not found amongst zypper list results"
						echo
						exit 1
					fi
					search_command="zypper search -s --match-exact 'docker-ce-cli' | grep '$pkg_pattern' | tail -1 | awk '{print \$6}'"
					# It's okay for cli_pkg_version to be blank, since older versions don't support a cli package
					cli_pkg_version="$($sh_c "$search_command")"
					pkg_version="-$pkg_version"
				fi
			fi
			(
				pkgs="docker-ce$pkg_version"
				if version_gte "18.09"; then
					if [ -n "$cli_pkg_version" ]; then
						# older versions didn't ship the cli and containerd as separate packages
						pkgs="$pkgs docker-ce-cli-$cli_pkg_version containerd.io"
					else
						pkgs="$pkgs docker-ce-cli containerd.io"
					fi
				fi
				if version_gte "20.10"; then
					pkgs="$pkgs docker-compose-plugin docker-ce-rootless-extras$pkg_version"
				fi
				if version_gte "23.0"; then
						pkgs="$pkgs docker-buildx-plugin"
				fi
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "zypper -q install -y $pkgs"
			)
			echo_docker_as_nonroot
			exit 0
			;;
		*)
			if [ -z "$lsb_dist" ]; then
				if is_darwin; then
					echo
					echo "ERROR: Unsupported operating system 'macOS'"
					echo "Please get Docker Desktop from https://www.docker.com/products/docker-desktop"
					echo
					exit 1
				fi
			fi
			echo
			echo "ERROR: Unsupported distribution '$lsb_dist'"
			echo
			exit 1
			;;
	esac
	exit 1
}

# wrapped up in a function so that we have some protection against only getting
# half the file during "curl | sh"
do_install
MIT License

Copyright (c) 2023 Sunny Ravindra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# Cloud-Architect-Large-Enterprise-Practical-Guild

* [Introduction](#Introduction)
* [Docker](#Docker)
   * [Docker-Basics](#Docker-Basics)
   * [Docker-Architecture](#Docker-Architecture)
   * [Docker-Demon](#Docker-Demon)
   * [Docker-Client](#Docker-Client)
   * [Docker-Desktop](#Docker-Desktop)
   * [Docker-Image](#Docker-Image)
   * [Docker-Container](#Docker-Container)
   * [Build-Container-Image](#Build-Container-Image)
   * [Start-Container-Image](#Start-Container-Image)
   * [Updating-Docker-Container](#Updating-Docker-Container)
   * [Docker-Registry](#Docker-Registry)
   * [Docker-Image-Sharing](#Docker-Image-Sharing)
* [Markdown](#Markdown)
* [Emacs](#Emacs)

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
#### Reference
   - Docker Registry -> https://docs.docker.com/get-started/overview/

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

### Docker-Registry
1. Set up a Docker registry: You have the option to use Docker Hub (a public registry) or set up your own private registry. If you choose to set up a private registry, you can use tools like Docker Registry or third-party solutions.
2. Log in to the Docker registry: If you are using Docker Hub or a private registry that requires authentication, log in to the registry using the `docker login` command. Provide your registry credentials (username and password) as prompted.
3. Tag your Docker image: Before pushing the image to the registry, it's recommended to tag it with the appropriate registry URL and repository name. Use the `docker tag` command to create a new tag for the image. For example:
   ```
   docker tag myimage:latest myregistry/myrepository:latest
   ```
   Replace `myimage:latest` with the name and tag of the image you want to share. Adjust `myregistry` and `myrepository` with the appropriate registry URL and repository name.
4. Push the Docker image to the registry: Use the `docker push` command to push the tagged image to the registry. For example:
   ```
   docker push myregistry/myrepository:latest
   ```
   Docker will upload the image and its layers to the registry. This may take some time depending on the size of the image and your network connection.
5. Verify the image on the registry: You can check the Docker registry (either Docker Hub or your private registry) to ensure that the image has been successfully pushed and is available for others to pull.
6. Share the Docker image information: Provide others with the necessary details to pull and use the shared image. This includes the registry URL, repository name, and tag. They can use the `docker pull` command to retrieve the image from the registry and `docker run` to run the containerized application locally.
#### Reference
   - Docker Registry -> https://docs.docker.com/get-started/overview/

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
    
## Docker Important points
1. Every time you run an new container from an image, it generates a unique container ID (Which is very lengthy)
2. Docker first checks for the image in the local drive and then if not found it looks for it on the docker hub and pulls it down.
3. When Container is created it does not copy that image but created a layer of that image and runs the container.
4. when Container is created a default virtual network is also created for the respective container to run on.
5. when the containers are spunk up the process running inside the container as not under a vm or hiding from OS, they are indeed in the process of the system its just that they are running behind a virtual network.
6. Bind Mounting
7. Persistent Volumes

# Docker Commands
1. docker version -> Returns the information of server and the client (If we are getting both the client and server response values then we can say that the Docker is working properly)
2. docker info -> Returns more information about the system off docker like how much containers are running(Basically properties command for docker)
3. docker ->returns all the docker commands that can be used and referred to.
4. docker container run --publish 80:80 --detach --name mynewcontainer --network mynetwork nginx -> spins up a container spiting out a container ID
5. docker container ls -> list the containers that we have running right now
6. docker container ls -a
7. docker container stop (container name)-> stops the running container on the machine
8. docker container logs mynewcontainer
9. docker container top mynewcontainer
10. docker container rm (name of the containers separated by space)
11. ps aux (returns all the process running on the mac system)
12. docker container inspect mynewcontainer
13. docker container stats
14. docker container run -it --name enakonda nginx bash
15. [ ] dicker container start -ai enakonda(This command keeps the docker container running until you have been exited from the bash shell)
16. docker container exec -it enakonda bash(This command keeps the docker container running)
docker container port enakonda
17. docker container inspect --format '{{ .NetworkSettings.IPAddress}}' enakonda.
18. docker container run -d --name enakonda --network-alias search elasticsearch:2
19.
# Docker Network
1. docker network ls
2. docker network inspect bridge
3. docker network create myNetwork
4. docker network connect network container
5. docker network disconnect network container


# DNS
1. The docker containers talks to each other on the basis of DNS name(Docker container name) because the IP address from the container may be removed and can be dynamic at times(only apples to the new Virtual network)
2. So the default Bridge network does not have the same DNS functionality in it.(so you will have to add it manually by --link)

# Images
1. Images are just the binaries and the Kernal is provided by the OS itself
2. docker image history
3. docker image tag oldimage new/imagename
4. docker image push
5. docker login
6. docker logout

# Docker compose

** DevContainers
1. Install DevContainers CLI
2. Install vscode and Docker over the internet , and make sure both of them are up and running.
3. install the "Remote Development" and "Dev Containers" extension for VS Code
4. Open the folder in VScode where you want to create Dev container
*** Imp Links
- [[https://containers.dev/]]
- https://github.com/devcontainers/cli
. Create `.devcontainer/devcontainer.json` file inside the folder.
 ```
    {
        "name": "UbuntuDevContainer",
        "image": "mcr.microsoft.com/devcontainers/base:jammy"
    }
```
5. cmd/ctrl + Shift + p -> reopen in Container 
Reference - >  `Cloud-Architect-Large-Enterprise-Practical-Guild/DevContainerFiles`
Official Tutorial - > `https://code.visualstudio.com/docs/devcontainers/containers`

### Create Github hosted React Frontend
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
        "start": "react-scripts start",
        "build": "react-scripts build",
```
1. run command  `npm run deploy -- -m "Deploy React app to GitHub Pages"`
```
    Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.
```
1. Navigate to the GitHub repository settings page> Code and automation> Pages
2. update Source: Deploy from a branch, Branch: gh-pages, Folder: / (root).
Reference - > `https://github.com/gitname/react-gh-pages#readme`.
Mysite - > `https://sunnyravindra.github.io/Cloud-Architect-Large-Enterprise-Practical-Guild/`

### Next js frontend
1. 
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

### Moving to Next js 
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

#### Application Containerization  
1. Install docker.
```
Onlocal: 
    curl -fsSL https://test.docker.com -o test-docker.sh
    sudo sh test-docker.sh
    docker -v
OnDevcontainer: add below lines to devcontainer.json
    "features": {
            "ghcr.io/devcontainers/features/docker-in-docker:2": {}
        }
```
2. Rebuild. 
3. Create DockerFile named "Dockerfile" inside the project folder.
```
    From alpine:latest
    #WORKDIR /app
    #COPY . .
```
4. Create Image using `docker build -t ca-frontend:v1 .`
5. Start Docker container with the build Image `Docker Container run -it ca-frontend:v1 sh `
6. To get out of the shell `ctrl+D`
Reference - > `Cloud-Architect-Large-Enterprise-Practical-Guild/Docker/Dockerfile`
Official Tutorial - > `https://docs.docker.com/get-started/overview/`


dfjhsgfsjghkdsfufTODO - https://www.docker.com/products/telepresence-for-docker/


#!/bin/sh
set -e
# Docker CE for Linux installation script
#
# See https://docs.docker.com/engine/install/ for the installation steps.
#
# This script is meant for quick & easy install via:
#   $ curl -fsSL https://get.docker.com -o get-docker.sh
#   $ sh get-docker.sh
#
# For test builds (ie. release candidates):
#   $ curl -fsSL https://test.docker.com -o test-docker.sh
#   $ sh test-docker.sh
#
# NOTE: Make sure to verify the contents of the script
#       you downloaded matches the contents of install.sh
#       located at https://github.com/docker/docker-install
#       before executing.
#
# Git commit from https://github.com/docker/docker-install when
# the script was uploaded (Should only be modified by upload job):
SCRIPT_COMMIT_SHA="98a5ca00c407c75cfb740d6398726db551db0f38"

# strip "v" prefix if present
VERSION="${VERSION#v}"

# The channel to install from:
#   * nightly
#   * test
#   * stable
#   * edge (deprecated)
DEFAULT_CHANNEL_VALUE="test"
if [ -z "$CHANNEL" ]; then
	CHANNEL=$DEFAULT_CHANNEL_VALUE
fi

DEFAULT_DOWNLOAD_URL="https://download.docker.com"
if [ -z "$DOWNLOAD_URL" ]; then
	DOWNLOAD_URL=$DEFAULT_DOWNLOAD_URL
fi

DEFAULT_REPO_FILE="docker-ce.repo"
if [ -z "$REPO_FILE" ]; then
	REPO_FILE="$DEFAULT_REPO_FILE"
fi

mirror=''
DRY_RUN=${DRY_RUN:-}
while [ $# -gt 0 ]; do
	case "$1" in
		--mirror)
			mirror="$2"
			shift
			;;
		--dry-run)
			DRY_RUN=1
			;;
		--*)
			echo "Illegal option $1"
			;;
	esac
	shift $(( $# > 0 ? 1 : 0 ))
done

case "$mirror" in
	Aliyun)
		DOWNLOAD_URL="https://mirrors.aliyun.com/docker-ce"
		;;
	AzureChinaCloud)
		DOWNLOAD_URL="https://mirror.azure.cn/docker-ce"
		;;
esac

command_exists() {
	command -v "$@" > /dev/null 2>&1
}

# version_gte checks if the version specified in $VERSION is at least
# the given CalVer (YY.MM) version. returns 0 (success) if $VERSION is either
# unset (=latest) or newer or equal than the specified version. Returns 1 (fail)
# otherwise.
#
# examples:
#
# VERSION=20.10
# version_gte 20.10 // 0 (success)
# version_gte 19.03 // 0 (success)
# version_gte 21.10 // 1 (fail)
version_gte() {
	if [ -z "$VERSION" ]; then
			return 0
	fi
	eval calver_compare "$VERSION" "$1"
}

# calver_compare compares two CalVer (YY.MM) version strings. returns 0 (success)
# if version A is newer or equal than version B, or 1 (fail) otherwise. Patch
# releases and pre-release (-alpha/-beta) are not taken into account
#
# examples:
#
# calver_compare 20.10 19.03 // 0 (success)
# calver_compare 20.10 20.10 // 0 (success)
# calver_compare 19.03 20.10 // 1 (fail)
calver_compare() (
	set +x

	yy_a="$(echo "$1" | cut -d'.' -f1)"
	yy_b="$(echo "$2" | cut -d'.' -f1)"
	if [ "$yy_a" -lt "$yy_b" ]; then
		return 1
	fi
	if [ "$yy_a" -gt "$yy_b" ]; then
		return 0
	fi
	mm_a="$(echo "$1" | cut -d'.' -f2)"
	mm_b="$(echo "$2" | cut -d'.' -f2)"
	if [ "${mm_a#0}" -lt "${mm_b#0}" ]; then
		return 1
	fi

	return 0
)

is_dry_run() {
	if [ -z "$DRY_RUN" ]; then
		return 1
	else
		return 0
	fi
}

is_wsl() {
	case "$(uname -r)" in
	*microsoft* ) true ;; # WSL 2
	*Microsoft* ) true ;; # WSL 1
	* ) false;;
	esac
}

is_darwin() {
	case "$(uname -s)" in
	*darwin* ) true ;;
	*Darwin* ) true ;;
	* ) false;;
	esac
}

deprecation_notice() {
	distro=$1
	distro_version=$2
	echo
	printf "\033[91;1mDEPRECATION WARNING\033[0m\n"
	printf "    This Linux distribution (\033[1m%s %s\033[0m) reached end-of-life and is no longer supported by this script.\n" "$distro" "$distro_version"
	echo   "    No updates or security fixes will be released for this distribution, and users are recommended"
	echo   "    to upgrade to a currently maintained version of $distro."
	echo
	printf   "Press \033[1mCtrl+C\033[0m now to abort this script, or wait for the installation to continue."
	echo
	sleep 10
}

get_distribution() {
	lsb_dist=""
	# Every system that we officially support has /etc/os-release
	if [ -r /etc/os-release ]; then
		lsb_dist="$(. /etc/os-release && echo "$ID")"
	fi
	# Returning an empty string here should be alright since the
	# case statements don't act unless you provide an actual value
	echo "$lsb_dist"
}

echo_docker_as_nonroot() {
	if is_dry_run; then
		return
	fi
	if command_exists docker && [ -e /var/run/docker.sock ]; then
		(
			set -x
			$sh_c 'docker version'
		) || true
	fi

	# intentionally mixed spaces and tabs here -- tabs are stripped by "<<-EOF", spaces are kept in the output
	echo
	echo "================================================================================"
	echo
	if version_gte "20.10"; then
		echo "To run Docker as a non-privileged user, consider setting up the"
		echo "Docker daemon in rootless mode for your user:"
		echo
		echo "    dockerd-rootless-setuptool.sh install"
		echo
		echo "Visit https://docs.docker.com/go/rootless/ to learn about rootless mode."
		echo
	fi
	echo
	echo "To run the Docker daemon as a fully privileged service, but granting non-root"
	echo "users access, refer to https://docs.docker.com/go/daemon-access/"
	echo
	echo "WARNING: Access to the remote API on a privileged Docker daemon is equivalent"
	echo "         to root access on the host. Refer to the 'Docker daemon attack surface'"
	echo "         documentation for details: https://docs.docker.com/go/attack-surface/"
	echo
	echo "================================================================================"
	echo
}

# Check if this is a forked Linux distro
check_forked() {

	# Check for lsb_release command existence, it usually exists in forked distros
	if command_exists lsb_release; then
		# Check if the `-u` option is supported
		set +e
		lsb_release -a -u > /dev/null 2>&1
		lsb_release_exit_code=$?
		set -e

		# Check if the command has exited successfully, it means we're in a forked distro
		if [ "$lsb_release_exit_code" = "0" ]; then
			# Print info about current distro
			cat <<-EOF
			You're using '$lsb_dist' version '$dist_version'.
			EOF

			# Get the upstream release info
			lsb_dist=$(lsb_release -a -u 2>&1 | tr '[:upper:]' '[:lower:]' | grep -E 'id' | cut -d ':' -f 2 | tr -d '[:space:]')
			dist_version=$(lsb_release -a -u 2>&1 | tr '[:upper:]' '[:lower:]' | grep -E 'codename' | cut -d ':' -f 2 | tr -d '[:space:]')

			# Print info about upstream distro
			cat <<-EOF
			Upstream release is '$lsb_dist' version '$dist_version'.
			EOF
		else
			if [ -r /etc/debian_version ] && [ "$lsb_dist" != "ubuntu" ] && [ "$lsb_dist" != "raspbian" ]; then
				if [ "$lsb_dist" = "osmc" ]; then
					# OSMC runs Raspbian
					lsb_dist=raspbian
				else
					# We're Debian and don't even know it!
					lsb_dist=debian
				fi
				dist_version="$(sed 's/\/.*//' /etc/debian_version | sed 's/\..*//')"
				case "$dist_version" in
					12)
						dist_version="bookworm"
					;;
					11)
						dist_version="bullseye"
					;;
					10)
						dist_version="buster"
					;;
					9)
						dist_version="stretch"
					;;
					8)
						dist_version="jessie"
					;;
				esac
			fi
		fi
	fi
}

do_install() {
	echo "# Executing docker install script, commit: $SCRIPT_COMMIT_SHA"

	if command_exists docker; then
		cat >&2 <<-'EOF'
			Warning: the "docker" command appears to already exist on this system.

			If you already have Docker installed, this script can cause trouble, which is
			why we're displaying this warning and provide the opportunity to cancel the
			installation.

			If you installed the current Docker package using this script and are using it
			again to update Docker, you can safely ignore this message.

			You may press Ctrl+C now to abort this script.
		EOF
		( set -x; sleep 20 )
	fi

	user="$(id -un 2>/dev/null || true)"

	sh_c='sh -c'
	if [ "$user" != 'root' ]; then
		if command_exists sudo; then
			sh_c='sudo -E sh -c'
		elif command_exists su; then
			sh_c='su -c'
		else
			cat >&2 <<-'EOF'
			Error: this installer needs the ability to run commands as root.
			We are unable to find either "sudo" or "su" available to make this happen.
			EOF
			exit 1
		fi
	fi

	if is_dry_run; then
		sh_c="echo"
	fi

	# perform some very rudimentary platform detection
	lsb_dist=$( get_distribution )
	lsb_dist="$(echo "$lsb_dist" | tr '[:upper:]' '[:lower:]')"

	if is_wsl; then
		echo
		echo "WSL DETECTED: We recommend using Docker Desktop for Windows."
		echo "Please get Docker Desktop from https://www.docker.com/products/docker-desktop"
		echo
		cat >&2 <<-'EOF'

			You may press Ctrl+C now to abort this script.
		EOF
		( set -x; sleep 20 )
	fi

	case "$lsb_dist" in

		ubuntu)
			if command_exists lsb_release; then
				dist_version="$(lsb_release --codename | cut -f2)"
			fi
			if [ -z "$dist_version" ] && [ -r /etc/lsb-release ]; then
				dist_version="$(. /etc/lsb-release && echo "$DISTRIB_CODENAME")"
			fi
		;;

		debian|raspbian)
			dist_version="$(sed 's/\/.*//' /etc/debian_version | sed 's/\..*//')"
			case "$dist_version" in
				12)
					dist_version="bookworm"
				;;
				11)
					dist_version="bullseye"
				;;
				10)
					dist_version="buster"
				;;
				9)
					dist_version="stretch"
				;;
				8)
					dist_version="jessie"
				;;
			esac
		;;

		centos|rhel|sles)
			if [ -z "$dist_version" ] && [ -r /etc/os-release ]; then
				dist_version="$(. /etc/os-release && echo "$VERSION_ID")"
			fi
		;;

		*)
			if command_exists lsb_release; then
				dist_version="$(lsb_release --release | cut -f2)"
			fi
			if [ -z "$dist_version" ] && [ -r /etc/os-release ]; then
				dist_version="$(. /etc/os-release && echo "$VERSION_ID")"
			fi
		;;

	esac

	# Check if this is a forked Linux distro
	check_forked

	# Print deprecation warnings for distro versions that recently reached EOL,
	# but may still be commonly used (especially LTS versions).
	case "$lsb_dist.$dist_version" in
		debian.stretch|debian.jessie)
			deprecation_notice "$lsb_dist" "$dist_version"
			;;
		raspbian.stretch|raspbian.jessie)
			deprecation_notice "$lsb_dist" "$dist_version"
			;;
		ubuntu.xenial|ubuntu.trusty)
			deprecation_notice "$lsb_dist" "$dist_version"
			;;
		fedora.*)
			if [ "$dist_version" -lt 36 ]; then
				deprecation_notice "$lsb_dist" "$dist_version"
			fi
			;;
	esac

	# Run setup for each distro accordingly
	case "$lsb_dist" in
		ubuntu|debian|raspbian)
			pre_reqs="apt-transport-https ca-certificates curl"
			if ! command -v gpg > /dev/null; then
				pre_reqs="$pre_reqs gnupg"
			fi
			apt_repo="deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] $DOWNLOAD_URL/linux/$lsb_dist $dist_version $CHANNEL"
			(
				if ! is_dry_run; then
					set -x
				fi
				$sh_c 'apt-get update -qq >/dev/null'
				$sh_c "DEBIAN_FRONTEND=noninteractive apt-get install -y -qq $pre_reqs >/dev/null"
				$sh_c 'mkdir -p /etc/apt/keyrings && chmod -R 0755 /etc/apt/keyrings'
				$sh_c "curl -fsSL \"$DOWNLOAD_URL/linux/$lsb_dist/gpg\" | gpg --dearmor --yes -o /etc/apt/keyrings/docker.gpg"
				$sh_c "chmod a+r /etc/apt/keyrings/docker.gpg"
				$sh_c "echo \"$apt_repo\" > /etc/apt/sources.list.d/docker.list"
				$sh_c 'apt-get update -qq >/dev/null'
			)
			pkg_version=""
			if [ -n "$VERSION" ]; then
				if is_dry_run; then
					echo "# WARNING: VERSION pinning is not supported in DRY_RUN"
				else
					# Will work for incomplete versions IE (17.12), but may not actually grab the "latest" if in the test channel
					pkg_pattern="$(echo "$VERSION" | sed "s/-ce-/~ce~.*/g" | sed "s/-/.*/g")"
					search_command="apt-cache madison 'docker-ce' | grep '$pkg_pattern' | head -1 | awk '{\$1=\$1};1' | cut -d' ' -f 3"
					pkg_version="$($sh_c "$search_command")"
					echo "INFO: Searching repository for VERSION '$VERSION'"
					echo "INFO: $search_command"
					if [ -z "$pkg_version" ]; then
						echo
						echo "ERROR: '$VERSION' not found amongst apt-cache madison results"
						echo
						exit 1
					fi
					if version_gte "18.09"; then
							search_command="apt-cache madison 'docker-ce-cli' | grep '$pkg_pattern' | head -1 | awk '{\$1=\$1};1' | cut -d' ' -f 3"
							echo "INFO: $search_command"
							cli_pkg_version="=$($sh_c "$search_command")"
					fi
					pkg_version="=$pkg_version"
				fi
			fi
			(
				pkgs="docker-ce${pkg_version%=}"
				if version_gte "18.09"; then
						# older versions didn't ship the cli and containerd as separate packages
						pkgs="$pkgs docker-ce-cli${cli_pkg_version%=} containerd.io"
				fi
				if version_gte "20.10"; then
						pkgs="$pkgs docker-compose-plugin docker-ce-rootless-extras$pkg_version"
				fi
				if version_gte "23.0"; then
						pkgs="$pkgs docker-buildx-plugin"
				fi
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "DEBIAN_FRONTEND=noninteractive apt-get install -y -qq $pkgs >/dev/null"
			)
			echo_docker_as_nonroot
			exit 0
			;;
		centos|fedora|rhel)
			if [ "$(uname -m)" != "s390x" ] && [ "$lsb_dist" = "rhel" ]; then
				echo "Packages for RHEL are currently only available for s390x."
				exit 1
			fi
			if [ "$lsb_dist" = "fedora" ]; then
				pkg_manager="dnf"
				config_manager="dnf config-manager"
				enable_channel_flag="--set-enabled"
				disable_channel_flag="--set-disabled"
				pre_reqs="dnf-plugins-core"
				pkg_suffix="fc$dist_version"
			else
				pkg_manager="yum"
				config_manager="yum-config-manager"
				enable_channel_flag="--enable"
				disable_channel_flag="--disable"
				pre_reqs="yum-utils"
				pkg_suffix="el"
			fi
			repo_file_url="$DOWNLOAD_URL/linux/$lsb_dist/$REPO_FILE"
			(
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "$pkg_manager install -y -q $pre_reqs"
				$sh_c "$config_manager --add-repo $repo_file_url"

				if [ "$CHANNEL" != "stable" ]; then
					$sh_c "$config_manager $disable_channel_flag docker-ce-*"
					$sh_c "$config_manager $enable_channel_flag docker-ce-$CHANNEL"
				fi
				$sh_c "$pkg_manager makecache"
			)
			pkg_version=""
			if [ -n "$VERSION" ]; then
				if is_dry_run; then
					echo "# WARNING: VERSION pinning is not supported in DRY_RUN"
				else
					pkg_pattern="$(echo "$VERSION" | sed "s/-ce-/\\\\.ce.*/g" | sed "s/-/.*/g").*$pkg_suffix"
					search_command="$pkg_manager list --showduplicates 'docker-ce' | grep '$pkg_pattern' | tail -1 | awk '{print \$2}'"
					pkg_version="$($sh_c "$search_command")"
					echo "INFO: Searching repository for VERSION '$VERSION'"
					echo "INFO: $search_command"
					if [ -z "$pkg_version" ]; then
						echo
						echo "ERROR: '$VERSION' not found amongst $pkg_manager list results"
						echo
						exit 1
					fi
					if version_gte "18.09"; then
						# older versions don't support a cli package
						search_command="$pkg_manager list --showduplicates 'docker-ce-cli' | grep '$pkg_pattern' | tail -1 | awk '{print \$2}'"
						cli_pkg_version="$($sh_c "$search_command" | cut -d':' -f 2)"
					fi
					# Cut out the epoch and prefix with a '-'
					pkg_version="-$(echo "$pkg_version" | cut -d':' -f 2)"
				fi
			fi
			(
				pkgs="docker-ce$pkg_version"
				if version_gte "18.09"; then
					# older versions didn't ship the cli and containerd as separate packages
					if [ -n "$cli_pkg_version" ]; then
						pkgs="$pkgs docker-ce-cli-$cli_pkg_version containerd.io"
					else
						pkgs="$pkgs docker-ce-cli containerd.io"
					fi
				fi
				if version_gte "20.10"; then
					pkgs="$pkgs docker-compose-plugin docker-ce-rootless-extras$pkg_version"
				fi
				if version_gte "23.0"; then
						pkgs="$pkgs docker-buildx-plugin"
				fi
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "$pkg_manager install -y -q $pkgs"
			)
			echo_docker_as_nonroot
			exit 0
			;;
		sles)
			if [ "$(uname -m)" != "s390x" ]; then
				echo "Packages for SLES are currently only available for s390x"
				exit 1
			fi
			if [ "$dist_version" = "15.3" ]; then
				sles_version="SLE_15_SP3"
			else
				sles_minor_version="${dist_version##*.}"
				sles_version="15.$sles_minor_version"
			fi
			opensuse_repo="https://download.opensuse.org/repositories/security:SELinux/$sles_version/security:SELinux.repo"
			repo_file_url="$DOWNLOAD_URL/linux/$lsb_dist/$REPO_FILE"
			pre_reqs="ca-certificates curl libseccomp2 awk"
			(
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "zypper install -y $pre_reqs"
				$sh_c "zypper addrepo $repo_file_url"
				if ! is_dry_run; then
						cat >&2 <<-'EOF'
						WARNING!!
						openSUSE repository (https://download.opensuse.org/repositories/security:SELinux) will be enabled now.
						Do you wish to continue?
						You may press Ctrl+C now to abort this script.
						EOF
						( set -x; sleep 30 )
				fi
				$sh_c "zypper addrepo $opensuse_repo"
				$sh_c "zypper --gpg-auto-import-keys refresh"
				$sh_c "zypper lr -d"
			)
			pkg_version=""
			if [ -n "$VERSION" ]; then
				if is_dry_run; then
					echo "# WARNING: VERSION pinning is not supported in DRY_RUN"
				else
					pkg_pattern="$(echo "$VERSION" | sed "s/-ce-/\\\\.ce.*/g" | sed "s/-/.*/g")"
					search_command="zypper search -s --match-exact 'docker-ce' | grep '$pkg_pattern' | tail -1 | awk '{print \$6}'"
					pkg_version="$($sh_c "$search_command")"
					echo "INFO: Searching repository for VERSION '$VERSION'"
					echo "INFO: $search_command"
					if [ -z "$pkg_version" ]; then
						echo
						echo "ERROR: '$VERSION' not found amongst zypper list results"
						echo
						exit 1
					fi
					search_command="zypper search -s --match-exact 'docker-ce-cli' | grep '$pkg_pattern' | tail -1 | awk '{print \$6}'"
					# It's okay for cli_pkg_version to be blank, since older versions don't support a cli package
					cli_pkg_version="$($sh_c "$search_command")"
					pkg_version="-$pkg_version"
				fi
			fi
			(
				pkgs="docker-ce$pkg_version"
				if version_gte "18.09"; then
					if [ -n "$cli_pkg_version" ]; then
						# older versions didn't ship the cli and containerd as separate packages
						pkgs="$pkgs docker-ce-cli-$cli_pkg_version containerd.io"
					else
						pkgs="$pkgs docker-ce-cli containerd.io"
					fi
				fi
				if version_gte "20.10"; then
					pkgs="$pkgs docker-compose-plugin docker-ce-rootless-extras$pkg_version"
				fi
				if version_gte "23.0"; then
						pkgs="$pkgs docker-buildx-plugin"
				fi
				if ! is_dry_run; then
					set -x
				fi
				$sh_c "zypper -q install -y $pkgs"
			)
			echo_docker_as_nonroot
			exit 0
			;;
		*)
			if [ -z "$lsb_dist" ]; then
				if is_darwin; then
					echo
					echo "ERROR: Unsupported operating system 'macOS'"
					echo "Please get Docker Desktop from https://www.docker.com/products/docker-desktop"
					echo
					exit 1
				fi
			fi
			echo
			echo "ERROR: Unsupported distribution '$lsb_dist'"
			echo
			exit 1
			;;
	esac
	exit 1
}

# wrapped up in a function so that we have some protection against only getting
# half the file during "curl | sh"
do_install
