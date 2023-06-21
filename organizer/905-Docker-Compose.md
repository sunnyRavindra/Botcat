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
