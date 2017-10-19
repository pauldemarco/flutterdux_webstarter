import {
  createStore
} from 'redux'
import todoApp from './reducers'
import {
  addTodo
} from './actions';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(todoApp, devToolsEnhancer({
  realtime: true,
  hostname: '192.168.1.14',
  port: 8081
}))

// Add store and action dispatcher to global variables,
// so we can access from FlutterDux
window.store = store;
window.addTodo = addTodo;