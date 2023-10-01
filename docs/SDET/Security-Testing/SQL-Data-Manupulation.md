---
title: SQL Data Manupulation 
---

# Data Manupulation

### Add data into table
```bash
insert into tablename (columnName1,columnName2) values("Test Value","Test Value2")
```

### Accessing Database
```bash
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
```bash
# Adding new column to an existing table 
alter table tableName add columnName varchar(20); 

# Removing a column from an existing table
alter table tableName drop columnName

# update values in existing table
update tableName set columnName1 = "Value" where id = 1;
```

### Order  by
```bash
# Accending Order
select * from tableName order by columnName1 asc, columnName2 desc;

# Decending Order
select * from tableName order by columnName1 desc, columnName2 desc;
```

### Limits 
```bash
select * from TableName Limit 1, 10;
```

### Primary key
#you cant put null values in the primary key
```bash
```
