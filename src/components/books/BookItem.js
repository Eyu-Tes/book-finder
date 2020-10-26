import React from 'react'
import PropTypes from 'prop-types'
import img from '../layout/no-image-available.png'

const BookItem = ({book}) => {
    const {title, imageLinks} = book.volumeInfo
    const thumbnail = imageLinks ? imageLinks.thumbnail : null
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card rounded-0 m-1" id="book-card">
                <a href="/#">
                    <img src={thumbnail || img} alt="" className="card-img-top rounded-0"/>
                    <div className="card-body text-center bg-light">
                        <b>{title}</b>
                    </div>
                </a>
            </div>
        </div>
)}

BookItem.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookItem
