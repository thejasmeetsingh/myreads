import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

const BooksList = (props) => {
    const currentlyReading = props.books.currentlyReading
    const wantToRead = props.books.wantToRead
    const read = props.books.read
    const updateBookShelf = props.updateBookShelf
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads App</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <CurrentlyReading
                        currentlyReading={currentlyReading}
                        updateBookShelf={updateBookShelf}
                    />
                    <WantToRead
                        wantToRead={wantToRead}
                        updateBookShelf={updateBookShelf}
                    />
                    <Read
                        read={read}
                        updateBookShelf={updateBookShelf}
                    />
                </div>
            </div>
            <Link to="/search" className="open-search">Add a book</Link>
        </div>
    )
}

BooksList.propTypes = {
    books: propTypes.object.isRequired,
    updateBookShelf: propTypes.func.isRequired
}

export default BooksList;