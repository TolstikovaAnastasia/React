import React from 'react';
import ReactDOM from 'react-dom';
import { Message } from "./components/Message";
import './App.css';

function App() {
  return (
    <div className="App">
      <Message>
        {this.message}
      </Message>
    </div>
  );
}

ReactDOM.render(
  <Message message="Hello, teacher!"></Message>,
  document.getElementById('root')
);

export default App;
