import * as assert from 'assert';
import * as React from 'react';

export default class Enums extends React.Component {
  constructor (props) {
    super(props);
    this.sandbox();
  }

  sandbox () {
    function sealed (ctor: Function) {
      Object.seal(ctor);
      Object.seal(ctor.prototype);
    }

    function friendly (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      let oldFn = descriptor.value;
      descriptor.value = function () { return oldFn.call(this) + ', my friend'; };
    }

    @sealed
    class GreeterBot {
      greeting: string;

      constructor (message: string) {
        this.greeting = message;
      }

      @friendly
      public greet () {
        return 'Hello, ' + this.greeting;
      }
    }

    let rosey = new GreeterBot('Judy');
    console.log(rosey.greet()); // prints "Hello Judy, my friend"
  }

  render () {
    return (
      <div>
        <h1>decorators</h1>
        <ul>
          <li>accessing class property descriptors is not exactly straightforward</li>
          <li>class</li>
          <li>method and accessor</li>
          <li>property</li>
          <li>parameters</li>
          <li>metadata reflection requires special flag</li>
        </ul>
      </div>
    );
  }
}
