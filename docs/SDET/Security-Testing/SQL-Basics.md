---
title: SQL Basics
---
# DBMS (Database Management system) 

### MY SQL Docker server
```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

### SQL login 
```bash
mysql -u<username> -hlocalhost/ServerIp -p
mysql -u<username> -hlocalhost/ServerIp -pPassword 
```

### Import/Export Table
```bash
# This exports data from a table to a .sql file
mysqldump -uroot -hlocalhost/serverIP -pPassword tableName > ~/export.sql

# This Imports data from .sql file to a table
# Note that the table name you specifi should have been already created in the SQL databse
mysql -uroot -hlocalhost/serverIP -pPassword tableName < ~/export.sql
```
### Create Db and Tables
```bash
# Create Database
create databse DatabaseName;

# Create Tables
create table tableName (
PrimaryKeyID int primary key auto_increment  not null,
column1 varcar(20), 
column2 text, 
column3 int,
foreign key (column3) references ReferenceTableName (columnName to reference) on delete restrict
);
```

### List Database and Tables
```bash
# List Database
show database;

# Select Database
use Database;

# List Tables
describe tableName;
disc tableName;
```

### Delete Database and Tables 
```bash
# Delete Entire Database
drop database databaseName

# This removed the entire table from the database
drop table tablename 

# This deletes a spechific row from a table with id =3
delete from tableName where id = 3;
```
