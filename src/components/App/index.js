import React from 'react';

// This first instance of children is destructuring of props.children. 
function App({ children }) {
  // Children are what you have between React tags
  // If you wanted to create an h1 on every page, you would put it between the opening div tag and the opening React bracket before children in next line
  // When we see children, all it means in React is that it's between two tags as opposed to self-closing tags
  return <div>{children}</div>;
}

export default App;