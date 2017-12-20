import * as assert from 'assert';
import * as React from 'react';

export default class TypeInference extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    let x = 3; // number
    let foo = [ 1, 2, 3, null ]; // number; `foo.push('bar');` would not work

    // contextual
    // ------------------------

    enum MouseButtons { Left, Middle, Right }

    // `addEventListener` detected
    // (works with window.onmousedown too, because such magic)
    document.addEventListener('mousedown', (mouseEvent) => {
      console.log('Button pressed: ' + MouseButtons[mouseEvent.button]); // mouseEvent.foo would not work
    });
  }

  render () {
    return (
      <div>
        <h1>type inference</h1>
        <ul>
          <li>basic</li>
          <li>best common type</li>
          <li>contextual</li>
        </ul>
      </div>
    );
  }
}
