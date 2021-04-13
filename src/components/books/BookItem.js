import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import img from '../layout/no-image-available.png'

const BookItem = ({book:{id, volumeInfo: {title, imageLinks}}}) => {
    const thumbnail = imageLinks ? imageLinks.thumbnail : null
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card rounded-0 m-1" id="book-card">
                <Link to={`/book-finder/book/${id}`}>
                    <img src={thumbnail || img} alt="" className="card-img-top rounded-0"/>
                    <div className="card-body text-center bg-light">
                        <b>{title}</b>
                    </div>
                </Link>
            </div>
        </div>
)}

BookItem.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookItem
