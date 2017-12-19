import * as React from 'react';

export default class VariableDeclarations extends React.Component {
  render () {
    return (
      <div>
        <h1>variable declarations</h1>
        <ul>
          <li>var is crap</li>
          <li>let is the good var</li>
          <li>const is shit, consult with your lint rules or just gtfo</li>
          <li>we also have destructuring and spread op</li>
        </ul>
      </div>
    );
  }
}
