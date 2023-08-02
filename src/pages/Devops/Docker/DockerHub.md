- DockerHub is the official docker registry from docker where all the images are stored public or private.
- [Create Dockerhub Repository](https://docs.docker.com/get-started/04_sharing_app/)
- To push locally built image to dockerhub you first need to tag the image appropriately 
```
docker image -t imagename dockeruserID/imagename:version
```
- Push image to dockerHub
```
docker push dockeruserID/imagename:version
```