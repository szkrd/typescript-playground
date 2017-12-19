import * as React from 'react';

export default class Functions extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    let inc = (x: number, y: number = 1): number => x + y;
    let baptize = (familyName: string, ...names: string[]): string => [familyName, ...names].join(' ');

    // explicit this
    // ------------------------
    interface User {
      age: number;
      department: string;
    }

    interface Users {
      [name: string]: User;
    }

    let users: Users = {
      john: { age: 30, department: 'management' },
      jack: { age: 26, department: 'backend development' },
      jill: { age: 34, department: 'human resources' }
    };

    function getUser (this: Users, name: string = 'jill') {
      return this[name];
    }

    getUser.call(users, 'jack'); // would not work without the scoping

    // lightweight overloading
    // ------------------------
    function getHeight (element: HTMLElement): number; // signature A
    function getHeight (element: string): number; // signature B
    function getHeight (element: any): number { // this is not part of the "valid" overload list
      let node: HTMLElement;
      if (typeof element === 'string') { // we still have to poke the duck
        node = document.querySelector(element);
      } else {
        node = element;
      }
      return node.getBoundingClientRect().height;
    }

    getHeight('body');
    getHeight(document.getElementsByTagName('body')[0]);
    // getHeight(42); // <- will not work
  }

  render () {
    return (
      <div>
        <h1>functions</h1>
        <ul>
          <li>default (=) and optional params (?)</li>
          <li>array params</li>
          <li>explicit this</li>
          <li>lightweight overloading</li>
        </ul>
      </div>
    );
  }
}
