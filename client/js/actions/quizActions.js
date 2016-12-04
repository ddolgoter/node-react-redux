import axios from "axios";

export function getQuiz() {
    return function (dispatch) {
        dispatch({ type: "GET_QUIZ", payload: {} })
        axios.get("getQuiz")
            .then((response) => {
                dispatch({ type: "GET_QUIZ_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({ type: "GET_QUIZ_REJECTED", payload: err})
            })
    }
}

export function selectAnswer(questionId, answerId) {
    return {
        type: 'SELECT_ANSWER',
        payload: {questionId, answerId}
    }
}