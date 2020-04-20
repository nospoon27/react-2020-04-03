import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

// only dev
window.store = store;

export default store;
