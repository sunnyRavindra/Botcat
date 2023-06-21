## Docker-Swarm

### Swarm-Basics
1. Docker Swarm: Docker Swarm is a native clustering and orchestration solution for Docker. It allows you to create and manage a cluster of Docker nodes, turning them into a single virtual Docker engine.

2. Clustering: Docker Swarm enables you to create a cluster by joining multiple Docker hosts together. These hosts can be physical or virtual machines. The cluster behaves as a single entity, providing a unified interface for managing containers across all the nodes.

3. Orchestration: Docker Swarm provides orchestration capabilities, allowing you to deploy and manage applications across the cluster. It handles tasks such as container scheduling, load balancing, service discovery, and scaling.

4. Nodes: In Docker Swarm, a node refers to an individual Docker host within the cluster. Nodes can be worker nodes or manager nodes. Worker nodes run containerized applications, while manager nodes handle cluster management tasks.

5. Services: Services are the definition of the tasks you want to run in your cluster. You can define a service to run a single container or a group of containers, specifying details such as the image, ports, environment variables, and resource constraints.

6. Load Balancing: Docker Swarm automatically distributes containers across the available nodes to balance the workload. It uses an ingress load balancer to route incoming traffic to the appropriate container, ensuring high availability and scalability.

7. Scaling: With Docker Swarm, you can easily scale your services up or down to meet the demand. You can specify the desired number of replicas for a service, and Swarm will distribute them across the nodes accordingly.

8. Rolling Updates: Docker Swarm supports rolling updates, allowing you to update your services without causing downtime. It follows a rolling deployment strategy by gradually updating containers one by one, ensuring that the service remains available throughout the process.

9. High Availability: Docker Swarm provides high availability by allowing you to configure manager node replicas. If one manager node fails, another takes over, ensuring the cluster remains operational.

10. Integration with Docker CLI: Docker Swarm integrates seamlessly with the Docker command-line interface (CLI), making it easy to work with existing Docker commands and tools.

#### Initialization and Management:
- `docker swarm init`: Initialize a new Docker Swarm on the current node.
- `docker swarm join`: Join a node to an existing Docker Swarm as a worker or manager.
- `docker swarm leave`: Make a node leave the Docker Swarm.
- `docker node ls`: List all nodes in the Docker Swarm.

### Service Management:
- `docker service create`: Create a new service.
- `docker service ls`: List all services in the Docker Swarm.
- `docker service inspect`: Inspect details of a specific service.
- `docker service update`: Update configuration or scale a service.
- `docker service scale`: Scale the number of replicas for a service.
- `docker service rm`: Remove a service from the Docker Swarm.

### Task and Container Management:
- `docker ps`: List running containers.
- `docker service ps`: List tasks (containers) for a service.
- `docker logs`: Fetch the logs of a container or service.
- `docker exec`: Execute a command inside a running container.
- `docker stop`: Stop a running container.
- `docker rm`: Remove a container.

### Stack Deployment:
- `docker stack deploy`: Deploy a stack defined in a Docker Compose file.
- `docker stack ls`: List all stacks in the Docker Swarm.
- `docker stack ps`: List tasks (containers) of a stack.
- `docker stack services`: List services in a stack.
- `docker stack rm`: Remove a stack from the Docker Swarm.

### Secrets Management:
- `docker secret create`: Create a new secret.
- `docker secret ls`: List all secrets in the Docker Swarm.
- `docker secret inspect`: Inspect details of a specific secret.
- `docker secret rm`: Remove a secret from the Docker Swarm.

