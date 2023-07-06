I prefer using "code" folder in my home directory for all my git projects 

```
~/code/
```

### Setting Docker Dev Container 

This creates dev docker container with bind mounted to me local Code git repository

```
docker run -it --rm -v ~/code:/code sunnyrav/nextjsportfolio:v1 bash
```