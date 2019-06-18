import React from 'react'
import propTypes from 'prop-types'
import BookDetails from './BookDetails'

const WantToRead = (props) => {
    const wantToRead = props.wantToRead
    const updateBookShelf = props.updateBookShelf
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {wantToRead.map(book => (
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

WantToRead.propTypes = {
    wantToRead: propTypes.array.isRequired,
    updateBookShelf: propTypes.func.isRequired
}

export default WantToRead;