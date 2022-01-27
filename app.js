import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];

    return (
      <div>
        <h1>
          React
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>
        <p>
          React Version: {reactVersion}
        </p>
      </div>
    )
  }
}

// class Mfe4Element extends HTMLElement {
//   connectedCallback() {
//     console.log('ReactDOM.render');
//     ReactDOM.render(<App/>, this);
//   }
// }

// customElements.define('react-element', Mfe4Element);

export function bootstrap() {
  console.log('bootstrap');
  ReactDOM.render(
    <App/>, 
    document.querySelector('react-element')
  );
}

export function destroy() {
  console.log('destroy');
  ReactDOM.unmountComponentAtNode(
    document.querySelector('react-element')
  )
}

// bootstrap();