`chroot` is a command in Unix-like operating systems that allows you to change the root directory for a specific process or set of processes, creating a new environment isolated from the rest of the system.

- Setting up basic chroot
```
> mkdir -p new-root/{bin,lib64}
> cp /bin/bash new-root/bin
> cp /lib64/{ld-linux-x86-64.so*,libc.so*,libdl.so.2,libreadline.so*,libtinfo.so*} new-root/lib64
> sudo chroot new-root
```
- We create a new root directory, copy a bash shell and its dependencies in and run chroot. This jail is pretty useless: All we have at hand is bash and its builtin functions like cd and pwd.