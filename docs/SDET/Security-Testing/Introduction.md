---
title: My SQL
---
## DBMS (Database Management system) 

### MY SQL Docker server
```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

### Docker SQL login 
```
mysql -u<username> -hlocalhost/ServerIp -p
mysql -u<username> -hlocalhost/ServerIp -pPassword 
```

### Create Db and Tables
```bash
create databse DatabaseName;
create table tableName (
column1 varcar(20),
fcolumn2 int primary key auto_increment,
column3 text,
column4 not null);
```

### List Database and Tables
```bash
show database;
describe/disc tableName;
```

### Add data into table
```bash
insert into tablename (columnName1,columnName2) values("Test Value","Test Value2")
```

### fetch queries from databse
```bash
select * from tablename
```

### Delete 
```bash
# This deletes the entire table
drop table tablename 

# This deletes a spechific row with id =3
delete from tableName where id = 3;
```

### Primary key
```bash
#you cant put null values in the primary key
```

### Export
```bash
# This exports data from a table to a .sql file
mysqldump -uroot -hlocalhost/serverIP -pPassword tableName > ~/export.sql
```

### Import
```bash
# This Imports data from .sql file to a table
# Note that the table name you specifi should have been already created in the SQL databse
mysql -uroot -hlocalhost/serverIP -pPassword tableName < ~/export.sql
```

### Accessing Database
```bash
# Selecting Database
use DatabaseName;
# Show all values from the table
select * from tableName;
# Show a specific row
select * from tableName where id =1;
# Show count of rows
select count(*) from tableName;
# Show rows with name starting with su 
select * from tableName where (name like "%su" && age > 40) || (name like "%su" && age < 40) ;
# Show rows with name containing letter  o
select * from tableName where name like "%o%";
# Show rows with name not starting with su
select * from tableName where name not like "su%";
# showing non NUll values
select * from tableName where name is NOT NULL
# Show data where age not equal to 40;
select * from tableName where age != 40;
```
### Updating Database
```SQL
# Adding new column to an existing table 
alter table tableName add columnName varchar(20); 

# Removing a column from an existing table
alter table tableName drop columnName

# update values in existing table
update tableName (columnName1, ColumnName2) values("Value1","Value2") where id = 1;

```

### Order  by
```
# Accending Order
select * from tableName order by columnName1 asc, columnName2 desc;

# Decending Order
select * from tableName order by columnName1 desc, columnName2 desc;
```
### Limits 
```
select * from TableName Limit 1, 10;
```


