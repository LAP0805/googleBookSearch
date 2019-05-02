import React from 'react';
import './header.css';
class Header extends React.Component {


    render(){
        return(
            <>
            <div className="container align-items-center">
            <br></br>
            <br></br>
            <div class="row">
                <div className="col col-sm-3"></div>
                     <div className="headerBackground">
                        <h1>(React) Google Book Search </h1>
                        <h3>Search for and Save Books</h3>
                     </div>
                </div>
            </div>
            
            </>
        )
    }
}

export default Header;