import { combineReducers } from "redux"

import app from "./appReducer"
import quiz from "./quizReducer"

module.exports = combineReducers({
    app,
    quiz
})
