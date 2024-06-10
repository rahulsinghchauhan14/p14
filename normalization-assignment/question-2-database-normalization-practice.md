# [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

## Table: Employee Information
 
| Employee ID | Employee Name | Department | Project ID | Project Name | Start Date | End Date   | Salary |
|-------------|---------------|------------|------------|--------------|------------|------------|--------|
| 101         | John Doe      | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | John Doe      | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |
|-------------|---------------|------------|------------|--------------|------------|------------|--------|

### Step 1: First Normal Form (1NF)
``
Ensure each column contains atomic values. Eliminate repeating groups. Result: The table should not contain any repeating groups.
``
### Employee Details

| Employee ID | Employee Name | Department | Salary |
|-------------|---------------|------------|--------|
| 101         | John Doe      | HR         | 5000   |
| 102         | Jane Smith    | Marketing  | 5500   |
| 103         | Mike Johnson  | IT         | 6000   |
| 104         | Sarah Brown   | HR         | 4800   |
| 105         | Robert Lee    | Finance    | 5200   |
| 106         | Lisa Wang     | IT         | 5800   |
|-------------|---------------|------------|--------|

### Project Assignments

| Employee ID | Project ID | Project Name | Start Date | End Date   |
|-------------|------------|--------------|------------|------------|
| 101         | 001        | Project A    | 2023-01-15 | 2023-06-30 |
| 101         | 002        | Project B    | 2023-04-01 | 2023-08-31 |
| 102         | 001        | Project A    | 2023-02-01 | 2023-05-31 |
| 103         | 002        | Project B    | 2023-03-10 | 2023-08-15 |
| 103         | 003        | Project C    | 2023-06-15 | 2023-11-30 |
| 104         | 002        | Project B    | 2023-04-20 | 2023-07-31 |
| 105         | 001        | Project A    | 2023-05-05 | 2023-09-30 |
| 106         | 001        | Project A    | 2023-06-01 | 2023-12-31 |
|-------------|------------|--------------|------------|------------|


### Step 2: Second Normal Form (2NF)
```
Identify the primary key(s). Eliminate partial dependencies. Result: The table should be in 2NF with separate tables for each entity and its attributes.
```
### Employee Details

| Employee ID | Employee Name | Department | Salary |
|-------------|---------------|------------|--------|
| 101         | John Doe      | HR         | 5000   |
| 102         | Jane Smith    | Marketing  | 5500   |
| 103         | Mike Johnson  | IT         | 6000   |
| 104         | Sarah Brown   | HR         | 4800   |
| 105         | Robert Lee    | Finance    | 5200   |
| 106         | Lisa Wang     | IT         | 5800   |
|-------------|---------------|------------|--------|

## Projects

| Project ID | Project Name |
|------------|--------------|
| 001        | Project A    |
| 002        | Project B    |
| 003        | Project C    |
|------------|--------------|

### Project Assignments

 
| Employee ID | Project ID | Start Date | End Date   |
|-------------|------------|------------|------------|
| 101         | 001        | 2023-01-15 | 2023-06-30 |
| 101         | 002        | 2023-04-01 | 2023-08-31 |
| 102         | 001        | 2023-02-01 | 2023-05-31 |
| 103         | 002        | 2023-03-10 | 2023-08-15 |
| 103         | 003        | 2023-06-15 | 2023-11-30 |
| 104         | 002        | 2023-04-20 | 2023-07-31 |
| 105         | 001        | 2023-05-05 | 2023-09-30 |
| 106         | 001        | 2023-06-01 | 2023-12-31 |
|-------------|------------|------------|------------|


### Step 3: Third Normal Form (3NF)
```
Remove transitive dependencies. Result: The table should be in 3NF with separate tables for each relationship.
```

## Department

| Department ID | Department Name        |
|---------------|------------------------|
| 001           | HR                     |
| 002           | Marketing              |
| 003           | IT                     |
| 004           | Finance                |
|---------------|------------------------|

## Employee Details

| Employee ID | Employee Name | Department ID | Salary |
|-------------|---------------|---------------|--------|
| 101         | John Doe      | 001           | 5000   |
| 102         | Jane Smith    | 002           | 5500   |
| 103         | Mike Johnson  | 003           | 6000   |
| 104         | Sarah Brown   | 001           | 4800   |
| 105         | Robert Lee    | 004           | 5200   |
| 106         | Lisa Wang     | 003           | 5800   |
|-------------|---------------|---------------|--------|


### Step 4: Fourth Normal Form (4NF)
```
Remove multi-valued dependencies. Result: The table should be in 4NF with separate tables for independent multi-valued attributes.
```

### Step 5: Fifth Normal Form (5NF) [If Applicable]

