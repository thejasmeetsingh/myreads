import React from 'react'
import propTypes from 'prop-types'
import BookDetails from './BookDetails'

const Read = (props) => {
    const read = props.read
    const updateBookShelf = props.updateBookShelf
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {read.map(book => (
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

Read.propTypes = {
    read: propTypes.array.isRequired,
    updateBookShelf: propTypes.func.isRequired
}

export default Read;
