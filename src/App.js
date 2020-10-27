import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Search from './components/books/Search'
import Alert from './components/layout/Alert'
import Books from './components/books/Books'
import Book from './components/books/Book'
import About from './components/pages/About'
import './App.css'

class App extends Component {
  state = {
    books: [],
    book: {},
    loading: false,
    alert: null,
  }

  // search books
  searchBooks = async text => {
    this.setState({loading: true})
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:"${text}"&maxResults=40`)
      // set books state to [] if res.data.items is undefined
      this.setState({books: res.data.items || []})
    } catch (error) {
      console.log(error)
    }
    this.setState({loading: false})
  } 

  // get book
  getBook = async bookId => {
    this.setState({loading: true})
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      this.setState({book: res.data})
    } catch (error) {
      console.log(error)  
    }
    this.setState({loading: false})
  }

  // clear books form state
  clearBooks = () => this.setState({books: []})

  // show alert
  showAlert = (msg, type) => {
    this.setState({alert: {msg, type}})
    // set alert back to null after 3 seconds
    setTimeout(() => {this.setState({alert: null})}, 3000)
  }

  render() {
    const {books, book, loading, alert} = this.state
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container mt-3">
            <Alert alert={alert}/>
            <Switch>
              <Route exact path="/" render={props => 
                <Fragment>
                  <Search 
                    searchBooks={this.searchBooks} 
                    clearBooks={this.clearBooks} 
                    showClear={books.length > 0 ? true : false}
                    showAlert={this.showAlert}
                  />
                  <Books 
                    books={books} 
                    loading={loading}
                  />
                </Fragment>
              } />
              <Route exact path="/about" component={About} />
              <Route exact path="/book/:bookId" render={props => 
                <Book 
                  {...props} 
                  getBook={this.getBook}
                  book={book} 
                  loading={loading}
                />
              } />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
