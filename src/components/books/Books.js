import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import Spinner from '../layout/Spinner'

const Books = ({books, loading}) => 
    <div className="row mt-5">
        {loading ? <Spinner/> : (
            books.map(book => <BookItem key={book.id} book={book}/>)
        )}
    </div>

Books.propTypes = {
    books: PropTypes.array.isRequired, 
    loading: PropTypes.bool.isRequired
}

export default Books
