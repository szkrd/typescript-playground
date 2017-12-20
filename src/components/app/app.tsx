import * as React from 'react';
import Toc from '../toc/toc';
import BasicTypes from '../basic-types/basic-types';
import VariableDeclarations from '../variable-declarations/variable-declarations';
import Interfaces from '../interfaces/interfaces';
import Classes from '../classes/classes';
import Functions from '../functions/functions';
import Generics from '../generics/generics';
import Enums from '../enums/enums';
import TypeInference from '../type-inference/type-inference';

// let's try to avoid webpack circular references,
// so the components are not going to be attached here
export const PAGES = [
  {id: 'basic-types', title: 'Basic types'},
  {id: 'variable-declarations', title: 'Variable declarations'},
  {id: 'interfaces', title: 'Interfaces'},
  {id: 'classes', title: 'Classes'},
  {id: 'functions', title: 'Functions'},
  {id: 'generics', title: 'Generics'},
  {id: 'enums', title: 'Enums'},
  {id: 'type-inference', title: 'Inference'},
  {id: 'type-compatibility', title: 'Compatibility'},
  {id: 'advanced-types', title: 'Types'},
  {id: 'symbols', title: 'Symbols'},
  {id: 'iterators-and-generators', title: 'Iterators and generators'},
  {id: 'modules', title: 'Modules'},
  {id: 'namespaces', title: 'Namespaces'},
  {id: 'module-resolution', title: 'Module resolution'},
  {id: 'declaration-merging', title: 'Declaration merging'},
  {id: 'decorators', title: 'Decorators'},
  {id: 'mixins', title: 'Mixins'}
];

const DEFAULT_ROUTE = 'toc';

interface AppState {
  pageId: string;
}

const Todo = () => (<h1>Todo</h1>);

export default class App extends React.Component {
  state: AppState;

  constructor (props) {
    super(props);
    this.onHashChange = this.onHashChange.bind(this);
    this.state = {
      pageId: DEFAULT_ROUTE
    };
  }

  onHashChange () {
    const hash = window.location.hash.replace(/^#\/?/, '');
    let pageId = DEFAULT_ROUTE;
    if (PAGES.map(p => p.id).includes(hash)) {
      pageId = hash;
    }
    this.setState({ pageId });
  }

  componentDidMount () {
    window.addEventListener('hashchange', this.onHashChange, false);
    this.onHashChange();
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.onHashChange, false);
  }

  render () {
    const { pageId } = this.state;
    return (
      <div>
        { pageId === DEFAULT_ROUTE && <Toc/> }
        { pageId === 'basic-types' && <BasicTypes/> }
        { pageId === 'variable-declarations' && <VariableDeclarations/> }
        { pageId === 'interfaces' && <Interfaces/> }
        { pageId === 'classes' && <Classes/> }
        { pageId === 'functions' && <Functions/> }
        { pageId === 'generics' && <Generics/> }
        { pageId === 'enums' && <Enums/> }
        { pageId === 'type-inference' && <TypeInference/> }
        { pageId === 'type-compatibility' && <Todo/> }
        { pageId === 'advanced-types' && <Todo/> }
        { pageId === 'symbols' && <Todo/> }
        { pageId === 'iterators-and-generators' && <Todo/> }
        { pageId === 'modules' && <Todo/> }
        { pageId === 'namespaces' && <Todo/> }
        { pageId === 'module-resolution' && <Todo/> }
        { pageId === 'declaration-merging' && <Todo/> }
        { pageId === 'decorators' && <Todo/> }
        { pageId === 'mixins' && <Todo/> }
      </div>
    );
  }
}
