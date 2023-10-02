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

# showing non NUll values
select * from tableName where name is NOT NULL

# Show data where age not equal to 40;
select * from tableName where age != 40;

# Show unique rows
select distinct * from tableName 

# In operator
select * from tableName where  id in(1,2,3);

# Between operator
select * from tableName where id between 1 and 10;

# Get todays date year time day and week
select time(now()), day(now()), year(now()), week(now());
```

### Reguler expression usage
```bash
# Show rows with name starting with s + any letter + u
select * from tableName where (name like "%s_u" && age > 40) || (name like "%su" && age < 40) ;

# Show rows with name containing letter  o
select * from tableName where name like "%o%";

# Show rows with name not starting with su
select * from tableName where name not like "su%";
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

### Group By, Order by, Limits
```bash
# Accending Order
select * from tableName order by columnName1 asc, columnName2 desc;

# Decending Order
select * from tableName order by columnName1 desc, columnName2 desc;

# Group By
select columnName2 from tableName where condition group by columnName2 having condition order by columnName2 asc/desc;

#Limits
select * from TableName Limit 1, 10;
```

### Joins 
```bash
# Inner Join 
select a.columnName1 , b.columnName2 from table1 as a join table2 as b on a.columnName1 = b.columnName2;

# Left Join 
select a.columnName1 , b.columnName2 from table1 as a left join table2 as b on a.columnName1 = b.columnName2;

# Right Join 
select a.columnName1 , b.columnName2 from table1 as a right join table2 as b on a.columnName1 = b.columnName2;

```

