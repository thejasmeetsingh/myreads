import React from 'react'
import propTypes from 'prop-types'

const BookDetails = (props) => {
    const book = props.book
    const updateBookShelf = props.updateBookShelf
    return (
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail
                            ? book.imageLinks.thumbnail
                            : 'https://dummyimage.com/128x196/000000/ffffff&text=Thumbnail+not+found'})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={event => updateBookShelf(book, event.target.value)} value={book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}

BookDetails.propTypes = {
    book: propTypes.object.isRequired,
    updateBookShelf: propTypes.func.isRequired
}

export default BookDetails