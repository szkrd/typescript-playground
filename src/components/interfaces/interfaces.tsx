import * as React from 'react';

export default class Interfaces extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    // object interface
    // ------------------------
    interface Book {
      readonly title: string;
      readonly subtitle?: string; // <-- notice the question mark, this is an optional prop
      readonly author: string;
      read?: boolean;
      score?: number;
    }

    let oldBook: Book = { title: 'Candide', subtitle: 'All for the best', author: 'Voltaire' };
    let newBook: Book = { title: 'Men Without Women', author: 'Murakami Haruki' };
    oldBook.read = true;
    newBook.read = false;

    interface FuzzyDog {
      name: string;
      owner?: string;
      [propName: string]: any; // <-- whatever
    }

    let janesDog: FuzzyDog = { name: 'Fido', owner: 'Jane', favoriteFood: 'tripe ration' };
    let strayDog: FuzzyDog = { name: 'Socks', age: null, marked: true };

    // function interface
    // ------------------------
    interface FindFn {
      (needle: string, haystack: string[]): boolean;
    }
    let searchForOwner: FindFn = (s, names) => names.includes(s.toLowerCase());

    // index interface
    // ------------------------
    interface VeryComplicatedReadonlyArray {
      readonly [index: number]: string;
    }
    let boyNames: VeryComplicatedReadonlyArray = [ 'Joe', 'Jack', 'John' ];
    let girlNames: ReadonlyArray<string> = [ 'Jane', 'Jill', 'Judy' ];

    // class interface
    // ------------------------
    interface Dog {
      type: string;
      bark (count: number): void;
    }

    class GuardDog implements Dog {
      type: 'german shepherd';
      bark (count: number) {
        for (let i = 0; i < count; i++) {
          console.log('Woof!');
        }
      }
    }

    // interface extends
    // ------------------------
    interface Shape {
      color: string;
    }

    interface Circle {
      radius: number;
    }

    interface Disc extends Shape, Circle {
      fillColor: string;
    }
  }

  render () {
    return (
      <div>
        <h1>interfaces</h1>
        <ul>
          <li>this is structural subtyping</li>
          <li>optional props</li>
          <li>readonly props (set at creation)</li>
          <li>function interfaces</li>
          <li>index interfaces</li>
          <li>class interfaces</li>
          <li>extends, multiple extends</li>
          <li>interfaces can extend classes and vice versa</li>
        </ul>
      </div>
    );
  }
}
