import React, { Component } from 'react';

class BookList extends Component {
  render() { 
    return(
      <div className="book-list">
        <ul>
          <li>The Way of KIngs</li>
          <li>The Name of the Wing</li>
          <li>The Final Empire</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;