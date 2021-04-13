import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

const Book = ({book, loading, getBook, ...extraProps}) => {
    // set default or fall back values, 
    // since there is nothing to destructure when book object is empty
    const {volumeInfo={}} = book
    const {title='', authors=[], publisher='', publishedDate='', pageCount=0, language='', previewLink='', imageLinks:{thumbnail=''}={}} = volumeInfo

    useEffect(()=>{
        const bookId = extraProps.match.params.bookId
        getBook(bookId)

        /* --- The following comment disables "React Hook useEffect has missing dependencies:" warning --- */
        // eslint-disable-next-line
    }, [])

    return (
        loading ? 
        <Spinner/> : 
        <Fragment>
            <Link to="/book-finder" className="btn btn-light"><i className="fa fa-arrow-circle-left mr-2"></i> Back To Search</Link>
            <div className="card border-0 my-3 p-1">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={thumbnail} alt="" className="card-img-top"/>
                    </div>
                    <div className="col-sm-8">
                        <div className="px-5">
                            <h4 className="my-3"><b>{title}</b></h4>
                            <p>Author(s): <b>{authors.join(', ')}</b></p>
                            <p>Date Published: <b>{publishedDate}</b></p>
                            <p>Publisher: <b>{publisher}</b></p>
                            <p>Language: <b>{language}</b></p>
                            <p>Pages: <b>{pageCount}</b></p>
                            <a href={previewLink} className="btn btn-outline-dark rounded-0">Preview Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired, 
    loading: PropTypes.bool.isRequired, 
    getBook: PropTypes.func.isRequired
}

export default Book
