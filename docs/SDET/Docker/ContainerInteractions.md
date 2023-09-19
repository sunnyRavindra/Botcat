---
title: Interacting with container
---

To execute commands inside a Docker container, you can use the `docker exec` command. Here's how you can do it:

1. Start the Docker container: Ensure that your Docker container is running. You can start a container using the `docker run` command. For example:

```bash
docker run -it container-name
```

Replace `container-name` with the name or ID of your Docker container.

2. Execute a command inside the container: Open a new terminal or command prompt window and use the following command to execute a command inside the running container:

```bash
docker exec -it container-name command
```

Replace `container-name` with the name or ID of your Docker container, and replace `command` with the command you want to execute inside the container. The `-it` option allows you to interact with the container's terminal.

For example, if you want to execute a bash shell inside the container, you can run:

```bash
docker exec -it container-name bash
```

This will start a new shell session inside the running container.

3. Run a command and exit: If you want to run a command inside the container and exit immediately without entering an interactive shell, you can use the following command:

```bash
docker exec container-name command
```

Replace `container-name` with the name or ID of your Docker container, and replace `command` with the command you want to execute inside the container.

For example, to list the files in the container's `/app` directory, you can run:

```bash
docker exec container-name ls /app
```

That's it! You can now execute commands inside your Docker container using the `docker exec` command.
