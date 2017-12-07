import React, { Component } from 'react';
import Header from './Header';


export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          {this.props.children}
      </div>
    );
  }
}


// {this.props.children}

// <CommentBox/>
// <CommentList/>

// import CommentBox from './comment_box';
// import CommentList from './CommentList';