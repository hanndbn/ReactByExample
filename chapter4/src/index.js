import React from 'react';
import BookStore from './BookStore';

var InputExample = React.createClass({
  render: function () {
    return (
      <input type="text" value="Shawn"/>
    );
  }
});


React.render(<InputExample />, document.getElementById('root'));
