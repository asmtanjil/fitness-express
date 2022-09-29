import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div className='blog-container'>
      <div className="question">
      <h4>1. How does React work?</h4>
      <p><span>Answer:</span> <br /> At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.
      Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.

      React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
  </p>
      </div>
      <div className="question">
      <h4>2. What Are The differences between Props and State?</h4>
      <p><span>Answer:</span> <br /> Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
  </p>
      </div>

      <div className="question">
      <h4>3. What are the use of UseEffect except Data Loading?</h4>
      <p><span>Answer:</span> <br /> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
  </p>
      </div>

    </div>
  );
};

export default Blog;