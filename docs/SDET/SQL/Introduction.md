---
title: My SQL
---

### MY SQL Docker server
```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

### Docker SQL login 
```
mysql -u <username> -p 
```

### Create Database and Table
```bash
create databse DatabaseName;
create table tableName (column1 varcar(20),column2 int primary key,column3 text,column4 not null);
```

### List Database and Tables
```
show database;
use DatabaseName;
describe/disc tableName;
```

### Add data
```
insert into tablename (columnName1,columnName2) values("Test Value","Test Value2")
```

### fetch queries 
```
select * from tablename
```

### Delete Tables
```
drop table tablename
```


1. Databse is collection of tables
2. DBMS (Database Management system) -  Its the software through which we run the DB queries to alter of fetch the data from database
3. third
4. Primary Key
5. you cant put null values in the primary key

  Note : Do more practice on using not null with different possibilities
