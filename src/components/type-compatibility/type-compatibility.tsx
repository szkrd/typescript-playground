import * as assert from 'assert';
import * as React from 'react';

export default class TypeCompatibility extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    class Named { name: string; }
    class Person { name: string; }

    let john: Named;
    john = new Person();
    assert.equal(john instanceof Person, true);
    assert.equal(john instanceof Named, false);

    // yo dawg, heard u like java
    // bad news dis iz not java
    john = { name: 'John Doe' };
    let peter = { name: 'Peter Parker', city: 'New York' };
    john = peter;
    assert.equal(john['city'], 'New York'); // john.city would break on the IDE level

    // same shit with functions
    let x = (a: number) => 0;
    let y = (b: number, s: string) => 0;
    y = x; // OK, but `x = y;` is not
  }

  render () {
    return (
      <div>
        <h1>type compatibility</h1>
        <ul>
          <li>structural only (java and C# has nominal)</li>
          <li>the price you pay for making javascript act like java, but still work like javascript</li>
        </ul>
      </div>
    );
  }
}
