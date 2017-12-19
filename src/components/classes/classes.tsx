import * as React from 'react';

export default class Classes extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    class Animal {
      name: string; // plain public uninitialized
      private readonly id: number = 0; // readonly, default value

      constructor (name: string) {
        this.name = name;
      }

      // we got public (default), private, protexted
      protected rename (newName: string) {
        this.name = newName;
      }
    }

    class Dog extends Animal {
      private _bites: boolean = false; // underscore IS needed, very _shitcake
      private isAngry: boolean = false;

      static saySomething (): void { // guess what, we have static
        console.log('something');
      }

      bark (words: string = 'woof') {
        console.log(`${this.name} barks "${words}"`);
      }

      // I like typing
      get bites (): boolean {
        return this._bites;
      }

      // without this setter _bites would be a readonly
      set bites (b: boolean) {
        this._bites = b;
        if (b) {
          this.isAngry = true;
        }
      }
    }

    // abstracts can not be instanciated
    abstract class BaseDog {
      abstract bark (): void;
    }

    let fido = new Dog('Fido');
  }

  render () {
    return (
      <div>
        <h1>classes</h1>
        <ul>
          <li>public, private, protected + readonly</li>
          <li>extends</li>
          <li>getters and setters</li>
          <li>abstract</li>
          <li>cunstructor naming</li>
        </ul>
      </div>
    );
  }
}
