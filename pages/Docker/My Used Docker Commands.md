- Login 
```
docker login
```
- Build Image
```
docker build -t username/imagename:tag .
```
- List of running containers.
```
docker ps
or 
docker container ls
```
- List of running as well as stopped containers.
```
docker ps -a
or
docker container ls -a
```
- Container .
```
docker stop <the-container-id>
```

- Remove Stopped Container.
```
docker rm <the-container-id>
```

 - Stop and remove container with one command.
```
docker rm -f <the-container-id>
```

- To push locally built image to dockerhub you first need to tag the image appropriately 
```
docker image -t imagename dockeruserID/imagename:version
```

- Push image to dockerHub
```
docker push dockeruserID/imagename:version
```

- Run commands in a running container 
```
docker exec <container-id> cat /data.txt
```

- You can watch the logs using
```
docker logs <container-id>
```

- Use the docker image history command to see the layers in the getting-started image you created earlier in the tutorial.
```
docker image history --no-trunc getting-started 
```