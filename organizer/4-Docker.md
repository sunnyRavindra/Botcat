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
   