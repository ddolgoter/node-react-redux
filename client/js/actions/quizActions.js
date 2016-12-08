import axios from "axios";

export function getQuiz() {
    return function (dispatch) {
        dispatch({ type: "GET_QUIZ", payload: {} })
        axios.get("getQuiz")
            .then((response) => {
                dispatch({ type: "GET_QUIZ_FULFILLED", payload: response.data })
                console.log("fullfilled");
            })
            .catch((err) => {
                dispatch({ type: "GET_QUIZ_REJECTED", payload: err })
                console.log(err);
            })
    }
}

export function selectAnswer(questionId, answerId) {
    return {
        type: 'SELECT_ANSWER',
        payload: {questionId, answerId}
    }
}

export function selectNextQuestion() {
    return {
        type: 'SELECT_NEXT_QUESTION',
        payload: {}
    }
}

export function selectPreviousQuestion() {
    return {
        type: 'SELECT_PREVIOUS_QUESTION',
        payload: {}
    }
}