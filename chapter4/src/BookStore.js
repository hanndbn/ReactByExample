import React from 'react';

var BookList = React.createClass({
  getInitialState(){
    return ({
      books: [
        {name: 'Zero to One', author: 'Peter Thiel'},
        {name: 'Monk who sold his Ferrari', author: 'Robin Sharma'},
        {name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam'}
      ],
      selectedBooks: []
    });
  },
  _renderBook(book){
    return (
      <div className="checkbox" key={book.id}>
        <label>
          <input type="checkbox" onChange={this.handleSelectedBooks} value={book.name}/>{book.name} -- {book.author}
        </label>
      </div>
    )
  },
  handleSubmit(event){
    console.log(event);
    event.preventDefault();
    console.log("form submit");
  },
  handleSelectedBooks(event) {

    var selectedBooks = this.state.selectedBooks;

    var index = selectedBooks.indexOf(event.target.value);
    if (event.target.checked) {
      if (index === -1) {
        selectedBooks.push(event.target.value);
      } else {
        selectedBooks.splice(index, 1)
      }
    }
    console.log(selectedBooks);
    this.setState({
      selectedBooks: selectedBooks
    })
  },
  render(){
    var self = this;
    return (
      <div>
        <h1>
          Choose from wide variety of books available in our store.
        </h1>
        <form>
          {self.state.books.map(function (book) {
            return self._renderBook(book);
          })}
        </form>
      </div>

    )
  }
});

var ShippingDetails = React.createClass({
  render(){
    return (<h1>Enter your shipping information.</h1>);
  }
});

var DeliveryDetails = React.createClass({
  render(){
    return (
      <h1>Choose your delevery options here</h1>
    );
  }
});


var BookStore = React.createClass({
  render(){
    switch (1) {
      case 1:
        return <BookList/>;
      case 2:
        return <ShippingDetails/>
      case 3:
        return <DeliveryDetails/>

    }
  }
});

module.exports = BookStore;