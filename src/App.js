import React, {Component} from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Search from './components/books/Search'
import Alert from './components/layout/Alert'
import Books from './components/books/Books'
import './App.css'

class App extends Component {
  state = {
    books: [],
    loading: false,
    alert: null,
  }

  // search books
  searchBooks = async (text) => {
    this.setState({loading: true})
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${text}"&maxResults=40`
      const res = await axios.get(url)
      // set books state to [] if res.data.items is undefined
      this.setState({books: res.data.items || []})
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
    const {books, loading} = this.state
    return(
      <div className="App">
        <Navbar/>
        <div className="container mt-3">
          <Alert alert={this.state.alert}/>
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
        </div>
      </div>
    )
  }
}

export default App;
