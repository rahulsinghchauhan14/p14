import './Book.css';

function Book(props){
    return (
        <>
        <div className="card">
            <span>Book Name: <h3 className='h3'>{props.title}</h3></span>
            <span>Written By: <p>{props.author}</p></span>
            <span>Published: <p>{props.year}</p></span>
        </div>
        </>
    )
}

export default Book;