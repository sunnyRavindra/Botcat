```
docker run -it --rm -v ~/code/app:/app image:latest
```

```
 docker run -it --mount type=bind,src="$(pwd)",target=/src ubuntu bash
```