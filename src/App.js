import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import escapeStringRegexp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import BooksList from './components/BooksList'
import SearchPage from './components/SearchPage'
import './App.css'

class BooksApp extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  componentDidMount = () => {
    this.getBooks()
  }
  getBooks = () => {
    BooksAPI.getAll().then(books => {
      const matchCurReading = new RegExp(escapeStringRegexp('currentlyReading'))
      let currentlyReading = books ? books.filter(book => matchCurReading.test(book.shelf)) : null

      const matchWantToRead = new RegExp(escapeStringRegexp('wantToRead'))
      let wantToRead = books ? books.filter(book => matchWantToRead.test(book.shelf)) : null

      const matchRead = new RegExp(escapeStringRegexp('read'))
      let read = books ? books.filter(book => matchRead.test(book.shelf)) : null

      this.setState({ currentlyReading, wantToRead, read })
    })
  }
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getBooks())
  }
  render() {
    const books = this.state
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchPage
            updateBookShelf={this.updateBookShelf}
          />
        )} />
        <Route exact path='/' render={() => (
          <BooksList
            books={books}
            updateBookShelf={this.updateBookShelf}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
