import React from 'react';
import './searchPage.css';
import API from '../../route/API';
import BookDetail from '../bookDetail/bookDetail';


class SearchPage extends React.Component {
    state={
        bookQuery: "",
        books: []
    }

handleInputChange=(event)=>{
    let input = event.target.value;
    this.setState({
        bookQuery: input
    })
    console.log(this.state.bookQuery)
    
}

getBooks = (event)=>{
 event.preventDefault();
API.search(this.state.bookQuery)
.then(results=>{
    this.setState({
        books: results.data.items
    })
    console.log(this.state.books)
    console.log(this.state.books[0].id)
}).catch(error=>{
    if (error){
        console.log(error)
    }
})

}

    render(){
        return(
            <>
            <br></br>
            <br></br>
            <div className="container ">
                <div className="searchbar-container">
                    <form onSubmit={this.getBooks}>
                        <input type="text" onChange={this.handleInputChange} placeHolder="Enter search terms here"></input>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                 </div>
            </div>
            <div className="container">
                <div className="resultContainer">

                {this.state.books ? this.state.books.map(book=>{
                    
                    if(book.volumeInfo.imageLinks){
                        
                    return(

                        <BookDetail
                         key={book.id}
                         id={book.id}
                         title={book.volumeInfo.title}
                         image={book.volumeInfo.imageLinks.smallThumbnail}
                         description={book.volumeInfo.description}
                         author={book.volumeInfo.authors}
                         view={book.volumeInfo.previewLink}
                         
                          />
                     )}
                     else{
                         return (<BookDetail
                        key={book.id}
                        title={book.volumeInfo.title}
                        image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                        description={book.volumeInfo.description}
                        author={book.volumeInfo.authors}
                        view={book.volumeInfo.previewLink}
                        delete={null}
                        
                         />
                         )
                     }
                 
                 }) : <h2>No books found, sorry!</h2>}
                
                </div>

                
            </div>
            </>
        )
    }


}

export default SearchPage;
