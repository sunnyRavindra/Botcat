---
title: DataTypes
---
### Numeric Types
```bash
INT or INTEGER: A whole number.

TINYINT: A very small integer.

SMALLINT: A small integer.

MEDIUMINT: A medium-sized integer.

BIGINT: A large integer.

FLOAT: A single-precision floating-point number.

DOUBLE or REAL: A double-precision floating-point number.

DECIMAL or NUMERIC: A fixed-point decimal number.
```

### Date and Time Types
```bash
DATE: Date in 'YYYY-MM-DD' format.

TIME: Time in 'HH:MM:SS' format.

DATETIME: Date and time in 'YYYY-MM-DD HH:MM:SS' format.

TIMESTAMP: A timestamp representing a datetime value.

YEAR: A year in 2-digit or 4-digit format.
```

### String Types
 ```bash
CHAR: Fixed-length character string.

VARCHAR: Variable-length character string.

BINARY: Fixed-length binary string.

VARBINARY: Variable-length binary string.

TINYBLOB, TINYTEXT: Tiny binary or text data.

BLOB, TEXT: Binary or text data of various sizes.

MEDIUMBLOB, MEDIUMTEXT: Medium-sized binary or text data.

LONGBLOB, LONGTEXT: Large binary or text data.

ENUM: Enumeration of possible values.

SET: Set of values, where each value can be selected.
```

### JSON Types
```bash
JSON: JSON data type for storing JSON-encoded data.
```

### Spatial Types
```bash
GEOMETRY: For geometric shapes.

POINT: For a point in space.

LINESTRING: For a series of points.

POLYGON: For a closed shape.
```

### Other types
```bash
BIT: A bit field type.

BOOLEAN or BOOL: A synonym for TINYINT(1).

SERIAL: An alias for BIGINT UNSIGNED AUTO_INCREMENT.
```

### Custom User-Defined Types
```bash
MySQL allows you to create your own custom data types using the CREATE TYPE statement.
```

### Temporal Types (Introduced in MySQL 8.0)
```bash
YEAR,
YEAR_MONTH,
YEAR_DAY,
MONTH_DAY,
DAY_TIME,
HOUR_MINUTE,
MINUTE_SECOND,
SECOND_MICROSECOND,
TIME_ZONE,
and more. These types are used for working with temporal values.
```
