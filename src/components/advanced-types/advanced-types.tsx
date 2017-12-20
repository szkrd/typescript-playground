import * as assert from 'assert';
import * as React from 'react';

export default class AdvancedTypes extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    // intersection
    // ------------------------
    function extend<T, U> (a: T, b: U): T & U { return Object.assign({}, a, b); }
    let foo = { foo: 1, qux: 2 };
    let bar = { bar: 1 };
    let baz = extend(foo, bar);

    // union
    // ------------------------
    let multiply = (source: string | number, times: number = 1): any => { // a bit like overloading, though ret value suffers
      if (typeof source === 'number') {
        return source * times;
      }
      return (new Array(times)).fill(source).join('');
    };
    let x: string = multiply('ho', 3);
    let y: number = multiply(5, 5);
    assert.equal(x + y, 'hohoho25');

    // type guards
    // ------------------------
    interface Fish { swim: boolean; name: string; }
    interface Bird { fly: boolean; name: string; }

    let myBird: Bird = { name: 'Tweetie', fly: true };
    let myFish: Fish = { name: 'Wanda', swim: true };
    let pets = [ myBird, myFish ];

    function isFish (pet: Fish | Bird): pet is Fish {
      return (pet as Fish).swim !== undefined;
    }

    // nullables
    // ------------------------
    let name: string | null; // with strictNullChecks only

    interface X {
      a: number;
      b?: number; // same as `number | undefined`
    }

    // disable null guard with the ! postfix (only with strictNullChecks enabled)

    // type aliases
    // ------------------------
    type Name = string;
    type Box<T> = { value: T };
    type LinkedList<T> = T & { next: LinkedList<T> }; // people.next.name;
    type truthy = 'enabled' | 'yes' | 'ok' | 'on' | 'true';
    type diceRoll = 1 | 2 | 3 | 4 | 5 | 6;
  }

  render () {
    return (
      <div>
        <h1>advanced types</h1>
        <ul>
          <li>intersection (for mixins, extends)</li>
          <li>union types (this|that)</li>
          <li>runtime type guards</li>
          <li>understands typeof in code (for string, number, boolean, symbol)</li>
          <li>understands instanceof in code</li>
          <li>nullables (null and undefined assignable to anything; vs: strictNullChecks)</li>
          <li>type aliases</li>
          <li>type can union interfaces</li>
          <li>this as a return type (for chaining)</li>
          <li>index type query operator (T, keyof T), partial, pluck etc.</li>
        </ul>
      </div>
    );
  }
}
