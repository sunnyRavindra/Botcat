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
