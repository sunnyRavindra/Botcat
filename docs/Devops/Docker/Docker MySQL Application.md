- Create docker network for the MYSQL container
```
docker network create mynewnetwork
```

- Start MSQL container 
```
docker run -d --network mynewnetwork --network-alias mysqlnet -v mydockervolume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=mydb mysql
```

- confirm database 
```
docker exec -it <mysql-container-id> mysql -u root -p
mysql> SHOW DATABASES;
```

    Start a new container using the nicolaka/netshoot image. Make sure to connect it to the same network.

 docker run -it --network todo-app nicolaka/netshoot

Inside the container, you’re going to use the dig command, which is a useful DNS tool. You’re going to look up the IP address for the hostname mysql.

 dig mysql

You should get output like the following.

     ; <<>> DiG 9.18.8 <<>> mysql
     ;; global options: +cmd
     ;; Got answer:
     ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 32162
     ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

     ;; QUESTION SECTION:
     ;mysql.				IN	A

     ;; ANSWER SECTION:
     mysql.			600	IN	A	172.23.0.2

     ;; Query time: 0 msec
     ;; SERVER: 127.0.0.11#53(127.0.0.11)
     ;; WHEN: Tue Oct 01 23:47:24 UTC 2019
     ;; MSG SIZE  rcvd: 44

    In the “ANSWER SECTION”, you will see an A record for mysql that resolves to 172.23.0.2 (your IP address will most likely have a different value). While mysql isn’t normally a valid hostname, Docker was able to resolve it to the IP address of the container that had that network alias. Remember, you used the --network-alias earlier.

    What this means is that your app only simply needs to connect to a host named mysql and it’ll talk to the database.

Run your app with MySQL

The todo app supports the setting of a few environment variables to specify MySQL connection settings. They are:

    MYSQL_HOST - the hostname for the running MySQL server
    MYSQL_USER - the username to use for the connection
    MYSQL_PASSWORD - the password to use for the connection
    MYSQL_DB - the database to use once connected
