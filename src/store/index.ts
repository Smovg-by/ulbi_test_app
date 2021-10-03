import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers'

// создаем общий редьюсер
const rootReducer = combineReducers(reducers);
// создаем стор в redux
export const store = createStore(rootReducer, applyMiddleware(thunk));

// Типизация
export type RootState = ReturnType<typeof store.getState> // тип стейта
export type AppDispatch = typeof store.dispatch // тип диспатча