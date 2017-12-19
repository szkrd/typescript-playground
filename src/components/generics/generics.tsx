import * as React from 'react';

export default class Functions extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    function identity<T> (foo: T): T {
      return foo;
    }

    let s = identity<string>('foo');

    function uniq<T> (items: T[]): T[] {
      return [...new Set(items)];
    }

    // key of
    // ------------------------
    function getProperty<T, K extends keyof T> (obj: T, key: K) {
      return obj[key];
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, 'a'); // for statically created objects only of course

    // class type
    // ------------------------
    function factory<T> (c: {new(): T; }): T { // oh god, MY EYES, MY EYES!
      return new c();
    }
  }

  render () {
    return (
      <div>
        <h1>generics</h1>
        <ul>
          <li>&lt;T&gt;</li>
          <li>T may extend an interface</li>
          <li>with obj keyof</li>
          <li>class types</li>
        </ul>
      </div>
    );
  }
}
