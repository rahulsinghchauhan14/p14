# Question 1: Normalization

Consider the following unnormalized table for a bookstore database:

| Book ID | Title                 | Author           | Genre   | Publisher    | ISBN          | Price |
|---------|-----------------------|------------------|---------|--------------|---------------|-------|
| 101     | To Kill a Mockingbird | Harper Lee       | Fiction | HarperCollins| 978-0061120084| 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner  | 978-0743273565| 12.50 |
| 103     | Principles of Physics | Jearl Walker     | Science | Wiley        | 978-0321976444| 50.00 |
|---------|-----------------------|------------------|---------|--------------|---------------|-------|
Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.

Ans: 
- 1NF (First Normal Form): To convert the table to 1NF, we need to ensure that each attribute contains atomic values and 
there are no repeating groups. In the provided table, all attributes contain atomic values, so it is already in 1NF.


- 2NF (Second Normal Form): To achieve 2NF, we need to eliminate partial dependencies, ensuring that all non-key attributes are fully functionally dependent on the primary key. In the given table, we can identify "Book ID" as the primary key.
The Title, Author, Genre, Publisher, ISBN and Price attributes are functionally dependent on the Book ID. Therefore, the table is already in 2NF.

- 3NF (Third Normal Form): To reach 3NF, we need to eliminate transitive dependencies, ensuring that all non-key attributes are directly dependent on the primary key and not on other non-key attributes. In the provided table, "Publisher" seems to be tansitively 
dependent on Book ID through the Title attribute, as Publisher is functionally dependent on Title. To resolve this, we create a separate table for publishers:


