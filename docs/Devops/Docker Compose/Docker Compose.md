- Install Docker Compose
```
sudo pacman -S docker-compose
```

- Check Docker Compose Version
```
docker compose version
```

- Start from compose file
```
compose up
```

- Start from compose file
```
compose down 
```

- By default, named volumes in your compose file are NOT removed when running docker compose down. If you want to remove the volumes, you will need to add the --volumes flag.

### Reference 
- [Github Project](https://docs.docker.com/get-started/08_using_compose/)
