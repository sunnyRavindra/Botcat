- Login 
```
docker login
```
- Build Image
```
docker build -t dockeruserID/imagename:tag .
docker image -t imagename dockeruserID/imagename:tag
docker push dockeruserID/imagename:tag
```
- List Image
```
docker image ls
docker image ls -a
```
- Remove Image
```
docker image rm Imagename:tag or ImageID
docker image rm -f Imagename:tag or ImageID
```
- List of running containers.
```
docker ps
docker ps -a
or 
docker container ls
docker container ls -a
```
- Container Start .
```
docker run -dp 3000:3000 --rm dockeruserID/imagename:tag
```
- Container Stop .
```
docker stop <the-container-id>
```
- Remove Container.
```
docker rm <the-container-id>
docker rm -f <the-container-id>
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