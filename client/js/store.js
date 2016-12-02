import {createStore} from "redux"

import reducer from "./reducers"

module.exports = createStore(reducer)