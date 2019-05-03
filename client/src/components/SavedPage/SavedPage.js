import React from 'react';
import './SavedPage.css';
import BookDetail from '../bookDetail/bookDetail';

import axios from 'axios';

class SavedPage extends React.Component{
state={
    savedBooks:[]
}
renderSavedBooks = ()=>{
   axios.get('/api/books').then((response)=>{
     console.log(response.data)
     this.setState({
        savedBooks: response.data
    })
   })  
}
componentDidMount() {
    this.renderSavedBooks();
}
deleteBook=(event)=>{
    let idtoDelete = event.target.getAttribute('data-tag');
    console.log(idtoDelete)
    axios.delete("/api/books/" + idtoDelete).then((response)=>{
    this.renderSavedBooks();
    })
    }
    render(){
        return(
            <>
            <div className="container">
            <div className="resultsContainer">
            <h1>Saved Books</h1>
            <div className="bookDetailBox">
            {this.state.savedBooks.map(book=>{
                return(
                <BookDetail
                key={book.id}
                id={book.id}
                author={book.author}
                title={book.title}
                link={book.link}
                image={book.image}
                description={book.description}
                delete="delete"
                deleteBook= {this.deleteBook}
                />
                )
            })}
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default SavedPage;