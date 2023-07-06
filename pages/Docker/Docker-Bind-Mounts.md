1. Bind mounts are linked to a specific directory or file on the host system.
2. With bind mounts, you can directly reference files or directories on the host during container runtime.
3. Bind mounts do not have a separate life cycle from the host system; they are tightly coupled.
4. Changes made in the bind mount are immediately visible on the host and vice versa.
5. Bind mounts provide a way to share files or directories between the host and containers.
6. They are useful for development workflows, where code changes can be immediately reflected inside the container.
8. Multiple containers can bind to the same host directory or file, allowing easy data sharing.
7. Bind mounts can be specified using absolute paths or relative paths to the container's file system.
```
docker run -it --rm -v ~/code/app:/app image:latest
```

