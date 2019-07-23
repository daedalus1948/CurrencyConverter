import { createStore, combineReducers, applyMiddleware } from 'redux';
import { converterModule } from '../modules/Converter/store/state.js';
import { conversionReducer, loadingReducer} from '../modules/Converter/store/reducers.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  conversionList: conversionReducer,
  loading: loadingReducer
});

const store = createStore(
  rootReducer, 
  converterModule,
  applyMiddleware(thunk)
);

export default store;