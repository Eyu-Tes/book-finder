import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired, 
        loading: PropTypes.bool.isRequired, 
        getBook: PropTypes.func.isRequired
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getBook(id)
    }
    render() {
        const {book, loading} = this.props
        const {title, authors, publisher, publishedDate, pageCount, language, imageLinks:{thumbnail}} = book.volumeInfo
        return(
            loading ? 
            <Spinner/> :
            <Fragment>
                <Link to="/">
                    <button className="btn btn-light"><i className="fa fa-arrow-circle-left mr-2"></i> Back to Search</button>
                </Link>
                <div className="card border-0 mt-3 p-1">
                    <div className="row">
                        <div className="col-4">
                            <img src={thumbnail} alt="" className="card-img-top h-75"/>
                        </div>
                        <div className="col-8">
                            <h4 className="my-3">{title}</h4>
                            <p>Author(s): <b>{authors.join(', ')}</b></p>
                            <p>Date Published: <b>{publishedDate}</b></p>
                            <p>Publisher: <b>{publisher}</b></p>
                            <p>Language: <b>{language}</b></p>
                            <p>Pages: <b>{pageCount}</b></p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Book
