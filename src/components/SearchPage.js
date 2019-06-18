import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import BookDetails from './BookDetails'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {
    static propTypes = {
        updateBookShelf: propTypes.func.isRequired
    }
    state = {
        books: [],
        query: '',
        isFound: false
    }
    handleUpdateSearch = (query) => {
        this.setState({
            query: query.trim()
        })
        console.log(query)
        if (query) {
            BooksAPI.search(query).then(books => {
                books.length > 0 ?
                    this.setState({ books: books, isFound: false })
                    : this.setState({ books: [], isFound: true })
            })
        } else {
            this.setState({ books: [], isFound: false })
        }
    }
    render() {
        const searchedBooks = this.state.books
        const result = this.state.isFound
        const updateBookShelf = this.props.updateBookShelf
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search Book"
                            value={this.state.query}
                            onChange={(event) => this.handleUpdateSearch(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {console.log(searchedBooks)}
                    {searchedBooks.length > 0 && (
                        <React.Fragment>
                            <h3>Search returned {searchedBooks.length} results!</h3>
                            <ol className="books-grid">
                                {searchedBooks.map(book => (
                                    <BookDetails
                                        key={book.id}
                                        book={book}
                                        updateBookShelf={updateBookShelf}
                                    />
                                ))}
                            </ol>
                        </React.Fragment>
                    )}
                    {result && (
                        <h3>Book not Found...try again!</h3>
                    )}
                </div>
            </div>
        )
    }
}

export default SearchPage;