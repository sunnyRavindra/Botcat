### Docker Client Server Architecture 
```mermaid
flowchart TD
Docker-Client --> Rest-API --> Docker-Host --> Docker-Demon 
Docker-Demon --> Docker-Images
Docker-Demon --> Docker-Containers
Docker-Registry --> Docker-Images
Docker-Images --> Docker-Containers 
```

![Docker Architecture diagram](https://docs.docker.com/assets/images/architecture.svg)
### References

- [Docker Overview](https://docs.docker.com/get-started/overview/)

- [Docker Quick Start Guide](https://docs.docker.com/get-started/overview/)

[[My Docker Approach]]
