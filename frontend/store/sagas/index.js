import {all} from 'redux-saga/effects';

import {userSagas} from './usersSagas'
import {categorySagas} from "./categororiesSaga"
import {blogSagas} from "./blogSaga"
export default function* rootSaga(){

    yield all([
        userSagas(),
        categorySagas(),
        blogSagas()
    ])
}