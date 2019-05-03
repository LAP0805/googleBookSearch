import React from 'react';
import './bookDetail.css';
import axios from 'axios';

class BookDetail extends React.Component{

    state=({
        button: "Save",
        buttonClass:"btn-primary"
    })
saveBook = (event)=>{
    let bookToSave = {
        id: event.target.getAttribute('data-tag'),
        title:this.props.title,
        author:this.props.author,
        image:this.props.image,
        description:this.props.description,
        link:this.props.view
    }
     this.setState({
         button: "Saved",
         buttonClass: "btn-success"
     })
    axios.post("/api/books", bookToSave).then((response) => {
        console.log(response)
          });       
}

render(){
    return(
        <>
        <div className="bookDetailBox">
        {this.props.delete ? 
             <button type="button" className="btn btn-primary" data-tag={this.props.id} onClick={this.props.deleteBook}>Delete</button> : 
             <button type="button" className={`btn ${this.state.buttonClass}`} data-tag={this.props.id} onClick={this.saveBook}>{this.state.button}</button>}
        <a href={this.props.view} target="_blank"><button type="button" className="btn btn-primary">View</button></a>
        <h5>{this.props.title}</h5>
        <h6>{this.props.author}</h6>
        <br></br>
        <img src={this.props.image} className="bookImage"/>
        <p>{this.props.description}</p>
       
        </div>
        
        </>
    )
    }
}

export default BookDetail;