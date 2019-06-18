import React from 'react'
import propTypes from 'prop-types'
import BookDetails from './BookDetails'

const CurrentlyReading = (props) => {
    const currentlyReading = props.currentlyReading
    const updateBookShelf = props.updateBookShelf
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {currentlyReading.map(book => (
                        <BookDetails
                            key={book.id}
                            book={book}
                            updateBookShelf={updateBookShelf}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}

CurrentlyReading.propTypes = {
    currentlyReading: propTypes.array.isRequired,
    updateBookShelf: propTypes.func.isRequired
}

export default CurrentlyReading;