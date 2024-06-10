Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

Primary Key: is a unique identifier for each row in a table. 
Foreign Key: establish a relationship between two tables. It ensure the referential integrity. It refer to the primary key of the another table.

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

In the Department table "Department ID" is te primary key which is unique and ensuring the data integrity.
In the Employee Table "Department ID" is the act as a foreign key and create a relationship with Department and Employee Details table.
