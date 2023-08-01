- Create Volume.
```
docker volume create mynewvolume
```

- Mount the created volume.
```
docker run -dp 3000:3000 --mount type=volume,src=mynewvolume,target=/etc/todos ubuntu 
```