import logo from './logo.svg';
import './App.css';
import React from 'react';

const today = new Date()
const alt = 'Logo img'
console.log(today.getUTCDate())

function Component(props) {
  return (
    <React.Fragment>
      <img src={props.img} alt={props.alt} className='Component-image' />
      <p>{props.text}</p>
    </React.Fragment>
  )
}

class ClassComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.img} alt={this.props.alt} className='Component-image' />
        <p>{this.props.text}</p>
      </React.Fragment>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component key={'func-comp'} img={logo} text={today.getUTCDate()} alt={alt}></Component>
        <ClassComponent key={'class-comp'} img={logo} text={today.getUTCDate()} alt={alt}></ClassComponent> 
      </header>
    </div>
  );
}

export default App;
