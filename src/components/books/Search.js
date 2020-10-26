import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import './Search.css'

class Search extends Component {
    static propTypes = {
        searchBooks: PropTypes.func.isRequired,
        clearBooks: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        showAlert: PropTypes.func.isRequired,
    }

    state = {
        text: '',
    }

    /* Make onChange work for any number of input elements using computed property names [] */
    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.text.trim() === '') {
            this.props.showAlert('Please enter something', 'light')
        }
        else {
            this.props.searchBooks(this.state.text)
            this.setState({text: ''})
        }
    }

    render() {
        const {showClear, clearBooks} = this.props
        return(
            <Fragment>
                <form id="book-form" className="mt-3" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input 
                            name="text" 
                            type="text" 
                            className="form-control" 
                            autoFocus
                            placeholder='Search books ...'
                            value={this.state.text}
                            onChange={this.onChange}
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
}

export default Search
