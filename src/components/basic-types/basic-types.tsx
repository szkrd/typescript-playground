import * as React from 'react';

export default class BasicTypes extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    // simple types
    // -----------------------------------------------
    let isFoo: boolean = true;
    let name: string = 'Peter Parker';
    let answer: number = 42;

    // arrays
    // -----------------------------------------------
    let lotteryNumbers: number[] = [22, 48, 16, 45, 7];
    let dogs: Array<string> = [ 'Fido', 'Butch', 'Killer', 'Snoopy' ];
    let cats: ReadonlyArray<string> = [ 'Princess', 'Shadow', 'Tabby', 'Puffy']; // with mutators removed
    let whatevs: any[] = [ 'foo', 42, true ];

    // tuples (arrays with fixed number of items)
    // -----------------------------------------------
    let buyThis: [ string, number ] = [ 'eggs', 6 ];

    // enums (array of named numbers)
    // -----------------------------------------------
    enum states { SelectStation, PickDate, SetPaxCount } // 0, 1, 2
    let currentState: states = states.SelectStation;

    // void, null, undefined, never
    // -----------------------------------------------
    let run = (s: string): void => { console.log(s); };
    let thinAir: null = null;
    let horror: undefined;
    let die = (lastWords: string[]) => { throw new Error(lastWords.join(', ')); };

    // type assertion (type cast)
    // -----------------------------------------------
    let cat = 'Garfield';
    let catNameLen = (cat as string).length; // this is tsx; in ts: `(<string>cat)`
  }

  render () {
    return (
      <div>
        <h1>basic types</h1>
        <ul>
          <li>simple types</li>
          <li>arrays</li>
          <li>tuples</li>
          <li>enums</li>
          <li>void, null, undefined, never</li>
          <li>type assertion (type cast)</li>
        </ul>
      </div>
    );
  }
}
