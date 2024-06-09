import Book from "./Book";
import './BookList.css';

const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
  { title: 'Book 4', author: 'Author 3', year: 2020 },
  { title: 'Book 5', author: 'Author 1', year: 2018 },
  { title: 'Book 6', author: 'Author 4', year: 2022 },
]

function BookList(){
    return (
        <>
        <ul>
            { books.map((book, index) => (
                <li key={index}>
                    <strong>{book.title}</strong>
                    <Book title={book.title} author={book.author} year={book.year}></Book>
                </li>
                
            ))}
        </ul>
        </>
    );
}

export default BookList;