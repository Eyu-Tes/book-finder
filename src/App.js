import React, {Fragment, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Search from './components/books/Search'
import Alert from './components/layout/Alert'
import Books from './components/books/Books'
import Book from './components/books/Book'
import About from './components/pages/About'
import './App.css'

const App = () => {
  const [books, setBooks] = useState([])
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // search books
  const searchBooks = async text => {
    setLoading(true)
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:"${text}"&maxResults=40`)
      // set books state to [] if res.data.items is undefined
      setBooks(res.data.items || [])
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  } 

  // get book
  const getBook = async bookId => {
    setLoading(true)
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      setBook(res.data)
    } catch (error) {
      console.log(error)  
    }
    setLoading(false)
  }

  // clear books form state
  const clearBooks = () => setBooks([])

  // show alert
  const showAlert = (msg, type) => {
    setAlert({msg, type})
    // set alert back to null after 3 seconds
    setTimeout(() => {setAlert(null)}, 3000)
  }

  return(
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container mt-3">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path="/book-finder" render={props => 
              <Fragment>
                <Search 
                  searchBooks={searchBooks} 
                  clearBooks={clearBooks} 
                  showClear={books.length > 0 ? true : false}
                  showAlert={showAlert}
                />
                <Books 
                  books={books} 
                  loading={loading}
                />
              </Fragment>
            } />
            <Route exact path="/book-finder/about" component={About} />
            <Route exact path="/book-finder/book/:bookId" render={props => 
              <Book 
                {...props} 
                getBook={getBook}
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

export default App;
