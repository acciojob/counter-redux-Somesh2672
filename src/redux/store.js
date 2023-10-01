import {createStore} from 'redux';

import couterReducer from './Reducer/counterReducer';

const store=createStore(couterReducer);

export default store ;