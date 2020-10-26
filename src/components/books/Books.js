import React from 'react'
import BookItem from './BookItem'
import Spinner from '../layout/Spinner'

const Books = ({books, loading}) => 
    <div className="row mt-5">
        {loading ? <Spinner/> : (
            books.map((book, i) => <BookItem key={i} book={book}/>)
        )}
    </div>

export default Books
