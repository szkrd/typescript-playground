import * as assert from 'assert';
import * as React from 'react';

export default class Enums extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    // number based
    // ------------------------
    enum Controls { Up, Down, Left, Right, Space } // 0 based
    enum Letters { A = 97, B, C, D } // starts with 97

    assert.equal(Letters.B, 98);

    // string based
    // ------------------------
    enum Directions {
      Up = 'VK_ARROW_UP', // for debugging probably nicer than a plain number
      Down = 'VK_ARROW_DOWN',
      Left = 'VK_ARROW_LEFT',
      Right = 'VK_ARROW_RIGHT'
    }

    // computed inits
    // ------------------------
    enum Week {
      NumberOfDays = 'mtwtfss'.length,
      Today = (new Date()).getDay()
    }

    assert.equal(Week.NumberOfDays, 7);
    assert.equal(Week[7], 'NumberOfDays'); // reverse mapping

    // const enum
    // ------------------------
    const enum States { Select, Search, Result }

    let getState = () => States.Search; // will be replaced with the raw value
    assert.equal(getState.toString(), '() => 1'); // such introspection, very reflect
  }

  render () {
    return (
      <div>
        <h1>enums</h1>
        <ul>
          <li>num based, string based</li>
          <li>computed initializers</li>
          <li>reversed access</li>
          <li>const enum = replaced in code</li>
          <li>ambient enums wtf</li>
        </ul>
      </div>
    );
  }
}
