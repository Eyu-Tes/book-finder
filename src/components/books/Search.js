import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import './Search.css'

const Search = ({showClear, clearBooks, showAlert, searchBooks}) => {
    const [text, setText] = useState('')

    const onChange = (e) => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if (text.trim() === '') {
            showAlert('Please enter something', 'light')
        }
        else {
            searchBooks(text)
            setText('')
        }
    }

    return(
        <Fragment>
            <form id="book-form" className="mt-3" onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        name="text" 
                        type="text" 
                        className="form-control" 
                        autoFocus
                        placeholder='Search books ...'
                        value={text}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block btn-dark rounded-0">Search</button>
                    {showClear && (
                        <button type="button" onClick={clearBooks} className="btn btn-block btn-light rounded-0">Clear</button>
                    )}
                </div>
            </form>
        </Fragment>
    );
}

Search.propTypes = {
    searchBooks: PropTypes.func.isRequired,
    clearBooks: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
}

export default Search
