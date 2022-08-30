
import {applyMiddleware , createStore} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
const logger = createLogger({
    collapsed : true
})

function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleware();

    const getMiddleware = () => {
        if(process.env.NODE_ENV === 'development'){
            return composeWithDevTools(applyMiddleware(sagaMiddleware))
        }
        return applyMiddleware(sagaMiddleware)
    }
    const store = createStore(
        reducers , 
        initialState , 
        getMiddleware()
    )
    sagaMiddleware.run(rootSaga)
    return store;
}
export const wrapper = createWrapper(configureStore);
