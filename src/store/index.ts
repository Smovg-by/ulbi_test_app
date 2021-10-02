import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'

// создаем общий редьюсер
const rootReducer = combineReducers({});
// создаем стор в redux
export const store = createStore(rootReducer, applyMiddleware(thunk));

// Типизация
export type RootStateType = ReturnType<typeof store.getState> // тип стейта
export type AppDispatch = typeof store.dispatch // тип диспатча