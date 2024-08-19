import { useState } from 'react';
import BookCreate from './components/BookCreate';


function App(){
    const [ books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('Need to add book with: ', title);
        const updatedBooks = [
            ...books,
            {id: 123, title: title}
        ]

        setBooks(updatedBooks);
    }

    return (
        <div>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;