import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Search from './components/books/Search'
import Alert from './components/layout/Alert'
import Books from './components/books/Books'
import About from './components/pages/About'
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
    const {books, loading, alert} = this.state
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
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
