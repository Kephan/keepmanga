import { combineReducers } from 'redux'

import collections from './collections'
import publishers_es from './publishers_es'
import publishers_jp from './publishers_jp'
import book_types from './book_types'
import series from './series'
import user from './login'

export default combineReducers({
    collections: collections,
    publishers_es: publishers_es,
    publishers_jp: publishers_jp,
    book_types: book_types,
    series: series,
    user: user
})